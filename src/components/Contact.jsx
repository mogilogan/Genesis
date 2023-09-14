import React from "react";

import ButtonMailto from './ButtonMailto';

import {FaInstagram} from 'react-icons/fa'
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { StarsCanvas } from "./canvas";

// const ExperienceCard = ({ experience }) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
//       }}
//       contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//       icon={
//         <div className='flex justify-center items-center w-full h-full'>
//           <img
//             src={experience.icon}
//             alt={experience.company_name}
//             className='w-[60%] h-[60%] object-contain'
//           />
//         </div>
//       }
//     >
//       <div>
//         <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
//         <p
//           className='text-secondary text-[16px] font-semibold'
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className='mt-5 list-disc w-[20%] ml-5 space-y-2'>
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className='text-white-100 text-[14px] pl-1 tracking-wider'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// };

const Contact = () => {
  return (
    <section className="w-[100%] z-0">
    



<div className='bg-transparent z-0'>
        <h2 className={`${styles.sectionHeadText} text-center`}>
         Contact Us
        </h2>
    <div className=' flex flex-col md:flex-row gap-8 mx-auto'>




    <section
      className='my-[5px] z-0'
      id="#About"

    >
      <div className='max-w-[360px] sm:max-w-[700px]  md:max-w-auto container py-8 '>
        <div className=' bg-transparent rounded-xl    pb-12 flex flex-col    '>
            <div className="">
          <div className='flex-1 rounded-tr-xl rounded-tl-xl '>
           
            </div>
   
            <p className='px-12 pt-2 text-2xl text-blue-700   text-left'>
           <b>Kattoju Hemanth</b>
            </p>
            <p className='px-12 text-lg pb-2 text-left text-teal-600  '>Secretary</p>
            <p className='px-12 text-lg pb-2 text-left text-teal-600  '>9381897926</p>
            <p className='px-12 pb-4 text-2xl text-blue-700 text-left '>
            <b>Sivashree I</b>
            </p>
            <p className='px-12 text-lg pb-2 text-left text-teal-600   '>Finance Secretary</p>
            <p className='px-12 text-lg pb-2 text-left text-teal-600  '>9751052991</p>

          


            <p className='px-12 py-4  text-left mx-auto'>
              Department of Electronics & Communication Engineering
            </p>
            <p className='px-12   text-left mx-auto'>
            PUDUCHERRY TECHNOLOGICAL UNIVERISTY
            </p>
            <p className='px-12   text-left mx-auto'>
            Puducherry – 605014, INDIA
            </p>
            <p className='px-12 pt-6  text-left mx-auto'><button className="bg-yellow-500 px-1 py-1 rounded-xl hover:bg-blue-700 hover:text-white">
            <ButtonMailto  label="ecegenesis@ptuniv.edu.in" mailto="mailto:ecegenesis@ptuniv.edu.in"/></button>
            <a href="https://www.instagram.com/genesis_ece/" target='_blank' className="text-gray-700 py-4  flex justify-center hover:text-red-400 mx-4">
          <FaInstagram size={40} /><span className="text-xl pt-1 pl-2">Follow Us!</span> </a>
            </p>
           
          </div>
        </div>
      </div>
    
    </section>

   



    <section
      className='my-[20px] py-12 flex-1 z-0'
      id="#About"

    >
      <div className='max-w-[360px] sm:max-w-[700px] md:max-w-auto container rounded-xl mx-auto bg-transparent'>
        <div className=' pb-12 flex flex-col'>
            <div className="">
          <div className='flex-1 rounded-tl-xl rounded-tr-xl bg-gray-800 '>
            <h2 className='h2 mb-10 px-4 py-3 font font-black text-white text-lg' >
            LOCATION
            </h2>
            </div>
            <div className="hidden md:block">
              <iframe class="mx-auto sm:display-none"  width="600" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4525377240434!2d79.85504551473028!3d12.012335191490218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536446022cfb0b%3A0x5c0d300c8187a76b!2sPuducherry%20Technological%20University!5e0!3m2!1sen!2sin!4v1678205503864!5m2!1sen!2sin"  style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="md:hidden block">
              <iframe class="mx-auto sm:display-none"  width="350" height="200" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.4525377240434!2d79.85504551473028!3d12.012335191490218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536446022cfb0b%3A0x5c0d300c8187a76b!2sPuducherry%20Technological%20University!5e0!3m2!1sen!2sin!4v1678205503864!5m2!1sen!2sin"  style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
        </div>
      </div>
    </section>
    </div>

    </div>
      <StarsCanvas/>
    </section>
  );
};

export default SectionWrapper(Contact, "work");
