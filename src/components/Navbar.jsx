import React from 'react'
import Button from './Button';

function Navbar() {
  return (
    <div className="max-w-screen-xl m-auto flex items-center justify-between py-6 text-white border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Careers", "", "News"].map((elem, indx) =>
            elem.length === 0 ? (
              <span className=" w-[2px] h-6 bg-zinc-800"></span>
            ) : (
              <a className="text-sm flex items-center gap-1" href="#">
                {indx === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.25rem #00FF19" }}
                    className="inline-block h-1 w-1 rounded-full bg-green-600"
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
}
export default Navbar
