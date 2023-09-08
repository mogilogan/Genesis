import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Link } from "react-router-dom";

import rocketry from '../assets/rocketry.gif';

const Workshop = () => {


 

 

  return (
    <div className="w-[100%]">
    
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Workshops
        </h2>
   
    <div
      className={`pt-8  overflow-hidden `}
    >
      
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='  bg-black-100 mx-auto max-w-[800px] p-8 rounded-2xl items-center'
      >
        <div className=" flex flex-row">
          <div className="flex flex-col">
        <p className={styles.sectionSubText}>Aerion</p>
        <h3 className={`${styles.sectionHeadText} `}>Make your Rocketry</h3>
        </div>
        
        <div className="text-center mx-auto my-auto pl-5">
        <a href="https://forms.gle/SMNvKF26JQ7eEsc89 " target="_blank" className="flex text-3xl text-teal-400">Link <img src={rocketry} className=""/></a>
        </div>
        </div>
      </motion.div>
      <StarsCanvas/>
    </div>


    <div
      className={`pt-8  overflow-hidden`}
    >
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
       
        className='flex-[0.75] mx-auto max-w-[800px] bg-black-100 p-8 rounded-2xl'
      >
       <div className=" flex flex-row">
          <div className="flex flex-col">
        <p className={styles.sectionSubText}>AIC</p>
        <h3 className={`${styles.sectionHeadText} `}>Build and Fly Drone</h3>
        </div>
        
        <div className="text-center mx-auto my-auto pl-5">
        <a href="https://forms.gle/G1LrYffWQojYXX7o9 " target="_blank" className="flex text-3xl text-teal-400">Link <img src={rocketry} className=""/></a>
        </div>
        </div>
      </motion.div>
      <StarsCanvas/>
    </div>
    </div>
  );
};

export default SectionWrapper(Workshop, "heros");
