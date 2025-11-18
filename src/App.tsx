import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store, persistor } from './store/store';
import Index from "./pages/Index";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import CreateAdmin from "./pages/CreateAdmin";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleProtectedRoute from "./components/RoleProtectedRoute";
import DashboardLayout from "./components/DashboardLayout";

// Expose store for login check
(window as any).store = store;

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reset-password" element={<ProtectedRoute><ResetPassword /></ProtectedRoute>} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardLayout>
                      <Dashboard />
                    </DashboardLayout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/create-admin"
                element={
                  <RoleProtectedRoute allowedRoles={['super_admin']}>
                    <DashboardLayout>
                      <CreateAdmin />
                    </DashboardLayout>
                  </RoleProtectedRoute>
                }
              />
              <Route
                path="/dashboard/admins"
                element={
                  <RoleProtectedRoute allowedRoles={['super_admin']}>
                    <DashboardLayout>
                      <div className="text-center py-20">
                        <h2 className="text-2xl font-bold text-foreground">Admin Management</h2>
                        <p className="text-muted-foreground mt-2">Coming soon...</p>
                      </div>
                    </DashboardLayout>
                  </RoleProtectedRoute>
                }
              />
              <Route
                path="/dashboard/settings"
                element={
                  <ProtectedRoute>
                    <DashboardLayout>
                      <div className="text-center py-20">
                        <h2 className="text-2xl font-bold text-foreground">Settings</h2>
                        <p className="text-muted-foreground mt-2">Coming soon...</p>
                      </div>
                    </DashboardLayout>
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);

export default App;
