import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from "./components/layouts/Sidebar";
import { Header } from "./components/layouts/Header";
import { Dashboard } from "./components/Dashboard";
import { Nintendo } from "./pages/Nintendo";
import { NintendoNewRequest } from "./pages/NintendoNewRequest";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 bg-gray-50">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/nintendo" element={<Nintendo />} />
              <Route path="/create-form" element={<NintendoNewRequest />} />
            </Routes>
          </main>
        </div>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
