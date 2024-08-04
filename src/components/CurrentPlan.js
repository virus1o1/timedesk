import React from "react";
import { MdLibraryAddCheck } from "react-icons/md";
import './CurrentPlanStyles.css';

function CurrentPlan() {

    const plans = [
        { icon: <MdLibraryAddCheck />, description: 'Lorem ipsum dolor' },
        { icon: <MdLibraryAddCheck />, description: 'Lorem ipsum dolor ipsum' },
        { icon: <MdLibraryAddCheck />, description: 'Lorem ipsum dolor ipsum omit' },
        { icon: <MdLibraryAddCheck />, description: 'Lorem ipsum dolor ipsum omit Notor Choose' },
      ];
  return (
    <div className=" py-3 pb-0">
      <h2 className="fs-5 fw-bold ps-4">Your Plan</h2>
      <hr />
      {plans.map((plan, index) => (
        <div key={index} className="w-100 px-4 d-flex justify-content-start align-items-baseline lh-lg">
            <div className="me-3 custom-icon">{plan.icon}</div>
            <div>{plan.description}</div>
        </div>
      ))}
      <button className="w-100 rounded-bottom py-3 custom-btn border-0 fw-bold text-white mt-3">Contact Sales</button>
    </div>
  );
}

export default CurrentPlan;
