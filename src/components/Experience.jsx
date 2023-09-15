import React from 'react'
import { StarsCanvas } from './canvas';
import { SectionWrapper } from '../hoc';

import {motion} from 'framer-motion'
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { Link } from 'react-router-dom';

const Experience = () => {
  return (
    <div className='w-[100%]'>

<motion.div variants={textVariant()} >
        <p className={`${styles.sectionSubText} text-center `}>
          Exictments so far.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center pb-10`}>
          Events
        </h2>
      </motion.div>
<div className='flex flex-col md:flex-row gap-[50px] md:gap-[200px] items-center justify-center w-[100%]'>
      <div >
        <Link to="/day-wise">
    <div className="stage">
      <div className="body">
        <div className="top">
          <div className="light"></div>
          <div className="antenna"></div>
          <div className="base2"></div>
          <div className="base1"></div>
        </div>
        <div className="glass">
          <div className="reflection"></div>
        </div>
        <div className="flag">
          <img src="https://i.postimg.cc/02tkCh3m/1682594977157.png" width="20" height="20" alt="" />
        </div> 
        <div className="boster bosterL">
          <p>Genesis </p>
        </div>
        <div className="boster bosterR"> <p> 23</p></div>
        <div className="ring">
          <div className="s1"></div>
          <div className="s1"></div>
          <div className="s1"></div>
          <div className="s1"></div>
          <div className="s1"></div>
          <div className="s1"></div>
          <div className="s1"></div>
        </div>
        <div className="fire">
          <div className="flame h1"></div>
          <div className="flame h2"></div>
          <div className="flame h3"></div>
          <div className="flame h4"></div>
          <div className="flame h5"></div>
        </div>
      </div>
      
    </div>
    <div className="parent">
      <div className="animated-heading ">
        <h1> Events:  <span id="words">Day Wise</span></h1>
      </div>
    </div>
    </Link>
    </div>



    <div>
    <Link to="/type-wise">
    <div className="stage">
      <div className="body">
        <div className="top">
          <div className="light"></div>
          <div className="antenna"></div>
          <div className="base2"></div>
          <div className="base1"></div>
        </div>
        <div className="glass">
          <div className="reflection"></div>
        </div>
        <div className="flag">
          <img src="https://i.postimg.cc/02tkCh3m/1682594977157.png" width="20" height="20" alt="" />
        </div> 
        <div className="boster bosterL">
          <p>Genesis  </p>
        </div>
        <div className="boster bosterR"> <p> 23</p></div>
        <div className="ring">
          <div className="s1"></div>
          <div className="s1"></div>
          <div className="s1"></div>
          <div className="s1"></div>
          <div className="s1"></div>
          <div className="s1"></div>
          <div className="s1"></div>
        </div>
        <div className="fire">
          <div className="flame h1"></div>
          <div className="flame h2"></div>
          <div className="flame h3"></div>
          <div className="flame h4"></div>
          <div className="flame h5"></div>
        </div>
      </div>
      
    </div>
    <div className="parent">
      <div className="animated-heading ">
        <h1> Events:  <span id="words">Type wise</span></h1>
      </div>
    </div>
      </Link>
    </div>

    </div>



    <StarsCanvas/>
  </div>
  )
}

export default SectionWrapper( Experience,"work");