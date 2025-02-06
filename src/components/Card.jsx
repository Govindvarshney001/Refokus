import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width,start,para,hover}) {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl hover:${hover} ${width} min-h-[30rem] flex flex-col justify-between `}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center ">
          <h3>heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-3">whatever heading.</h1>
      </div>
      <div className="down w-full ">
        {start === true ? (
          <>
            <h1 className="text-6xl font-semibold tracking-tighter leading-none">
              start a project
            </h1>
            <button className="rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-5">
              Contact us
            </button>
          </>
        ) : null}
        {para && (
          <p className="text-sm text-zinc-500 font-medium ">
            Lorem ipsum dolor sit amet.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card
