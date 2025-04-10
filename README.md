# quce - Project Documentation

## 1. Project Description

`quce` is a web application built with React, Vite, and TypeScript. Itfeatures:

*   A main **Dashboard** section.
*   A dedicated **Nintendo** section for displaying data in a table, creating new requests via a form.


## 2. Design & UI

*   **Styling:** TailwindCSS is used for utility-first CSS styling.
*   **Component Library:** Shadui is used for UI components (like Tables, Buttons, Inputs, Dialogs, etc.)
*   **Layout:** The application features a consistent layout with a persistent Sidebar and Header across different pages.

## 3. Technology Stack

*   **Framework:** React 19
*   **Build Tool:** Vite
*   **Language:** TypeScript
*   **Routing:** React Router
*   **Styling:** TailwindCSS
*   **UI Components:** shadcn/ui 
*   **Notifications:** Sonner (Toast notifications)
*   **Linting:** ESLint with TypeScript support
*   **Package Manager:** npm 

## 4. Setup Instructions

Follow these steps to set up and run the project locally:

1.  **Prerequisites:**
    *   Ensure you have Node.js (which includes npm) installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2.  **Clone the Repository:**
    ```bash
    git clone <repository_url>
    cd quce
    ```

3.  **Install Dependencies:**
    ```bash
    npm install
    ```

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    This will start the application in your web browser at `http://localhost:5173` 

5.  **Linting:**
    To check the code for potential errors and enforce code style consistency, run:
    ```bash
    npm run lint
    ```

## 5. Building for Production

When you are ready to deploy the application, you need to create an optimized production build:

```bash
npm run build
```

This command triggers the TypeScript compiler (`tsc -b`) and then uses Vite (`vite build`) to bundle the application's assets (JavaScript, CSS, images, etc.) into a `dist` folder in the project root. The contents of this `dist` folder are static files optimized for performance and ready for deployment.

## 6. Deployment

You can deploy using vercel, netlify

## 7. Project Structure

The project follows a typical structure for a Vite + React + TypeScript application:

```
quce/
├── public/             # Static assets
├── src/                # Source code
│   ├── assets/         # Project-specific assets (images, etc.)
│   ├── components/     # Reusable React components
│   │   ├── layouts/    # Layout components (Sidebar, Header)
│   │   ├── nintendo/   # Components specific to Nintendo feature
│   │   └── ui/         # shadcn/ui components
│   ├── lib/            # Utility functions and data
│   │   ├── data/       # Static data or data fetching logic
│   │   └── utils.ts    # Helper functions (e.g., cn for Tailwind)
│   ├── pages/          # Top-level page components for routes
│   ├── types/          # TypeScript type definitions
│   ├── App.css         # Global CSS styles (potentially minimal)
│   ├── App.tsx         # Main application component (routing setup)
│   ├── index.css       # TailwindCSS base styles and directives
│   ├── main.tsx        # Entry point of the application
│   └── vite-env.d.ts   # Vite environment types
├── .gitignore          # Git ignore rules
├── eslint.config.js    # ESLint configuration
├── index.html          # Main HTML template
├── package.json        # Project metadata and dependencies
├── postcss.config.js   # PostCSS configuration (for Tailwind)
├── README.md           # Project README (currently Vite default)
├── tailwind.config.js  # TailwindCSS configuration
├── tsconfig.json       # TypeScript base configuration
└── vite.config.ts      # Vite configuration
```
