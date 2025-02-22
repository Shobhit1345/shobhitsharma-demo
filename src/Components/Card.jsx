import { motion} from "motion/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Card = ({ width, start, para, hover="false" }) => {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && "#7443ff" , padding: "25px" }}
      className={`w-1/2 p-5  bg-zinc-700  rounded-xl ${width} min-h-[30rem]  flex flex-col justify-between`}
    >
      <div className="w-full">
        <h3>one heading</h3>
        <FaArrowRightLong />

        <div>
          <h1 className="text-3xl font-medium mt-5">whatever heading .</h1>
        </div>
      </div>
      <div className="down w-full">
        {start === true && (
          <>
            <h1 className="text-6xl font-bold leading-none tracking-tight ">
              start a project
            </h1>
            <button className="rounded-full px-5 border-[1px] py-2 border-zinc-500 ">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium ">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
