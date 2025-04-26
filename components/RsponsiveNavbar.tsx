"use client";
import { FaList } from "react-icons/fa";
import { useState } from "react";
import Button from "./Button";

const ResponsiveNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="text-white md:hidden flex items-center justify-center relative">
      <FaList size={30} className="mr-5" onClick={() => setToggle((e) => !e)} />

      <div
        className={`${
          toggle ? "absolute" : "hidden"
        } bg-white p-10 top-9 right-5 z-20 rounded-md`}
      >
        <ul className="font-medium flex gap-5 selected2 transition-all flex-col">
          <Button style="gradient-1 md:hidden flex justify-center items-center" title="Sign In" />

          <li id="Home" className="cursor-pointer">
            Home
          </li>
          <li id="Company" className="cursor-pointer">
            Company
          </li>
          <li id="Features" className="cursor-pointer">
            Features
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ResponsiveNavbar;
