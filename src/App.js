import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContextProvider } from "./context/global";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/MainrightCont/:id" element={<Home />} />
        </Routes>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
