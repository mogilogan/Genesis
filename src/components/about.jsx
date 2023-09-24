import React from 'react'

import about from '../assets/about.png'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import { StarsCanvas } from './canvas'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <section className='z-0 w-[100%]'>
    <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div class="flex flex-col lg:flex-row justify-between gap-8">
            <div class="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-[#915EFF] pb-4">About Genesis</h1>
                <p class="font-normal md:text-lg text-base leading-6 text-white">"Genesis" stands as a quadrennial cornerstone, a national-level symposium meticulously convened by the Department of Electronics and Communication Engineering (ECE) at Puducherry Technological University since its inaugural manifestation in 1992. This unique scholarly forum unfolds once every four years, fostering a dynamic convergence of erudition, workshops, and competitive arenas spanning the gamut of electronics and communication. With an enduring legacy spanning multiple decades, Genesis epitomizes the union of innovation, knowledge dissemination, and professional networking. It remains an esteemed biennial juncture, harmonizing enthusiasts and luminaries in a quest to unravel the frontiers of ECE's evolution.</p>
            </div>
            <div class="w-full lg:w-8/12">
                <img class="w-full h-full" src={about} alt="A group of People" />
            </div>
        </div>

        <div class="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div class="w-full lg:w-5/12 flex flex-col justify-center">
                <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-[#915EFF] pb-4">Our Story</h1>
                <p class="font-normal md:text-lg text-base leading-6 text-white">The upcoming edition of "CosmoComm" derives its inspiration from the recent triumph of Chandrayaan-3 and the triumphant landing of its rover. Aptly named in light of these achievements, this edition encapsulates the essence of cosmic communication. With the evocative tagline "Tuning into Lunar Frequencies," CosmoComm beckons participants to explore the nexus of space, technology, and communication. The symposium provides a platform for enthusiasts, researchers, and visionaries to delve into workshops, discussions, and contests that navigate the realms of interstellar connectivity. This edition of CosmoComm serves as a nexus for those captivated by space and its celestial inhabitants, encapsulating the spirit of scientific exploration and technological innovation.</p>
            </div>
            <div class="w-full lg:w-8/12 lg:pt-8">
                <div class="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                    <div class="p-4 pb-6 flex justify-center flex-col items-center">
                        <img class="md:block hidden" src={about1} alt="Alexa featured Image" />
                        <img class="md:hidden block" src={about1} alt="Alexa featured Image" />
                        <p class="font-medium text-xl leading-5 text-white mt-4">PTU</p>
                    </div>
                    <div class="p-4 pb-6 flex justify-center flex-col items-center">
                        <img class="md:block hidden" src={about2} alt="Olivia featured Image" />
                        <img class="md:hidden block" src={about2} alt="Olivia featured Image" />
                        <p class="font-medium text-xl leading-5 text-white mt-4">AUDITORIUM</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  <StarsCanvas/>
</section>
  )
}

export default SectionWrapper(About, "work");
