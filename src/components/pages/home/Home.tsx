import React from "react";
import logo from "../../../logo.svg";
import "../../../App.css";
import { mushroomAPI } from "../../../api/mushroomAPI";

function LandingPage() {
  return (
    <div className="App">
      <button
        onClick={async () => {
          const res = await mushroomAPI.getMushrooms();
          console.log("ressss", res);
        }}
      />
    </div>
  );
}

export default LandingPage;
