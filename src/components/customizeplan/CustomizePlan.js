import React from "react";
import Dropdown from "../dropdown/Dropdown";
import Features from "../features/Features";
import "./CustomizePlanStyles.css";
import { FaArrowLeft } from "react-icons/fa6";

function CustomizePlan() {
  return (
    <div className="py-3">
      <div>
        <h2 className="fs-5 fw-bold ps-4">
          <span className="custom-arrow me-4">
            <FaArrowLeft
            />
          </span>
          Customize Your Plan
        </h2>
        <hr />
        <div className="mt-4 px-4">
          <p className="fs-6 fw-bold">Choose Billing Type</p>
          <button
            label="Billed Monthly"
            className="btn btn-primary px-4 py-2 me-4 mb-2 border-0"
          >
            Billed Monthly
          </button>
          <button
            label="Billed Quarterly"
            className="btn btn-secondary px-4 py-2 me-4 mb-2"
          >
            Billed Quarterly
          </button>
          <button label="Billed Yearly" className="btn btn-secondary px-4 py-2 mb-2">
            Billed Yearly
          </button>
        </div>
        <div className="px-4">
          <Dropdown
            label="How Many Manager Do you Want?"
            options={[5, 10, 15]}
            
          />
          <Dropdown
            label="How Many Employees Do you Need?"
            options={[5, 10, 15]}
          />
          <Dropdown
            label="How Many Storage Do you Need?"
            options={[5, 10, 15]}
          />
          <Features />
        </div>
      </div>
    </div>
  );
}

export default CustomizePlan;
