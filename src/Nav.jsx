export default function Nav() {
  return (
    <>
      <div className=" text-black hidden ex-lg:flex px-20 justify-between bg-white">
        <a
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          className="dropdown-toggle flex justify-center items-center"
        >
          <svg
            width="13"
            height="18"
            viewBox="0 0 13 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.49992 0.557373C3.20963 0.557373 0.537109 3.22533 0.537109 6.49236C0.537109 11.0063 6.49992 17.4359 6.49992 17.4359C6.49992 17.4359 12.4627 11.0063 12.4627 6.49236C12.4627 3.22533 9.79021 0.557373 6.49992 0.557373Z"
              stroke="#484848"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M6.50048 9.7315C8.28058 9.7315 9.72362 8.23449 9.72362 6.38784C9.72362 4.54119 8.28058 3.04419 6.50048 3.04419C4.72039 3.04419 3.27734 4.54119 3.27734 6.38784C3.27734 8.23449 4.72039 9.7315 6.50048 9.7315Z"
              stroke="#484848"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          EN
          <i className="fa-solid fa-caret-down"></i>
        </a>

        <a href="#">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4023 5.21899C12.4023 2.88051 10.4828 1 8.07994 1C5.67702 1 3.76465 2.88051 3.76465 5.21899C3.76465 7.52973 5.68413 9.41023 8.08704 9.41023C10.49 9.41023 12.4023 7.52973 12.4023 5.21899Z"
              stroke="#484848"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M1.14071 16.488C0.643067 17.6746 1.52461 19 2.85403 19H13.3117C14.6411 19 15.5226 17.6746 15.025 16.488C13.724 13.4626 11.1007 11.4155 8.0793 11.4155C5.04367 11.4155 2.41326 13.4626 1.14071 16.488Z"
              stroke="#484848"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
      </div>
      {/* nav  */}
      <div className="px-20 py-8  justify-between items-center bg-white w-full sticky top-0 hidden ex-lg:flex border-b-[1px]">
        <div className="w-[90px]">
          <img
            className="object-cover"
            src="	https://cdn.rode.com/website/images/logo/RODE_Logo_87x51_RGB.svg"
            alt="logo"
          />
        </div>
        <ul className="flex font-sans gap-8">
          <li>PRODUCTS</li>
          <li>SOLUTIONS</li>
          <li>APPS</li>
          <li>USER GUIDES</li>
          <li>SUPPORT</li>
        </ul>

        <div className="w-[40px]">
          <svg
            data-v-9b7247d4=""
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4629 20.0231C15.6892 20.0231 19.9259 15.7646 19.9259 10.5115C19.9259 5.25846 15.6892 1 10.4629 1C5.2367 1 1 5.25846 1 10.5115C1 15.7646 5.2367 20.0231 10.4629 20.0231Z"
              stroke="#484848"
              strokeWidth="2"
              strokeMiterlimit="10"
            ></path>
            <path
              d="M17.6455 17.6025L26.0002 26.0001"
              stroke="#484848"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      </div>

      {/* navbar  mobile view  */}
      <div className=" flex justify-between p-2  ex-lg:hidden sticky top-0 bg-white border-b-[1px]">
        <div className=" flex justify-center items-center ">
          <div className="w-[20px] mr-4">
            <i className="fa-solid fa-bars"></i>
          </div>

          <div>
            <svg
              width="13"
              height="18"
              viewBox="0 0 13 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49992 0.557373C3.20963 0.557373 0.537109 3.22533 0.537109 6.49236C0.537109 11.0063 6.49992 17.4359 6.49992 17.4359C6.49992 17.4359 12.4627 11.0063 12.4627 6.49236C12.4627 3.22533 9.79021 0.557373 6.49992 0.557373Z"
                stroke="#484848"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6.50048 9.7315C8.28058 9.7315 9.72362 8.23449 9.72362 6.38784C9.72362 4.54119 8.28058 3.04419 6.50048 3.04419C4.72039 3.04419 3.27734 4.54119 3.27734 6.38784C3.27734 8.23449 4.72039 9.7315 6.50048 9.7315Z"
                stroke="#484848"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>

          <div className="flex items-center">
            <h1>EN</h1>
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>

        <div className="w-[90px]">
          <img
            className="object-cover"
            src="	https://cdn.rode.com/website/images/logo/RODE_Logo_87x51_RGB.svg"
            alt="logo"
          />
        </div>

        <div className="w-[40px]">
          <svg
            data-v-9b7247d4=""
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4629 20.0231C15.6892 20.0231 19.9259 15.7646 19.9259 10.5115C19.9259 5.25846 15.6892 1 10.4629 1C5.2367 1 1 5.25846 1 10.5115C1 15.7646 5.2367 20.0231 10.4629 20.0231Z"
              stroke="#484848"
              strokeWidth="2"
              strokeMiterlimit="10"
            ></path>
            <path
              d="M17.6455 17.6025L26.0002 26.0001"
              stroke="#484848"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
