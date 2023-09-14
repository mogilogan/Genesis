
import { Route, Routes } from "react-router-dom";
import Earth3JS from "./Earthdmoon";
import { Workshop,About, Experience, Hero, Typewise,Daywise } from "./components";

import Navbar from './components/Navbar'
import Drone from "./components/Drone";
import Rocketry from "./components/Rocketry";
import Contact from "./components/Contact";


function App (){

 
  return(
    <div>
      <Navbar />
   <Routes>
 
    <Route path="/" exact element={<>
      
       <div id="dashboard"><Hero/></div>
       <div id="about"><About/><Earth3JS/> </div>
       <div id="workshop" className="w-[100%]"><Workshop/></div>
       <div id="events"><Experience/></div>
       <div id="contact"><Contact/></div>
    </>} />

    <Route path="/drone" exact element={<Drone/>} />
    <Route path="/rocketry" exact element={<Rocketry/>}/>
    <Route path="/day-wise" exact element={<Daywise/>}/>
    <Route path="/type-wise" exact element={<Typewise/>}/>
        
       </Routes>
       
       
    </div>

)
}

export default App;