import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

function Revenue() {
  const [state] = useState({
    series: [
      {
        name: "Orders",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "Earnings",
        type: "area",
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: "Refunds",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: "line",
        stacked: false,
        foreColor: "#888B9A",
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
        },
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      grid: {
        show: true,
        borderColor: "#f1f5f9",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      labels: [
        "01/01/2023",
        "02/01/2023",
        "03/01/2023",
        "04/01/2023",
        "05/01/2023",
        "06/01/2023",
        "07/01/2023",
        "08/01/2023",
        "09/01/2023",
        "10/01/2023",
        "11/01/2023",
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0);
            }
            return y;
          },
        },
      },
    },
  });
  return (
    <section className="flex max-xl:flex-col gap-6">
      <div className="xl:w-[65%] w-full bg-[#fff] rounded-md">
        <div className="flex justify-between p-4 items-center">
          <p className="font-semibold text-slate-600">Revenue</p>
          <div className="text-xs flex gap-4 transition duration-300">
            <button className="bg-blue-100 hover:bg-blue-600 hover:text-slate-50 text-blue-600 rounded-sm px-2 py-1 transition duration-300">
              All
            </button>
            <button className="bg-blue-100  hover:bg-blue-600 hover:text-slate-50 text-blue-600 rounded-sm px-2 py-1 transition duration-300">
              1M
            </button>
            <button className="bg-blue-100  hover:bg-blue-600 hover:text-slate-50 text-blue-600 rounded-sm px-2 py-1 transition duration-300">
              6M
            </button>
            <button className="bg-slate-100 hover:bg-slate-600 hover:text-slate-50 text-slate-600 rounded-sm px-2 py-1 transition duration-300">
              1Y
            </button>
          </div>
        </div>
        <div className="flex justify-around border-dashed border-y">
          <div className="border-dashed border-r py-4 w-1/4">
            <p className="font-semibold text-slate-600 text-center">7,585</p>
            <p className="text-sm text-slate-500 text-center">Orders</p>
          </div>
          <div className="border-dashed border-r py-4 w-1/4">
            <p className="font-semibold text-slate-600 text-center">7,585</p>
            <p className="text-sm text-slate-500  text-center">Orders</p>
          </div>
          <div className="border-dashed border-r  py-4 w-1/4">
            <p className="font-semibold text-slate-600  text-center">7,585</p>
            <p className="text-sm text-slate-500  text-center">Orders</p>
          </div>
          <div className=" py-4 w-1/4">
            <p className="font-semibold text-slate-600  text-center">7,585</p>
            <p className="text-sm text-slate-500  text-center">Orders</p>
          </div>
        </div>
        <div>
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="line"
            height={350}
          />
        </div>
      </div>
      <div className="bg-[#fff] rounded-md xl:w-[35%] w-full">
        <div className="flex justify-between py-4 px-4 items-center border-b">
          <p className="font-semibold text-slate-600">Sales by Locations</p>
          <div className="text-xs flex gap-4 transition duration-300">
            <button className="bg-slate-100 hover:bg-slate-600 hover:text-slate-50 text-slate-600 rounded-sm px-2 py-1 transition duration-300">
              Export Report
            </button>
          </div>
        </div>
        <div style={{ margin: "auto", width: "400px", height: "300px" }}>
          <VectorMap
            map={worldMill}
            containerStyle={{ width: 400, height: 300 }}
            backgroundColor="#fff"
            zoomOnScroll={false}
            zoomButtons={false}
            regionStyle={{
              initial: {
                fill: "#f1f5f9",
                cursor: "default",
              },
              hover: {
                fill: "red",
              },
              active: {
                fill: "red",
              },
              selected: {
                fill: "green",
              },
            }}
          />
        </div>
        <div>
          <div className="flex justify-between items-center text-slate-700 text-sm px-6 py-2 font-[400]">
            <p>Canada</p>
            <p>75%</p>
          </div>
          <div className=" flex justify-center items-center">
            <div className="w-[90%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between items-center text-slate-700 text-sm px-6 py-2 font-[400]">
            <p>India</p>
            <p>45%</p>
          </div>
          <div className=" flex justify-center items-center">
            <div className="w-[90%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between items-center text-slate-700 text-sm px-6 py-2 font-[400]">
            <p>Bangladesh</p>
            <p>65%</p>
          </div>
          <div className=" flex justify-center items-center">
            <div className="w-[90%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Revenue;
