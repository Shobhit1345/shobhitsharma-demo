import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6  font-semibold flex items-center justify-between border-b-[1px] border-zinc-500">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="refokus_logo"
        />
        <div className="links flex gap-10 ml-20 text-white">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index}
                className="
  w-[2px] h-7 bg-zinc-500 "
              ></span>
            ) : (
              <a key={index} className="text-2sm flex items-center gap-1 " href="#">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45rem #00ff19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
