import { ImagesSlider } from "../../components/ui/images-slider";
import { motion } from "framer-motion";

import { FaRegArrowAltCircleDown } from "react-icons/fa";

export default function Home() {
  const images = [
    "/imgHome1.jpg",
    "/imgHome2.jpg",
    "/imgHome3.jpg",
  ];
  return (
    <ImagesSlider className="h-[100vh]" images={images} >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col w-full h-full justify-end items-center"
        id="home"
      >
        <div className="w-[90%] h-[200px]  flex flex-col justify-center items-center " >
          <p className="uppercase tracking-[2px]  text-zinc-400">Wedding Information</p>
          <h1 className="allura-regular text-[2rem] font-medium text-white">Midun & Sindi</h1>
          <FaRegArrowAltCircleDown size={20} fill="white" className="animate-bounce mt-2" />
        </div>

      </motion.div>
    </ImagesSlider>
  );
}