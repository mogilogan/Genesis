import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Heross = () => {


 

 

  return (
    <>
    
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Workshops
        </h2>
   
    <div
      className={`pt-8 flex xl:flex-row flex-col-reverse overflow-hidden`}
    >
      
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Aerion</p>
        <h3 className={styles.sectionHeadText}>Rocketry</h3>
         


         
       

          
      </motion.div>
      <StarsCanvas/>
    </div>
    </>
  );
};

export default SectionWrapper(Heross, "heros");
