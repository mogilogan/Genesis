import { BrowserRouter } from "react-router-dom";
import Earth3JS from "./Earthdmoon";
import { Heross, Experience, Hero, Navbar, StarsCanvas } from "./src/components";


function App (){
  return(
    <div>
   <div className="fixed w-full overflow-hidden">
    <div className={`sm:px-16 px-6 flex justify-center items-center`}>
      <div className={`xl:max-w-[1280px] w-full`}>
        <Navbar />
      </div>
    </div>
  </div>
       <div id="dashboard">
       <Hero/>
       </div>
       <Earth3JS/>
       <StarsCanvas/>
       <div id="workshop">
        <Heross/>
       </div>
      
       <div id="events"><Experience/></div>
       
      
       
    </div>

)
}

export default App;