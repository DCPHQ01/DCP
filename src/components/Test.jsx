import CircularProgress from "./CircularProgress";

export default function test() {
  const data = [
    { percent: 95, label: "Assets Recovery" },
    { percent: 85, label: "Fraud Examination" },
    { percent: 90, label: "Forensic Accounting" },
    { percent: 95, label: "Management Consulting" },
    { percent: 85, label: "Revenue Optimization" },
    { percent: 90, label: "Tax Audit & Technical Services" },
  ];

  return (
    <div className="w-full">
      <div className="flex justify-between flex-wrap w-full items-center gap-10 px-4">
        {data.map((item, index) => (
          <CircularProgress key={index} percent={item.percent} label={item.label} />
        ))}
      </div>
    </div>
  );
}
