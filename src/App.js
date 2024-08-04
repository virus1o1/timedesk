import React from "react";
import Header from "./components/Header";
import CustomizePlan from "./components/CustomizePlan";

import BigFooter from "./components/BigFooter";
import "./App.css";
import "@fontsource/poppins";
import CurrentPlan from "./components/CurrentPlan";

function App() {
  return (
    <>
      <div className="content-wrapper mb-2">
        <Header />
        <div className="container-fluid p-0 d-flex align-items-start">
          <div className="bg-white my-4 rounded-3">
            <CustomizePlan />
          </div>
          <div className="custom-bg h-auto my-4 rounded-3">
            <CurrentPlan/>
          </div>
        </div>
      </div>
      <BigFooter />
    </>
  );
}

export default App;
