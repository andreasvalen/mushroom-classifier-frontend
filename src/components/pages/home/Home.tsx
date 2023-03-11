import React from "react";
import logo from "../../../logo.svg";
import "../../../App.css";
import { mushroomAPI } from "../../../api/mushroomAPI";
import UploadComponent from "./Upload";

function LandingPage() {
  return (
    <div className="App">
      <UploadComponent />
    </div>
  );
}

export default LandingPage;
