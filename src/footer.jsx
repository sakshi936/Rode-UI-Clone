export default function Footer() {
  return (
    <>
      <div className=" bg-white hidden lg:block">
        <div className="bg-white  p-20 flex ">
          <img
            className="w-[250px]"
            src="https://cdn.rode.com/website/images/logo/RODE_logo_142x85_desktop_light_mode.svg"
            alt="logo"
          />

          <div className="flex ml-12 gap-12">
            <ul>
              <li>
                <a href="#" class="font-semibold">
                  Products
                </a>
              </li>
              <li className="mt-4">
                <a href="#" className="mt-20">
                  Microphones
                </a>
              </li>
              <li className="mt-4">
                <a href="#">Headphones</a>
              </li>
              <li className="mt-4">
                <a href="#">Interfaces and Mixers</a>
              </li>
              <li className="mt-4">
                <a href="#">Accessories</a>
              </li>
              <li className="mt-4">
                <a href="#">Apps</a>
              </li>
              <li className="mt-4">
                <a href="#">Apparel</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#" className="font-semibold">
                  Support
                </a>
              </li>
              <li className="mt-4">
                <a href="#">Contact RØDE</a>
              </li>
              <li className="mt-4">
                <a href="#">Service Centre</a>{" "}
              </li>
              <li className="mt-4">
                {" "}
                <a href="#">Warranty</a>
              </li>
              <li className="mt-4">
                <a href="#">Where to Buy</a>
              </li>
              <li className="mt-4">
                <a href="#">Authorised Dealers</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#" className="font-semibold">
                  Company
                </a>
              </li>
              <li className="mt-4">
                <a href="#">About RØDE</a>
              </li>
              <li className="mt-4">
                <a href="#">News and Info</a>
              </li>
              <li className="mt-4">
                <a href="#">Job Opportunities</a>
              </li>
              <li className="mt-4">
                <a href="#" className="font-semibold">
                  Account
                </a>
              </li>
              <li className="mt-4">
                <a href="#">Create Account</a>
              </li>
            </ul>
          </div>

          <div className="ml-48 text-right">
            <h1 className="text-3xl font-semibold">
              Subscribe to our latest news and offers
            </h1>
            <button className=" mt-5 px-5  py-2 border-[1px] border-black rounded-full bg-black text-white font-medium hover:bg-transparent hover:text-black ">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <hr className="h-[1px] bg-black w-[1100px] text-center" />
        </div>

        <div className=" px-20 py-12 flex justify-between">
          <p>© 2024 RØDE All Rights Reserved.</p>

          <p>Privacy Policy | Terms & Conditions</p>

          <div className=" flex">
            <i className=" text-3xl fa-brands fa-facebook"></i>
            <i className=" text-3xl fa-brands fa-x-twitter"></i>
            <i className=" text-3xl fab fa-instagram ml-3"></i>
            <i className=" text-3xl fab fa-youtube ml-3"></i>
            <i className=" text-3xl fab fa-tiktok ml-3"></i>
            <i className=" text-3xl fab fa-twitch ml-3"></i>
            <i className=" text-3xl fab fa-discord ml-3"></i>
          </div>
        </div>
      </div>

      {/*  footer mobile view */}

      <div className="bg-white lg:hidden">
        <div className="py-12 border-b-[1px] ">
          <div className="flex ml-12 gap-12 justify-center ">
            <ul>
              <li>
                <a href="#" className="font-semibold">
                  Products
                </a>
              </li>
              <li className="mt-4">
                <a href="#" className="mt-20">
                  Microphones
                </a>
              </li>
              <li className="mt-4">
                <a href="#">Headphones</a>
              </li>
              <li className="mt-4">
                <a href="#">Interfaces and Mixers</a>
              </li>
              <li className="mt-4">
                <a href="#">Accessories</a>
              </li>
              <li className="mt-4">
                <a href="#">Apps</a>
              </li>
              <li className="mt-4">
                <a href="#">Apparel</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="font-semibold">
                  Support
                </a>
              </li>
              <li className="mt-4">
                <a href="#">Contact RØDE</a>
              </li>
              <li className="mt-4">
                <a href="#">Service Centre</a>{" "}
              </li>
              <li className="mt-4">
                {" "}
                <a href="#">Warranty</a>
              </li>
              <li className="mt-4">
                <a href="#">Where to Buy</a>
              </li>
              <li className="mt-4">
                <a href="#">Authorised Dealers</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#" className="font-semibold">
                  Company
                </a>
              </li>
              <li className="mt-4">
                {" "}
                <a href="#">About RØDE</a>
              </li>
              <li className="mt-4">
                <a href="#">News and Info</a>
              </li>
              <li className="mt-4">
                <a href="#">Job Opportunities</a>
              </li>
              <li className="mt-4">
                <a href="#" className="font-semibold">
                  Account
                </a>
              </li>
              <li className="mt-4">
                <a href="#">Create Account</a>
              </li>
            </ul>
          </div>

          <div className=" text-right flex justify-center  mt-8">
            <div className="text-center">
              <h1 className="text-3xl font-semibold">
                Subscribe to our latest news and offers
              </h1>
              <button className=" mt-5 px-5  py-2 border-[1px] border-black rounded-full bg-black text-white font-medium hover:bg-transparent hover:text-black ">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div>
          {/* <!-- <hr className=" bg-black w-[1wv] text-center"> --> */}
        </div>

        <div className=" flex justify-center ">
          <div className="   w-full p-8">
            <div className="w-full flex justify-center">
              <img
                src="https://cdn.rode.com/website/images/logo/RODE_logo_142x85_desktop_light_mode.svg"
                alt="logo"
              />
            </div>

            <div className="mt-8   ">
              <div className="text-center">
                <p>Privacy Policy | Terms & Conditions</p>
              </div>

              <div className=" flex mt-8  w-full justify-between md:gap-8  md:justify-center">
                <i className=" text-3xl fa-brands fa-facebook"></i>
                <i className=" text-3xl fa-brands fa-x-twitter"></i>
                <i className=" text-3xl fab fa-instagram ml-3"></i>
                <i className=" text-3xl fab fa-youtube ml-3"></i>
                <i className=" text-3xl fab fa-tiktok ml-3"></i>
                <i className=" text-3xl fab fa-twitch ml-3"></i>
                <i className=" text-3xl fab fa-discord ml-3"></i>
              </div>
            </div>

            <div className="text-center mt-8">
              <p>© 2024 RØDE All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
