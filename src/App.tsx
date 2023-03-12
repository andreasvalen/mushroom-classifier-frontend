import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavigationHeader from "./components/navigation/NavigationHeader";
import LandingPage from "./components/pages/home/Home";
import SearchPage from "./components/pages/search/SearchPage";
import styled from "styled-components";
import { palette } from "./palette";
import TakePhoto from "./components/pages/home/TakePhoto";

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <NavigationHeader />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route
            path="/counter"
            element={
              <div>
                <TakePhoto />
              </div>
            }
          />
          <Route path="/*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
      <StyledFooter>
        <p>&copy; {"Gruppe6 - DAT251 - 2023"}</p>
      </StyledFooter>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div``;

const StyledFooter = styled.footer`
  text-align: center;
`;
