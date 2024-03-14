import { useState } from "react";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  console.log(showNav);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src="/img/logo.png"
            alt="logo"
            className="m-0 w-[220px] h-[80px] -mt-20"
          />
        </a>
        <ul className="flex-1 mt-10 flex justify-center items-center gap-12 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-[14px] text-slate-gray no-underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center text-[15px] leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <div className="p-3 rounded-3xl border-slate-400 border w-[200px] text-slate-600 cursor-pointer">
            {" "}
            <i className="fa-solid fa-magnifying-glass"></i> Search
          </div>
          <a className="no-underline text-black" href="/">
            Sign in
          </a>
          <span>/</span>
          <a className="no-underline text-black" href="/">
            Sign up
          </a>
          <div className="cursor-pointer ml-4">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={() => setShowNav(!showNav)}
          />
        </div>
        {showNav && (
          <ul className="flex flex-col absolute bg-white top-24 right-3 z-50 gap-12 lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-[14px] text-slate-gray no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
