import React from 'react'

function Footer() {
  return (
    <div className="w-full text-white">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[10rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-5">
          <div className="basis-1/3">
            <h4 className="mb-10 capitalize  text-zinc-500">socials</h4>
            {["instagram", "twitter", "LinkedIn", "facebook"].map(
              (item, idx) => (
                <a key={idx} className="block mt-2 capitalize text-zinc-500">
                  {item}
                </a>
              )
            )}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 capitalize  text-zinc-500">sitemap</h4>
            {["home", "work", "careers", "contact"].map((item, idx) => (
              <a key={idx} className="block mt-2 capitalize text-zinc-500">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <p className=" text-zinc-500">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt=""
              className="w-36 h-36"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto flex items-center justify-start gap-20 text-[1.2vw] p-5 text-zinc-500 ">
        {[
          "Privacy Policy",
          "cookie Policy",
          "Impressum",
          "Impressum",
          "Govind.work001@gmail.com",
        ].map((item, idx) => (
          <a>{item}</a>
        ))}
      </div>
    </div>
  );
}

export default Footer
