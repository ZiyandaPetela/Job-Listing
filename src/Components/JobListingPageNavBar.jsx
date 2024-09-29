import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "/images/logo-min-white.svg";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import { openMenu, closeMenu } from "../REDUX/HamburgerSlice";

const JobListingPageNavBar = () => {
  const { isOpened } = useSelector((store) => store.Hamburger);
  const dispatch = useDispatch();
  return (
    <div
      className={`relative flex justify-between items-center text-accent ${
        isOpened ? "xs:h-screen " : "xs:h-auto"
      } md:h-auto bg-black xl:px-9 lg:px-10 md:px-8 sm:px-11 xs:px-8 py-1 border-b-2 border-accent `}
    >
      <div className="hover:cursor-pointer self-start">
        <Link to="/">
          {" "}
          <img
            src={logo}
            alt="logo"
            srcset=""
            className=" xl:w-12 lg:w-10 md:w-8 sm:w-8 xs:w-7  xl:h-12 lg:h-9 md:h-9 sm:h-8 xs:h-7"
          />
        </Link>
      </div>
      {/* change xs from hidden to inline flex if hamburger isOpened */}
      <div
        className={`flex md:flex-row xs:flex-col lg:gap-10 md:gap-8 xs:gap-5  items-center  hover:cursor-pointer xl:text-xl lg:text-lg md:text-base xs:text-xl md:font-normal xs:font-semibold md:pointer-events-auto md:opacity-100 md:visible   md:inline-flex ${
          isOpened ? " xs:inline-flex" : "xs:hidden"
        }`}
      >
        <div className=" hover:text-white hover:font-semibold">Find Job</div>
        <div className="hover:text-white hover:font-semibold">Messages</div>
        <div className="hover:text-white hover:font-semibold">Community</div>
        <div className="hover:text-white hover:font-semibold">FAQ</div>
      </div>
      <div className="flex lg:gap-7 md:gap-5 text-white xl:text-4xl lg:text-3xl md:text-2xl  hover:cursor-pointer md:pointer-events-auto md:opacity-100 md:visible xs:pointer-events-none xs:opacity-0 xs:invisible xs:hidden md:inline-flex ">
        <div>
          <IoMdNotifications className=" p-1 rounded-full border border-accent bg-black" />
        </div>
        <div>
          <IoMdSettings className=" p-1 rounded-full border border-accent bg-black" />
        </div>
      </div>
      <div className="self-start relative md:hidden">
        {!isOpened ? (
          <RxHamburgerMenu
            onClick={() => dispatch(openMenu())}
            className="absolute right-0 md:hidden mt-1 md:text-2xl xs:text-xl pointer-events-auto opacity-100 visible"
          />
        ) : (
          <IoClose
            onClick={() => dispatch(closeMenu())}
            className="absolute right-0 md:hidden mt-1 md:text-2xl xs:text-xl pointer-events-auto opacity-100 visible"
          />
        )}
      </div>
    </div>
  );
};

export default JobListingPageNavBar;

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "/images/logo-min-white.svg";
// import { IoMdNotifications } from "react-icons/io";
// import { IoMdSettings } from "react-icons/io";
// import { RxHamburgerMenu } from "react-icons/rx";

// const JobListingPageNavBar = () => {
//   return (
//     <div className="flex justify-between items-center  text-accent  bg-black xl:px-9 lg:px-10 md:px-8 sm:px-11 xs:px-8 py-1 border-b-2 border-accent ">
//       <div className="hover:cursor-pointer">
//         <Link to="/">
//           {" "}
//           <img
//             src={logo}
//             alt="logo"
//             srcset=""
//             className=" xl:w-12 lg:w-10 md:w-8 sm:w-8 xs:w-7  xl:h-12 lg:h-9 md:h-9 sm:h-8 xs:h-7"
//           />
//         </Link>
//       </div>
//       <div className="flex lg:gap-10 md:gap-8 hover:cursor-pointer xl:text-xl lg:text-lg md:text-base md:pointer-events-auto md:opacity-100 md:visible xs:pointer-events-none xs:opacity-0 xs:invisible ">
//         <div className=" hover:text-white hover:font-semibold">Find Job</div>
//         <div className="hover:text-white hover:font-semibold">Messages</div>
//         <div className="hover:text-white hover:font-semibold">Community</div>
//         <div className="hover:text-white hover:font-semibold">FAQ</div>
//       </div>
//       <div className="flex lg:gap-7 md:gap-5 text-white xl:text-4xl lg:text-3xl md:text-2xl  hover:cursor-pointer md:pointer-events-auto md:opacity-100 md:visible xs:pointer-events-none xs:opacity-0 xs:invisible">
//         <div>
//           <IoMdNotifications className=" p-1 rounded-full border border-accent bg-black" />
//         </div>
//         <div>
//           <IoMdSettings className=" p-1 rounded-full border border-accent bg-black" />
//         </div>
//       </div>
//         <RxHamburgerMenu className=" md:text-2xl xs:text-xl xs:pointer-events-auto xs:opacity-100 xs:visible md:hidden" />

//     </div>
//   );
// };

// export default JobListingPageNavBar;
