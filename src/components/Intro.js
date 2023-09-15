import React from 'react'
import intro from '../assets/intro.gif'
import { StarsCanvas } from './canvas'

const Intro = (props) => {
    const handleButtonClick = () => {
        props.handleroute();
      };
  return (
    <div className=' h-screen flex flex-col items-center justify-center'>
      
  <img width={200} className='w-[300px]' src={intro}/>
  <div className='py-20'>
  <button className="glow-on-hover" onClick={handleButtonClick} type="button">Take me To Lunar Spaces</button></div>

  <StarsCanvas/>



    </div>
  )
}

export default Intro