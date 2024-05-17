export default function Image3() {
  return (
    <>
      <div
        className="background-image position-absolute h-[600px] hidden lg:flex justify-end px-6 pr-24"
        style={{
          left: "0px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage:
            "url('https://edge.rode.com/images/page/1/modules/9502/NT1-Sig-Ser-Banner-desktop.jpg')",
        }}
      >
        <div class="mt-36">
          <img
            class="w-[500px]"
            src="https://edge.rode.com/images/page/1/modules/9502/NT1SS_PL_PMI_01.svg"
            alt="pd"
          />

          <div className="text-center">
            <h3 className="text-white text-3xl font-semibold mt-6">
              Your New Go-to Studio Mic
            </h3>
            <p className="text-[#FFFFFF80] mt-4 text-lg">
              The NT1 Signature Series is a workhorse studio condenser <br />
              microphone with a warm, silky character, exceptionally low noise
              <br />
              and high SPL handling – ideal in a wide range of studio <br />
              applications.
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

      {/* NT1 mobile view */}

      <div className="lg:hidden pb-7 mt-0">
        <div className="w-full flex justify-center items-center">
          <img
            className="w-[800px]"
            src="	https://edge.rode.com/images/page/1/modules/9502/NT1-Sig-Ser-Banner-desktop-800x700-c96b690.jpg
            "
            alt="bg-img"
          />
        </div>

        <div className="bg-black">
          <div className="w-full flex justify-center items-center pt-8">
            <img
              src="	https://edge.rode.com/images/page/1/modules/9502/NT1SS_PL_PMI_01.svg"
              alt="pd"
            />
          </div>

          <div className="text-center mt-6">
            <h3 className="text-white text-3xl font-semibold">
              Your New Go-to Studio Mic
            </h3>
            <p className="text-[#FFFFFF80] mt-4 text-left mx-4 sm:mx-40 md:mx-4">
              The NT1 Signature Series is a workhorse studio condenser
              microphone with a warm, silky character, exceptionally low noise
              and high SPL handling – ideal in a wide range of studio
              applications.
            </p>
            <div className="">
              <a href="#" className="font-bold text-lg text-[#808080]">
                LEARN MORE <span className="text-2xl">&gt;</span>
              </a>
              <button className="mt-10 px-14 py-3 ml-4 border-[2px] border-white rounded-full bg-white text-black font-medium hover:bg-transparent hover:text-white">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
