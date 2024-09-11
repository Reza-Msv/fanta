import { MdMenu } from "react-icons/md";
import Logo from "../assets/logo.png";
import { NavbarMenu } from "../constants/constants";
import { FaRegUser } from "react-icons/fa";

import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const Navbar = () => {
  return (
    <div className="  text-white py-3 md:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex items-center justify-between"
      >
        <div>
          <img src={Logo} alt="" className="max-w-[100px] invert" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-10">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 10,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <a
                    href={item.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase"
                  >
                    {item.title}
                  </a>
                </UpdateFollower>
              </li>
            ))}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 10,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <button className="text-xl ps-14">
                <FaRegUser />
              </button>
            </UpdateFollower>
          </ul>
        </div>
        <div className="md:hidden text-4xl">
          <MdMenu />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
