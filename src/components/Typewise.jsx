import React from "react";
import {
 
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { technical,nontechnical,cultural,literary,esports } from "../constants";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { StarsCanvas } from "./canvas";
import cmgsoon from '../assets/cmgsoon.gif'
import { useState } from "react";
import { BiSolidDownArrowSquare } from "react-icons/bi";
import { useEffect } from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc  ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
      <div class=" flex items-center justify-center pt-4 shine heart">
      <button onClick={()=>window.open(experience.link,"_blank","noreferrer")} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Register
</button></div>
    </VerticalTimelineElement>
  );
};

const Typewise = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  const [selectedValue,setSelectedValue] = useState("technical")
  const [types,setTypes]=useState("technical");

  const handleChange = (e) => {
    if (e.target.value === "technical"){
      setTypes("technical");
      setSelectedValue(e.target.value);
    }else if (e.target.value === "non-technical"){
      setTypes("non-technical");
      setSelectedValue(e.target.value);
    }else if (e.target.value === "literary"){
      setTypes("literary");
      setSelectedValue(e.target.value);
    }else if (e.target.value === "cultural"){
      setTypes("cultural");
      setSelectedValue(e.target.value);
    }else {
      setTypes("esports");
      setSelectedValue(e.target.value);
    }
  }

  return (
    <section className="w-[100%] z-0">
     
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Type Wise Events
        </h2>
      


      <div className="items-center justify-center flex">
    <div class="relative inline-flex self-center">
       <BiSolidDownArrowSquare className=" text-teal-900  bg-clip-text absolute top-4 left-[200px]"/>
        <select value={selectedValue}  onChange={(e)=>handleChange(e)} class="text-xl font-bold rounded border-2 border-purple-700 text-gray-600 h-14 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
            <option value="technical">Technical</option>
            <option value="non-technical">Non-Technical</option>
            <option value="literary">Literary</option>
            <option value="cultural">Cultural</option>
            <option value="esports">E-sports</option>
        </select>
    </div>
</div>
{types==="technical" && 
       <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {technical.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div> 

          }


{types==="non-technical" && 
       <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {nontechnical.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div> 

          }


{types==="literary" && 
       <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {literary.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div> 

          }

{types==="cultural" && 
       <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {cultural.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div> 

          }


{types==="esports" && 
       <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {esports.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div> 

          }




    
      <StarsCanvas/>
    </section>
  );
};

export default SectionWrapper(Typewise, "work");
