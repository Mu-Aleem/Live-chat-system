import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register, Dashboard } from "./pages";
import { Toaster } from "react-hot-toast";
import { PublicRoutes, ProtectedRoute } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />

        <Routes>
          <Route
            path="/login"
            element={
              <>
                <PublicRoutes>
                  <Login />
                </PublicRoutes>
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <PublicRoutes>
                  <Register />
                </PublicRoutes>
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
