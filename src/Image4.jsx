export default function Image4() {
  return (
    <>
      <div
        className="background-image position-absolute w-full h-[700px] hidden lg:flex justify-start items-center p-20"
        style={{
          left: "0px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundImage:
            " url('https://edge.rode.com/images/page/1/modules/9520/DS2-BANNER-02.jpg')",
        }}
      >
        <div className="w-fit mt-8">
          <img
            className="w-[550px] m-0"
            src="	https://edge.rode.com/images/page/1/modules/9520/DS2_PL_P_02.svg"
            alt="pd"
          />

          <div className="text-center mt-7">
            <div className="  ">
              <h3 className="text-black text-3xl font-medium">
                The Perfect Desktop Mount
              </h3>
              <p className="text-[#808080] mt-4">
                The DS2 is a compact desktop studio arm that's ideal for
                perfectly
                <br />
                positioning your microphone, camera, smartphone, light and other
                <br />
                accessories on your desktop..
              </p>
            </div>

            <a href="#" className="font-bold text-lg text-[#808080]">
              LEARN MORE <span className="text-2xl">&gt;</span>
            </a>
            <button className="mt-10 px-14 py-3 ml-4 border-[2px] border-black rounded-full bg-black text-white font-medium hover:bg-transparent hover:text-black">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* D2S mobile view */}

      <div className="lg:hidden pb-7 bg-white">
        <div className="w-full flex justify-center items-center">
          <img
            className="w-[800px]"
            src="		https://edge.rode.com/images/page/1/modules/9520/DS2-BANNER-02-800x700-ad09db5.jpg
        "
            alt="bg-img"
          />
        </div>

        <div className="  ">
          <div className="w-full flex justify-center items-center pt-8">
            <img
              src="https://edge.rode.com/images/page/1/modules/9520/DS2_PL_P_02.svg"
              alt="pd"
            />
          </div>

          <div className="text-center mt-6">
            <h3 className="text-black text-3xl font-medium">
              The Perfect Desktop Mount
            </h3>
            <p className="text-[#808080] mt-4 text-left mx-4 sm:mx-40 md:mx-4">
              The DS2 is a compact desktop studio arm that's ideal for perfectly
              positioning your microphone, camera, smartphone, light and other
              accessories on your desktop..
            </p>

            <a href="#" className="font-bold text-lg text-[#808080]">
              LEARN MORE <span className="text-2xl">&gt;</span>
            </a>
            <button className="mt-10 px-14 py-3 ml-4 border-[2px] border-black rounded-full bg-black text-white font-medium hover:bg-transparent hover:text-black">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
