import React from "react";

export default function Range() {
  return (
    <>
      <section className="bg-white py-11 border-b-[1px]">
        <div className="text-center pb-4">
          <h1 className="text-4xl font-bold text-[#767676]">
            Explore The RØDE Range
          </h1>
        </div>

        <div className="flex-col justify-center px-10 md:px-20">
          {/* <!-- Range-1 --> */}
          <div
            className="background-image position-absolute w-full h-[128px]  md:h-[173px] lg:h-[223px] ex-lg:h-[278px] flex my-10"
            style={{
              left: "0px ",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage:
                "url('https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5357%2Fmicrophones-module-1200x300-rgb.png')",
            }}
          >
            <img
              className="w-full"
              src="	https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5364%2Fmicrophones-text.svg"
              alt=""
            />
          </div>
          {/* <!-- Range-2 --> */}
          <div
            className="background-image position-absolute w-full h-[128px]  md:h-[173px] lg:h-[223px] ex-lg:h-[278px] flex my-10"
            style={{
              left: "0px ",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage:
                "url('https://rode.com/assets/images%2Fpage%2F1%2Fmodules%2F5359%2Finterfaces-module-2022-1200x300-rgb.jpg')",
            }}
          >
            <img
              className="w-full"
              src="https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5366%2Finterfaces-text.svg"
              alt=""
            />
          </div>
          {/* <!-- Range-3 --> */}
          <div
            className="background-image position-absolute w-full h-[128px]  md:h-[173px] lg:h-[223px] ex-lg:h-[278px] flex my-10"
            style={{
              left: "0px ",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage:
                "url('https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5361%2Fsoftware-module-2021-1200x300-rgb.png')",
            }}
          >
            <img
              className="w-full"
              src="	https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5365%2Fsoftware-text.svg"
              alt=""
            />
          </div>
          {/* <!-- Range-4 --> */}
          <div
            className="background-image position-absolute w-full h-[128px]  md:h-[173px] lg:h-[223px] ex-lg:h-[278px] flex mt-10"
            style={{
              left: "0px ",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage:
                "url('https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5370%2Faccessories-module-2021-1200x300-rgb.png')",
            }}
          >
            <img
              className="w-full"
              src="https://edge.rode.com/images%2Fpage%2F1%2Fmodules%2F5368%2Faccessories-text.svg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
