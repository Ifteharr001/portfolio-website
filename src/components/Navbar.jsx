import { styles } from "../styles";
import { navLinks } from "../contents";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import {Bio} from "../contents/index"

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="grid grid-cols-4 justify-center">
          <div className="col-span-1">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={logo}
                alt="logo"
                className="md:w-14 md:h-12 w-7 h-8 mr-4 object-contain"
              />
              <p className="text-white md:text-[25px] text-[15px] font-bold cursor-pointer">
                Master In MERN
              </p>
            </Link>
          </div>
          <div className="col-span-2 justify-center items-center flex">
            <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-[#7848df]" : "text-white"
                  }  hover:text-[#503596] cursor-pointer text-[15px] hover:text-[18px] font-medium`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                className="w-[28px] h-[28px] cursor-pointer object-contain"
                onClick={() => setToggle(!toggle)}
                src={toggle ? close : menu}
                alt="menu"
              />
              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
              >
                <ul className="list-none flex justify-end items-start flex-col gap-4">
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title ? "text-[#e2c234]" : "text-white"
                      }  hover:text-[#a2860d] font-poppins cursor-pointer text-[15px] hover:text-[18px] font-medium`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(link.title);
                      }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:justify-end items-center">
            <button className="flex justify-center items-center cursor-pointer border-2 border-[#7848df] rounded-full md:px-6 md:py-2 px-4 py-1 md:text-[16px] text-[12px] hover:bg-[#503596]">
              <a href={Bio.github} target="_blank" rel="noreferrer">
                Github Profile
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
