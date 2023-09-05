import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AnimatedCard from "../../../ui/animatedCard/AnimatedCard";
import Revenue from "../../../components/ecommerce/revenue/Revenue";
import BestSelling from "../../../components/ecommerce/products/BestSelling";
import StoreVisits from "../../../components/ecommerce/StoreVisits";
import { BiStats } from "react-icons/bi";
import { useState } from "react";
import "./style.scss";
import RightSidebar from "../../../components/partials/rightSidebar/RightSidebar";

function Ecommerce() {
  const [toggle, setToggle] = useState(true);
  return (
    <section className=" bg-slate-100 flex justify-between transition ease-in-out duration-300">
      <div className="flex-1 px-6 py-6 transition ease-in-out duration-300">
        <div className="flex justify-between max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-6">
          <div>
            <p className="font-semibold text-slate-700">Good Morning, Sakib!</p>
            <p className="text-sm text-slate-500">
              Here&apos;s what&apos;s happening with your store today.
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button className="flex justify-center items-center">
              <p className="text-xs bg-[#fff] p-3 rounded-l-[3px]">
                03 Jan, 2023 to 07 Jan, 2023
              </p>
              <span className="p-3 bg-blue-900 text-slate-50 rounded-r-[3px]">
                <MdOutlineDateRange />
              </span>
            </button>
            <button className="text-xs text-green-600 bg-emerald-100 p-3 rounded-md flex justify-center items-center gap-1 hover:text-slate-50 hover:bg-emerald-500 duration-300">
              <span className=" text-[10px]">
                <AiOutlinePlusCircle />
              </span>
              Add Products
            </button>
            <button
              className="p-3 rounded-lg bg-blue-200 text-blue-500 hover:bg-blue-500 hover:text-slate-50"
              onClick={() => setToggle(!toggle)}
            >
              <BiStats />
            </button>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 grid-cols-1">
          <AnimatedCard type="ecommerce" />
          <AnimatedCard type="ecommerce" />
          <AnimatedCard type="ecommerce" />
          <AnimatedCard type="ecommerce" />
        </div>
        <Revenue />
        <BestSelling />
        <div className="lg:w-[30%]">
          <StoreVisits />
        </div>
      </div>
      <div
        className={`${
          toggle ? "hidden" : ""
        } transition ease-in-out duration-300 bg-[#ffff] w-[300px] drop-shadow fixed overflow-y-hidden hover:overflow-y-scroll h-screen right-0 top-0  text-slate-400 text-[13px] z-4 p-4 noScrollbar`}
      >
        <RightSidebar toggle={toggle} setToggle={setToggle} />
      </div>
    </section>
  );
}

export default Ecommerce;
