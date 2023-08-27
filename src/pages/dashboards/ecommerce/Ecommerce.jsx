import { MdOutlineDateRange } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AnimatedCard from "../../../ui/animatedCard/AnimatedCard";
import Revenue from "../../../components/ecommerce/revenue/Revenue";

function Ecommerce() {
  return (
    <section className="px-8 py-6 bg-slate-100 flex justify-between gap-6">
      <div className="w-full">
        <div className="flex justify-between">
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
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <AnimatedCard type="ecommerce" />
          <AnimatedCard type="ecommerce" />
          <AnimatedCard type="ecommerce" />
          <AnimatedCard type="ecommerce" />
        </div>
        <div>
          <Revenue />
        </div>
      </div>
      <div className="h-full bg-[#ffff] w-[250px]">hello</div>
    </section>
  );
}

export default Ecommerce;
