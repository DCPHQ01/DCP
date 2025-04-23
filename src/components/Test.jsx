import React from "react";
import CircularProgress from "./CircularProgress";

const Test = () => {
  const data = [
    { percent: 95, label: "Assets Recovery" },
    { percent: 95, label: "Fraud Examination" },
    { percent: 90, label: "Forensic Accounting" },
    { percent: 95, label: "Management Consulting" },
    { percent: 85, label: "Revenue Optimization" },
    { percent: 90, label: "Tax Audit & Technical Services" },
  ];

  return (
    <div className="w-full">      
      <div className="flex justify-between flex-wrap w-full gap-10 px-4">
        {data.map((item, index) => (
          <div key={index} className="snap-center flex-shrink-0">
            <CircularProgress percent={item.percent} label={item.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Test);
