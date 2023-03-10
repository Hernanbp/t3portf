import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const Header = () => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  const route = useRouter().pathname;

  useEffect(() => {
    //  if route equal to / then setActive(true) else setActive(false)
    route === "/" ? setActive(true) : setActive(false);
    route === "/projects" ? setActive2(true) : setActive2(false);
  }, [route]);

  return (
    <motion.header
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 15,
        mass: 0.5,
      }}
      className="flex flex-col  items-center justify-between  rounded-4xl border-2 border-black text-black "
    >
      <nav className="h-16 w-full rounded-4xl">
        <ul className="flex h-full cursor-pointer  text-xsm font-bold">
          <Link
            href="/"
            className="group relative grid w-1/2 rounded-tl-4xl  border-b-2 border-r-2 border-black  p-2 hover:bg-gray-100  "
          >
            <li className="grid-row-2 grid px-4">
              Home
              <p className="justify-self-end px-2">01</p>
              {/* cambiar a w-0 */}
              <span
                className={`absolute bottom-0 left-0 h-2 ${
                  active ? "w-full" : "w-0"
                }  bg-black duration-300 ease-in-out group-hover:w-full group-hover:transition-all`}
              ></span>
            </li>
          </Link>
          <Link
            href="/projects"
            className=" group relative grid w-1/2 rounded-tr-4xl border-b-2 border-black p-2 hover:bg-gray-100  lg:rounded-none  lg:border-r-2 "
          >
            <li className="grid-row-2 grid px-2">
              Projects
              <p className="justify-self-end px-2">02</p>
              <span
                className={`absolute bottom-0 left-0 h-2 ${
                  active2 ? "w-full" : "w-0"
                }  bg-black duration-300 ease-in-out group-hover:w-full group-hover:transition-all`}
              ></span>
            </li>
          </Link>
          <li className="hidden items-center p-4 lg:flex lg:w-full lg:rounded-tr-4xl lg:border-b-2 lg:border-black">
            <ul className="flex w-3/4 items-center gap-2">
              <li className="flex h-8 w-8 items-center justify-center rounded-full bg-black p-2  text-white hover:bg-gray-800">
                <FaLinkedinIn size="1rem" />
              </li>
              <li className="group flex h-8 w-8 items-center justify-center rounded-full border border-gray-300  text-white transition-all duration-100 ease-in-out hover:border-black hover:bg-black">
                <BsGithub
                  className="text-black  group-hover:text-white"
                  size="1rem"
                />
              </li>
              <li className="group flex h-8 w-8 items-center justify-center rounded-full border border-gray-300  text-white transition-all duration-100 ease-in-out hover:border-black hover:bg-black">
                <BsTwitter
                  className="text-black  group-hover:text-white"
                  size="1rem"
                />
              </li>
            </ul>
            <div className="flex h-8 w-1/3 items-center justify-between  rounded-full bg-black p-1 px-3 text-xs font-normal text-white">
              <HiOutlineMail size="1.125rem" />
              hernanbp.hb@gmail.com
            </div>
          </li>
        </ul>
      </nav>
      <div className="flex h-16 w-full items-center justify-end px-6 lg:h-32">
        <h1 className="text-2xl font-bold tracking-tight lg:text-6xl">
          Hernan B.P. - Design & Code
        </h1>
      </div>
    </motion.header>
  );
};

export default Header;
