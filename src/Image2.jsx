export default function Image2() {
  return (
    <>
      <div
        className="background-image position-absolute w-full h-[700px] hidden lg:flex justify-start items-center p-20"
        style={{
          left: "0px",
          backgroundRepeat: " no-repeat",
          backgroundPosition: "center center",
          backgroundImage:
            "url('https://edge.rode.com/images/page/1/modules/9958/Wipro-Banner-02-Right-1920x700-8c89d38.jpg')",
        }}
      >
        <div className="w-fit mt-8">
          <img
            className="w-[550px] m-0"
            src="https://edge.rode.com/images/page/1/modules/9242/WIGO%20PRO%20PL%20P%2001.svg"
            alt="pd"
          />

          <div className="text-center mt-7">
            <h3 className="text-black text-3xl font-medium">
              The Most Powerful Wireless Mic Ever
            </h3>
            <p className="text-[#808080] mt-4">
              The Wireless PRO is the ultimate wireless solution, packed full of
              <br />
              powerful features like 32-bit float, timecode and GainAssist that
              <br />
              offer incredible flexibility for recording pristine audio for your
              <br />
              content.
            </p>

            <a href="#" className="font-bold text-lg text-[#808080]">
              LEARN MORE <span className="text-2xl">&gt;</span>
            </a>
            <button class="mt-10 px-14 py-3 ml-4 border-[2px] border-black rounded-full bg-black text-white font-medium hover:bg-transparent hover:text-black">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* WirelessPro mobile view  */}

      <div className="lg:hidden pb-7 bg-white mt-0">
        <div className="w-full flex justify-center items-center">
          <img
            className="w-[800px]"
            src="	https://edge.rode.com/images/page/1/modules/9521/Wipro-Banner-02-800x700-85b84df.jpg
            "
            alt="bg-img"
          />
        </div>

        <div className="w-full flex justify-center items-center pt-8">
          <img
            src="	https://edge.rode.com/images/page/1/modules/9242/WIGO%20PRO%20PL%20P%2001.svg"
            alt="pd"
          />
        </div>

        <div className="text-center mt-6">
          <h3 className="text-black text-3xl font-medium">
            The Most Powerful Wireless Mic Ever
          </h3>
          <p class="text-[#808080] mt-4 text-left mx-4 sm:mx-40 md:mx-4">
            The Wireless PRO is the ultimate wireless solution, packed full of
            powerful features like 32-bit float, timecode and GainAssist that
            offer incredible flexibility for recording pristine audio for your
            content.
          </p>

          <a href="#" className="font-bold text-lg text-[#808080]">
            LEARN MORE <span className="text-2xl">&gt;</span>
          </a>
          <button className="mt-10 px-14 py-3 ml-4 border-[2px] border-black rounded-full bg-black text-white font-medium hover:bg-transparent hover:text-black">
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
}
