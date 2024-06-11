import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/landing/home";
import { AppContextProvider } from "./context/AppContextProvider";
import { AboutPage } from "./pages/landing/about";
import { ContactPage } from "./pages/landing/contact";
import { PricingPage } from "./pages/landing/pricing";
import { SignInPge } from "./pages/auth/sign-in";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/sign-in" element={<SignInPge />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
