import { BsArrowRight, BsArrowLeft, BsBagDash } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { IoLanguage, IoNotificationsOutline } from "react-icons/io5";
import { TbLayoutDashboard } from "react-icons/tb";
import { BiMoon } from "react-icons/bi";
import profile from "../../../assets/images/profile.png";
import { useState } from "react";

function Navbar({ fullMenu, setFullMenu, toggle, setToggle }) {
  const [profileMenu, setProfileMenu] = useState(false);

  function handleClick() {
    setFullMenu(!fullMenu);
    setToggle(!toggle);
  }
  return (
    <nav className="flex justify-between text-[1.3rem] text-slate-500 px-6 bg-[#fff] drop-shadow-sm">
      <div className="flex justify-center items-center gap-6 py-3">
        <button onClick={handleClick}>
          {fullMenu ? <BsArrowLeft /> : <BsArrowRight />}
        </button>

        <div className="relative flex justify-start items-center rounded-md bg-slate-100 pl-3 max-[672px]:hidden">
          <span className=" text-slate-500 text-[18px]">
            <AiOutlineSearch />
          </span>
          <input
            className="outline-none text-sm placeholder:text-[13px] placeholder:text-slate-500 placeholder:font-light bg-slate-100 py-2 pl-3 w-56 max-[768px]:w-40 "
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <div className="flex items-center justify-center gap-2 pr-4">
          <span className="hover:bg-slate-200 rounded-full p-2 cursor-pointer min-[673px]:hidden">
            <AiOutlineSearch />
          </span>
          <span className="hover:bg-slate-200 rounded-full p-2 cursor-pointer">
            <IoLanguage />
          </span>
          <span className="hover:bg-slate-200 rounded-full p-2 cursor-pointer">
            <TbLayoutDashboard />
          </span>
          <span className="hover:bg-slate-200 rounded-full p-2 relative cursor-pointer">
            <span className="absolute top-[-.9em] right-[-.4em] text-[11px] text-slate-50 bg-cyan-500 px-[.6em] py-[.2em] font-semibold rounded-full">
              5
            </span>
            <BsBagDash />
          </span>
          <span className="hover:bg-slate-200 rounded-full p-2 cursor-pointer">
            <BiMoon />
          </span>
          <span className="hover:bg-slate-200 rounded-full p-2 relative cursor-pointer">
            <span className="absolute top-[-.9em] right-[-.4em] text-[11px] text-slate-50 bg-orange-600 px-[.6em] py-[.2em] font-semibold rounded-full">
              5
            </span>
            <IoNotificationsOutline />
          </span>
        </div>
        <div className="relative cursor-pointer">
          <div
            className="flex items-center justify-center gap-3 p-4 text-sm bg-slate-100 "
            onClick={() => setProfileMenu(!profileMenu)}
          >
            <img src={profile} alt="profile image" className="h-8" />
            <div className=" max-[768px]:hidden">
              <p className="uppercase text-slate-600 font-medium">sakib</p>
              <p className="text-xs">Founder</p>
            </div>
          </div>
          <div
            className={`${
              profileMenu ? "" : "hidden"
            } z-10 absolute top-18 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
