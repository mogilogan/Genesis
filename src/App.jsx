import { BrowserRouter, Routes } from "react-router-dom";

import {  Heross, Experience, Hero, Navbar, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {/* <Hero /> */}
        </div>

        <div className='relative z-0'>
          <Heross />
          <StarsCanvas />
        </div>

        <Experience />
      </div>
      </BrowserRouter>
      
  );
}

export default App;
