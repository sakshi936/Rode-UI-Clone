export default function Blog() {
  return (
    <>
      <section className="bg-white py-9">
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold text-[#AD9970]">
            Latest From The RØDE Blog
          </h1>
        </div>

        {/* <!-- blog-cards --> */}
        <div className="bg-[#f8f9fa] p-8 mt-10 flex flex-wrap flex-2 justify-center md:gap-8">
          {/* <!-- blog-card-1 --> */}
          <div className="bg-white w-[538px] md:w-[328px] lg:w-[448px] ex-lg:w-[538px] text-center py-4 my-5">
            <h1 className="text-3xl">
              How To Make Your Podcast Sound More Engaging
            </h1>

            <img
              className="w-full mt-4"
              src="https://edge.rode.com/images/page/1/modules/10042/rode-podcast-bundle-PB18-C0100-2000x2000-236c2f0.jpg"
              alt="gl"
            />

            <p className="mt-4 text-lg">
              Getting your podcast to stand out in the crowd isn’t easy – we’ll
              show you how.
            </p>
            <button className="mt-8 px-5 py-2 border-[1px] border-black rounded-full bg-black text-white font-medium hover:bg-transparent hover:text-black">
              LEARN MORE
            </button>
          </div>
          {/* <!-- blog-card-2 --> */}
          <div className="bg-white w-[538px] md:w-[328px] lg:w-[448px] ex-lg:w-[538px] text-center py-4 my-5">
            <h1 className="text-3xl">
              How To Make Your Podcast Sound Professional
            </h1>
            <div className="">
              <img
                className="w-full mt-4"
                src="https://edge.rode.com/images/page/1/modules/9945/rode-podmic-module-01-january-2022-8192x5464-rgb-1080x1080-ad8da3e.jpg"
                alt="gl"
              />
            </div>
            <p className="mt-4 text-lg">
              In this article, we show you how to make your voice sound
              professional and broadcast-ready for your podcast.
            </p>
            <button className="mt-8 px-5 py-2 border-[1px] border-black rounded-full bg-black text-white font-medium hover:bg-transparent hover:text-black">
              LEARN MORE
            </button>
          </div>
          {/* <!-- blog-card-3 --> */}
          <div className="bg-white w-[538px] md:w-[328px] lg:w-[448px] ex-lg:w-[538px] text-center py-4 my-5">
            <h1 className="text-3xl">
              Three Simple Techniques for Recording Better Acoustic Guitar
            </h1>

            <img
              class="w-full mt-4"
              src="https://edge.rode.com/images/page/1/modules/9790/rode-nt1-5g-studio-session-musicians-img-4665-8192x5464-rgb-1080x1080-4cd2961.jpg"
              alt="gl"
            />

            <p className="mt-4 text-lg">
              In this article, we take a look at three different acoustic guitar
              recording techniques that offer a wide range of different sounds.
            </p>
            <button className="mt-8 px-5 py-2 border-[1px] border-black rounded-full bg-black text-white font-medium hover:bg-transparent hover:text-black">
              LEARN MORE
            </button>
          </div>
          {/* <!-- blog-card-4 --> */}
          <div className="bg-white w-[538px] md:w-[328px] lg:w-[448px] ex-lg:w-[538px] text-center py-4 my-5">
            <h1 className="text-3xl">
              Introducing a Dual Transmitter Version of the Wireless ME
            </h1>

            <img
              className="w-full mt-4"
              src="	https://edge.rode.com/images/page/1/modules/9653/Wi%20ME%201_1-1080x1080-45a20b0.jpg"
              alt="gl"
            />

            <p className="mt-4 text-lg">
              The ultimate grab-and-go wireless mic for content creators will be
              available as a dual-transmitter set in either white or black
              colourways.
            </p>
            <button className="mt-8 px-5 py-2 border-[1px] border-black rounded-full bg-black text-white font-medium hover:bg-transparent hover:text-black">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
