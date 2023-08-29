import { useState } from "react";
import ReactApexChart from "react-apexcharts";

function StoreVisits() {
  const [state] = useState({
    series: [44, 55, 41, 85, 45],
    options: {
      chart: {
        type: "donut",
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  });
  return (
    <div className="bg-[#fff] rounded-lg">
      <div className="flex justify-between items-center border-b p-4">
        <p className="text-md font-semibold text-slate-600">Top Sellers</p>
        <p className=" text-slate-500 text-sm">Report</p>
      </div>
      <div className="py-6">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
        />
      </div>
    </div>
  );
}

export default StoreVisits;
