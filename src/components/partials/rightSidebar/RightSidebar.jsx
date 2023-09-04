import { AiFillStar, AiFillMail, AiFillCloseCircle } from "react-icons/ai";

import avatarSmall from "../../../assets/images/avatarSmall.jpg";
import giftBox from "../../../assets/images/download.png";

function RightSidebar({ toggle, setToggle }) {
  return (
    <>
      <span className="3xl:hidden fixed top-0 right-0 text-2xl ">
        {!toggle && <AiFillCloseCircle onClick={() => setToggle(!toggle)} />}
      </span>
      <p className="uppercase text-slate-500 font-semibold text-[13px] tracking-wide pb-4">
        recent activity
      </p>
      <div
        className="pl-4 h-[600px] overflow-y-hidden hover:overflow-y-scroll scrollBar"
        style={{ scrollbarGutter: "stable" }}
      >
        <div className="px-3 border-dashed border-l relative pb-4">
          <img
            src={avatarSmall}
            alt=""
            className="h-6 rounded-full absolute top-[5px] left-[-10px]"
          />
          <div className="px-4 leading-6">
            <p className="text-slate-600 font-semibold pb-2">
              Purchase by James Price
            </p>
            <p>Product noise evolve smartwatch</p>
            <p>02:14 PM Today</p>
          </div>
        </div>
        <div className="px-3 border-dashed border-l relative pb-4">
          <img
            src={avatarSmall}
            alt=""
            className="h-6 rounded-full absolute top-[5px] left-[-10px]"
          />
          <div className="px-4 leading-6">
            <p className="text-slate-600 font-semibold pb-2">
              Added new style collection
            </p>
            <p>By Nesta Technologies</p>
            <p>02:14 PM Today</p>
          </div>
        </div>
        <div className="px-3 border-dashed border-l relative pb-4">
          <img
            src={avatarSmall}
            alt=""
            className="h-6 rounded-full absolute top-[5px] left-[-10px]"
          />
          <div className="px-4 leading-6">
            <p className="text-slate-600 font-semibold pb-2">
              Natasha Carey have liked the products
            </p>
            <p>Allow users to like products in your WooCommerce store.</p>
            <p>25 Dec, 2022</p>
          </div>
        </div>
        <div className="px-3 border-dashed border-l relative pb-4">
          <img
            src={avatarSmall}
            alt=""
            className="h-6 rounded-full absolute top-[5px] left-[-10px]"
          />
          <div className="px-4 leading-6">
            <p className="text-slate-600 font-semibold pb-2">
              Natasha Carey have liked the products
            </p>
            <p>Allow users to like products in your WooCommerce store.</p>
            <p>25 Dec, 2022</p>
          </div>
        </div>
        <div className="px-3 border-dashed border-l relative pb-4">
          <img
            src={avatarSmall}
            alt=""
            className="h-6 rounded-full absolute top-[5px] left-[-10px]"
          />
          <div className="px-4 leading-6">
            <p className="text-slate-600 font-semibold pb-2">
              Natasha Carey have liked the products
            </p>
            <p>Allow users to like products in your WooCommerce store.</p>
            <p>25 Dec, 2022</p>
          </div>
        </div>
        <div className="px-3 border-dashed border-l relative pb-4">
          <img
            src={avatarSmall}
            alt=""
            className="h-6 rounded-full absolute top-[5px] left-[-10px]"
          />
          <div className="px-4 leading-6">
            <p className="text-slate-600 font-semibold pb-2">
              Natasha Carey have liked the products
            </p>
            <p>Allow users to like products in your WooCommerce store.</p>
            <p>25 Dec, 2022</p>
          </div>
        </div>
      </div>
      <div className="py-6">
        <p className="uppercase text-slate-500 font-semibold text-[14px] tracking-wide">
          TOP 10 CATEGORIES
        </p>
        <div className="p-4">
          <ol className="list-decimal flex flex-col gap-4 text-[14px]">
            <li className="">
              Coffee <span className="float-right">(10,254)</span>
            </li>
            <li className="">
              Coffee <span className="float-right">(10,254)</span>
            </li>
            <li className="">
              Coffee <span className="float-right">(10,254)</span>
            </li>
            <li className="">
              Coffee <span className="float-right">(10,254)</span>
            </li>
            <li className="">
              Coffee <span className="float-right">(10,254)</span>
            </li>
            <li className="">
              Coffee <span className="float-right">(10,254)</span>
            </li>
            <li className="">
              Coffee <span className="float-right">(10,254)</span>
            </li>
            <li className="">
              Coffee <span className="float-right">(10,254)</span>
            </li>
            <li className="">
              Coffee <span className="float-right">(10,254)</span>
            </li>
            <li className="">
              Coffee <span className="float-right">(10,254)</span>
            </li>
          </ol>
        </div>
        <div className="text-center">
          <button className="underline">View all Categories</button>
        </div>
      </div>
      <div className="py-4">
        <p className="uppercase text-slate-500 font-semibold text-[14px] tracking-wide">
          Product Reviews
        </p>

        <div className="pt-4">
          <div className="flex gap-4 p-4 border-dashed border rounded-lg">
            <img src={avatarSmall} alt="" className="h-14 rounded-lg" />
            <div>
              <q className="italic">The product is very good and I like it.</q>
              <div className="flex text-sm text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <div className="flex gap-4 p-4 border-dashed border rounded-lg">
            <img src={avatarSmall} alt="" className="h-14 rounded-lg" />
            <div>
              <q className="italic">The product is very good and I like it.</q>
              <div className="flex text-sm text-yellow-400">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="uppercase text-slate-500 font-semibold text-[14px] tracking-wide">
          Product Reviews
        </p>
        <div className="flex justify-between items-center px-4 py-3 bg-slate-100 rounded-lg">
          <div className="flex text-yellow-400">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className="text-slate-600 text-[14px]">4.5 out of 5</p>
        </div>
        <p className="text-center py-1 pb-4">
          Total <span className="font-semibold">5.50k</span> reviews
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center gap-4">
            <p className="text-slate-600 font-semibold">5 star</p>
            <div className="w-40 bg-gray-200 rounded-full h-[5px] dark:bg-gray-700">
              <div className="bg-blue-600 h-[5px] rounded-full dark:bg-blue-500 w-28"></div>
            </div>
            <p className="font-semibold">2758</p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-slate-600 font-semibold">4 star</p>
            <div className="w-40 bg-gray-200 rounded-full h-[5px] dark:bg-gray-700">
              <div className="bg-green-600 h-[5px] rounded-full dark:bg-blue-500 w-24"></div>
            </div>
            <p className="font-semibold">2758</p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-slate-600 font-semibold">3 star</p>
            <div className="w-40 bg-gray-200 rounded-full h-[5px] dark:bg-gray-700">
              <div className="bg-yellow-600 h-[5px] rounded-full dark:bg-blue-500 w-20"></div>
            </div>
            <p className="font-semibold">2758</p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-slate-600 font-semibold">2 star</p>
            <div className="w-40 bg-gray-200 rounded-full h-[5px] dark:bg-gray-700">
              <div className="bg-orange-600 h-[5px] rounded-full dark:bg-blue-500 w-10"></div>
            </div>
            <p className="font-semibold">2758</p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p className="text-slate-600 font-semibold">1 star</p>
            <div className="w-40 bg-gray-200 rounded-full h-[5px] dark:bg-gray-700">
              <div className="bg-red-600 h-[5px] rounded-full dark:bg-blue-500 w-6"></div>
            </div>
            <p className="font-semibold">2758</p>
          </div>
        </div>
      </div>
      <div className="py-8 px-2">
        <div className="flex flex-col gap-2 justify-center items-center bg-slate-100 rounded-lg py-4 px-8">
          <img src={giftBox} alt="" />
          <p className="pt-4 text-base text-slate-500 font-semibold">
            Invite New Seller
          </p>
          <p className="text-center">
            Refer a new seller to us and earn $100 per refer.
          </p>
          <button className=" bg-[#405189] text-slate-50 rounded-3xl mt-2 flex justify-center items-center">
            <span className="bg-[hsla(0,0%,100%,.1)] p-[14px] rounded-full">
              <AiFillMail />
            </span>
            <span className="pr-6 pl-2">Invite now</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default RightSidebar;
