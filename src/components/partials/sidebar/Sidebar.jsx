import { Link, NavLink } from "react-router-dom";
import { menuItems } from "../../../constants/data";
//This package is for collpasing items
import { Collapse } from "react-collapse";
//Icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
//Images
import logo from "../../../assets/images/logo.png";
import logoIcon from "../../../assets/images/logo-icon.png";

//Style
import styles from "./Sidebar.module.scss";
import { useState } from "react";

//Main component start
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
    if (window.innerWidth < 1280) setFullMenu(!fullMenu);
  }

  function handleClick(i) {
    toggleHandle(i);
    checkWindowSize();
  }

  return (
    <div
      className={`bg-[rgb(64,81,137)]  text-[#abb9e8] ${
        styles.navbar_container
      } ${
        fullMenu ? " max-[1280px]:translate-x-0 " : undefined
      } transition ease-in-out duration-600`}
    >
      <div className="flex justify-center items-center py-6 sticky">
        <Link to="/">
          {fullMenu === true ? (
            <>
              <img src={logo} alt="" className="h-[18px]" />
              <span
                onClick={() => setFullMenu(!fullMenu)}
                className="text-xl text-slate-100 lg:hidden absolute top-5 right-2 ring-2 rounded-full ring-slate-400"
              >
                <IoCloseOutline />
              </span>
            </>
          ) : (
            <img src={logoIcon} alt="" className="h-[22px] mb-3" />
          )}
        </Link>
      </div>
      <ul
        className={`${
          fullMenu ? " w-[250px]" : "w-[70px]"
        } ease-in-out duration-300 overflow-y-scroll h-[100vh] text-[14px] flex flex-col gap-4`}
      >
        {fullMenu && (
          <span className="uppercase font-semibold text-xs py-2 pl-6">
            menu
          </span>
        )}
        {menuItems.map((menu, i) => (
          <>
            {fullMenu && (
              <li
                className=" active:text-slate-100 pl-6"
                onClick={() => handleClick(i)}
                key={i}
              >
                <NavLink to={menu.link} className="">
                  <div
                    className={` flex gap-4 cursor-pointer align-center justify-start hover:text-slate-100 hover:font-semibold`}
                  >
                    <span className="text-[1.4rem]">{menu.icon}</span>
                    <span className={`flex items-center gap-2 pb-4`}>
                      {menu.title}
                      <span
                        className={`transition-all duration-600 ${
                          toggle === i && "rotate-90"
                        }`}
                      >
                        {menu.child && <MdOutlineKeyboardArrowRight />}
                      </span>
                    </span>
                  </div>
                </NavLink>
                <ul className="">
                  <Collapse isOpened={toggle === i} className="">
                    {menu.child?.map((subItem, j) => (
                      <li
                        key={j}
                        className="pb-4 hover:text-slate-100 text-[13px]"
                      >
                        <span className="px-2">-</span> {subItem.childTitle}
                      </li>
                    ))}
                  </Collapse>
                </ul>
              </li>
            )}

            {!fullMenu && (
              <div
                className="relative hover:text-slate-100 pb-4 flex justify-center items-center "
                onClick={() => handleClick(i)}
                key={i}
              >
                <div className={` cursor-pointer text-[1.4rem] font-bold`}>
                  <NavLink to={menu.link}>{menu.icon}</NavLink>
                </div>

                {/* <div className="absolute z-20">
                    <Collapse isOpened={toggle === i}>
                      {menu.child?.map((subItem, j) => (
                        <li key={j} className="">
                          <span className="px-2">-</span> {subItem.childTitle}
                        </li>
                      ))}
                    </Collapse>
                  </div> */}
              </div>
            )}
          </>
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
