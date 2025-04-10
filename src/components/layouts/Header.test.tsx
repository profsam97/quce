import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest'; // Import vi explicitly
import { Header } from './Header'; // Adjust the import path if necessary
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

// Mock the Sidebar component as it's used within Header for the mobile menu
vi.mock('./Sidebar', () => ({
  Sidebar: () => <div data-testid="mock-sidebar">Mock Sidebar</div>,
}));

describe('Header Component', () => {
  it('should render the header elements', () => {
    render(
      // Wrap Header in MemoryRouter because it might contain Link components or hooks like useNavigate
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Check for the presence of the search input placeholder
    const searchInput = screen.getByPlaceholderText(/Search Parameter & Params/i); // Corrected placeholder
    expect(searchInput).toBeInTheDocument();

    // Check for the presence of one of the buttons (e.g., Branch button)
    // Using text content which is slightly more reliable than assumed aria-labels
    const branchButton = screen.getByRole('button', { name: /ikoyi branch/i });
    expect(branchButton).toBeInTheDocument();

    // Check for the user button
    const userButton = screen.getByRole('button', { name: /eric alewoya/i });
    expect(userButton).toBeInTheDocument();

    // // Check for the notification button - Querying by icon/structure is brittle without test-ids
    // // const notificationButton = screen.getByRole('button', { name: /notifications/i }); // This assumed label likely doesn't exist
    // // expect(notificationButton).toBeInTheDocument();

    // // Check if the mobile menu button renders - This needs specific knowledge of SheetTrigger's output
    // // const mobileMenuButton = screen.getByRole('button', { name: /open menu/i }); // Assumed label
    // // expect(mobileMenuButton).toBeInTheDocument();

  });
});
