import { AiOutlineDollarCircle } from "react-icons/ai";

function AnimatedCard({ type }) {
  if (type === "ecommerce")
    return (
      <div className="bg-[#fff] rounded-md p-4 hover:translate-y-[-5px] hover:drop-shadow-lg transition duration-700 ease-in-out my-6">
        <div className="flex justify-between items-center text-xs font-semibold">
          <p className="uppercase text-slate-400">total earnings</p>
          <p className="text-green-500">+16.24%</p>
        </div>
        <p className="text-slate-600 font-bold text-xl pt-4">$559.25k</p>
        <div className="flex justify-between">
          <p className="text-xs underline text-slate-600 mt-7">
            View net earnings
          </p>
          <span className="bg-green-100 text-green-600 p-4 rounded-md">
            <AiOutlineDollarCircle />
          </span>
        </div>
      </div>
    );
  if (type === "react") return <p>Hola, React!</p>;
  return <div className="bg-slate-50 rounded-lg"></div>;
}

export default AnimatedCard;
