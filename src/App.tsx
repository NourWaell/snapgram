import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Route, Routes } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import { AuthLayout } from "./_auth/AuthLayout";
import { Home } from "./_root/pages";
import RootLayout from "./_root/RootLayout";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
}

export default App;
