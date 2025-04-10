import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

vi.mock('./components/layouts/Sidebar', () => ({
  Sidebar: () => <div data-testid="mock-sidebar">Sidebar</div>,
}));
vi.mock('./components/layouts/Header', () => ({
  Header: () => <div data-testid="mock-header">Header</div>,
}));
vi.mock('./components/Dashboard', () => ({
  Dashboard: () => <div data-testid="mock-dashboard">Dashboard Page</div>,
}));

vi.mock('./pages/Nintendo', async () => { 
  const OriginalNintendoHeader = (await import('./components/nintendo/NintendoHeader')).default;
  const MockNintendoTable = () => <div data-testid="mock-nintendo-table">Nintendo Table</div>;
  const MockTableFilter = () => <div data-testid="mock-nintendo-filter">Nintendo Filter</div>;

  return {
    Nintendo: () => (
      <div data-testid="nintendo-page">
        <OriginalNintendoHeader />
        <MockTableFilter />
        <MockNintendoTable />
      </div>
    ),
  };
});

import { useNavigate } from 'react-router-dom';
vi.mock('./pages/NintendoNewRequest', () => ({
  NintendoNewRequest: () => {
    const navigate = useNavigate();
    return (
      <div data-testid="new-request-page">
        New Request Form
        <button onClick={() => navigate('/nintendo')}>Cancel</button>
      </div>
    );
  },
}));

describe('App Routing', () => {
  it('navigates to New Request form when "New Request" button is clicked on Nintendo page', async () => {
    const user = userEvent.setup();
    
    window.history.pushState({}, 'Nintendo Page', '/nintendo');
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: /nintendo/i })).toBeInTheDocument();

    const newRequestButton = screen.getByRole('button', { name: /new request/i });
    expect(newRequestButton).toBeInTheDocument();
    await user.click(newRequestButton);

    await waitFor(() => {
      expect(screen.getByTestId('new-request-page')).toBeInTheDocument();
      expect(screen.getByText('New Request Form')).toBeInTheDocument();
    });
    expect(window.location.pathname).toBe('/create-form');
  });

  it('navigates back to Nintendo page when "Cancel" is clicked on New Request form', async () => {
     const user = userEvent.setup();

     // Start at the New Request page
     window.history.pushState({}, 'New Request Page', '/create-form');
     render(<App />);

     // We verify we are on the New Request page
     expect(screen.getByTestId('new-request-page')).toBeInTheDocument();

     // Find and click the "Cancel" button 
     const cancelButton = screen.getByRole('button', { name: /cancel/i });
     expect(cancelButton).toBeInTheDocument();
     await user.click(cancelButton);

     // Here we wait for navigation (back to /nintendo) and check if Nintendo page is rendered
     await waitFor(() => {
       // we check for the H1 title again, which should be unique
        expect(screen.getByRole('heading', { level: 1, name: /nintendo/i })).toBeInTheDocument();
     });
     expect(window.location.pathname).toBe('/nintendo');
   });

});
