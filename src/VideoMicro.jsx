export default function VideoMicro() {
  return (
    <>
      <div
        className="background-image position-absolute h-[650px] hidden lg:flex justify-end px-6 pr-24"
        style={{
          left: "0px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage:
            "url('https://edge.rode.com/images/page/1/modules/9955/rode-videomicro-II-insitu-profesional-user-filming-tripod-11-2022-7348x2682-rgb-1921x701-dbb472d.jpg')",
        }}
      >
        <div className="mt-44">
          <img
            className="w-[550px]"
            src="https://edge.rode.com/images/page/1/modules/9955/VideoMicroII_PL_PI_03.svg"
            alt="pd"
          />

          <div className="text-center">
            <h3 className="text-white text-3xl font-semibold mt-6">
              Small Size. Stunning Sound.
            </h3>
            <p className="text-[#FFFFFF80] mt-4 text-lg">
              The VideoMicro II is an ultra-compact and easy-to-use microphone
              <br />
              that will instantly elevate your camera or smartphone audio,{" "}
              <br />
              perfect for filmmaking, content creation, home videos, and more.
            </p>

            <a href="#" className="font-bold text-lg text-[#808080]">
              LEARN MORE <span className="text-2xl">&gt;</span>
            </a>
            <button className="mt-10 px-14 py-3 ml-4 border-[2px] border-white rounded-full bg-white text-black font-medium hover:bg-transparent hover:text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Video micro moblie view */}

      <div className="lg:hidden pb-7">
        <div className="w-full flex justify-center items-center">
          <img
            className="w-[800px]"
            src="https://edge.rode.com/images/page/1/modules/9955/rode-videomicro-II-insitu-profesional-user-filming-tripod-11-2022-7348x2682-rgb-800x700-9a86345.jpg"
            alt="bg-img"
          />
        </div>

        <div className="bg-black">
          <div className="w-full flex justify-center items-center pt-8">
            <img
              src="https://edge.rode.com/images/page/1/modules/9955/VideoMicroII_PL_PI_03.svg"
              alt="pd"
            />
          </div>

          <div className="text-center mt-6">
            <h3 className="text-white text-3xl font-semibold">
              Small Size. Stunning Sound.
            </h3>
            <p className="text-[#FFFFFF80] mt-4 text-left mx-4 sm:mx-40 md:mx-4">
              The VideoMicro II is an ultra-compact and easy-to-use microphone
              that will instantly elevate your camera or smartphone audio,
              perfect for filmmaking, content creation, home videos, and more.
            </p>

            <a href="#" className="font-bold text-lg text-[#808080]">
              LEARN MORE <span className="text-2xl">&gt;</span>
            </a>
            <button className="mt-10 px-14 py-3 ml-4 border-[2px] border-white rounded-full bg-white text-black font-medium hover:bg-transparent hover:text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
