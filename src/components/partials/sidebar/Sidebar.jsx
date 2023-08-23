import { useState } from "react";

//This package is for collpasing items
import { Collapse } from "react-collapse";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import styles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

import { menuItems } from "../../../constants/data";

function Sidebar({ fullMenu, setFullMenu }) {
  const [toggle, setToggle] = useState(null);

  function toggleHandle(i) {
    if (toggle === i) {
      setToggle(null);
    } else {
      setToggle(i);
    }
  }

  function checkWindowSize() {
    if (window.innerWidth < 1024) setFullMenu(!fullMenu);
  }

  function handleClick(i) {
    toggleHandle(i);
    checkWindowSize();
  }

  return (
    <div
      className={`bg-[rgb(64,81,137)] h-[100vh] fixed top-0 left-0 overflow-y-scroll transition ease-in-out duration-600 text-[#abb9e8] ${
        styles.navbar_container
      } ${fullMenu ? " max-[1024px]:translate-x-0" : undefined}`}
    >
      <button onClick={() => setFullMenu(!fullMenu)}>Click me</button>
      <ul className={`${fullMenu ? "w-56" : "w-12"} ease-in-out duration-300 `}>
        {menuItems.map((menu, i) => (
          <NavLink to="/blog" key={i}>
            <li className="flex flex-col gap-8 " onClick={() => handleClick(i)}>
              <div
                className={` flex gap-4 cursor-pointer align-center justify-start`}
              >
                {menu.icon}
                <div
                  className={`${!fullMenu && "hidden"} flex items-center gap-2`}
                >
                  {menu.title}
                  <span
                    className={`${
                      toggle === i && "rotate-90"
                    } transition-all duration-1000`}
                  >
                    {menu.child && <MdOutlineKeyboardArrowRight />}
                  </span>
                </div>
              </div>

              <ul>
                <Collapse isOpened={toggle === i} className="">
                  {menu.child?.map((subItem, j) => (
                    <li key={j} className="">
                      {subItem.childTitle}
                    </li>
                  ))}
                </Collapse>
              </ul>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

/**
 {toggle === i ? (
              <div>
                {menu.child?.map((subItem, j) => (
                  <span key={j}>{subItem.childTitle}</span>
                ))}
              </div>
            ) : (
              ""
 )}
 */
