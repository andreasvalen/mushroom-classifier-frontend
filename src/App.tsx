import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavigationHeader from "./components/navigation/NavigationHeader";
import LandingPage from "./components/pages/home/Home";
import SearchPage from "./components/pages/search/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <NavigationHeader title="Rapporty" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/counter" element={<div>mushrroms are nice</div>} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
