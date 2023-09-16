import React from 'react'
import { StarsCanvas } from './canvas';
import { SectionWrapper } from '../hoc';

import {motion} from 'framer-motion'
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { Link } from 'react-router-dom';


import bullz from '../assets/allday/bullz.jpg';
import strange from '../assets/allday/strange.jpg';
import humans from '../assets/allday/humans.jpg';
import ballon from '../assets/allday/ballon.jpg';

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


    <h2 className={`${styles.sectionHeadText} text-center pb-10`}>
          All day Events
        </h2>
<div className='grid grid-cols-2 grid-flow-row gap-4 ' >

    <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
  <img class="w-full" src={ballon} alt="Sunset in the mountains"/>
  <div class=" py-4">
    <div class="font-bold text-xl mb-2">Balloon Cup Clash</div>
    <p class="text-teal-500  text-xs md:text-base">
    It's a single-player game. There will be paper cups on the table. Only when the timer starts the player blow the balloon and keep releasing its air to make all the cups fall from the table.
    </p>
  </div>
  
</div>


<div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
  <img class="w-full" src={strange} alt="Sunset in the mountains"/>
  <div class=" py-4">
    <div class="font-bold text-xl mb-2">what is that strange thing</div>
    <p class="text-teal-500 text-xs md:text-base">
    A box is placed in front of the player or team who is going to guess. The player puts the hand inside the box and is given three guesses or a certain time to guess the item in the box.
    </p>
  </div>
  
</div>

<div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
  <img class="w-full" src={bullz} alt="Sunset in the mountains"/>
  <div class=" py-4">
    <div class="font-bold text-xl mb-2">Bullseye Blitz: The Ultimate Dart Challenge</div>
    <p class="text-teal-500 text-xs md:text-base">
    It is a fun Game where the  Dart board is fixed at some distance and the participant will be given 5 darts to play. The participant is not allowed to move from the fixed position.
    </p>
  </div>
 
</div>

<div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
  <img class="w-full" src={humans} alt="Sunset in the mountains"/>
  <div class=" py-4">
    <div class="font-bold text-xl mb-2">HUMAN VS XOXO</div>
    <p class="text-teal-500 text-xs md:text-base">
    Here are nine chairs to form three rows and three columns. Secondly, there are two teams, team “O” and team “X”.  Moreover, one extra member is there to announce The number or to lead the game. This extra player announces a number, the participant of this number from both the teams, rush towards the chair, sit and form “O” or “X” respectively.
    </p>
  </div>
  
</div>
</div>



    <StarsCanvas/>
  </div>
  )
}

export default SectionWrapper( Experience,"work");