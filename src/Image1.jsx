export default function Image1() {
  return (
    <>
      {/* prodcast range */}
      <div
        className="hidden background-image position-absolute h-[600px] lg:flex justify-end px-6"
        style={{
          left: "0px",
          backgroundRepeat: "no-repeat",
          backgroundPposition: "center",
          backgroundImage:
            "url('https://edge.rode.com/images/page/1/modules/9946/Podcast-Homepage-image-1920x700-29ee15c.jpg')",
        }}
      >
        <div className="mt-36">
          <img
            src="https://edge.rode.com/images/page/1/modules/9946/THE%20PODCASTING%20RANGE-white.svg"
            alt="pd"
          />

          <div className="text-center">
            <h3 className="text-white text-3xl font-semibold mt-6">
              Your Podcast Starts Here
            </h3>
            <p className="text-[#FFFFFF80] mt-4">
              Our industry-leading range of podcasting equipment offers
              <br />
              everything you need to record a podcast start-to-finish, from
              <br />
              microphones, studio arms and headphones to complete, all-in-one{" "}
              <br />
              production studios.
            </p>
            <button className="mt-10 px-14 py-4 border-[2px] rounded-full bg-white text-black font-medium hover:bg-transparent hover:text-white">
              EXPLORE THE RANGE
            </button>
          </div>
        </div>
      </div>

      {/* prodcast range mobile view */}

      <div className=" lg:hidden  pb-7  ">
        <div className="w-full  flex justify-center items-center">
          <img
            className="w-[800px]"
            src="https://edge.rode.com/images/page/1/modules/9946/Podcast-Homepage-image-800x700-601304b.jpg
        "
            alt="bg-img"
          />
        </div>

        <div className="bg-black">
          <div class="w-full flex justify-center items-center pt-8">
            <img
              src="https://edge.rode.com/images/page/1/modules/9946/THE%20PODCASTING%20RANGE-white.svg"
              alt="pd"
            />
          </div>

          <div className="text-center mt-6">
            <h3 className="text-white text-3xl font-semibold">
              Your Podcast Starts Here
            </h3>
            <p class="text-[#FFFFFF80] mt-4 text-left mx-4 sm:mx-40 md:mx-4">
              Our industry-leading range of podcasting equipment offers
              everything you need to record a podcast start-to-finish, from
              microphones, studio arms and headphones to complete, all-in-one
              production studios.
            </p>
            <button className="mt-10 px-14 py-4 border-[2px] rounded-full bg-white text-black font-medium hover:bg-transparent hover:text-white">
              EXPLORE THE RANGE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
