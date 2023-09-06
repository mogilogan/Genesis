import { BrowserRouter } from "react-router-dom";
import Earth3JS from "./Earthdmoon";
import { Heross, Experience, Hero, Navbar, StarsCanvas } from "./src/components";


function App (){
  return(
    <div>
       <Earth3JS/>
       <Hero/>
    
       <Experience/>
       <Heross />
       <StarsCanvas/>
    </div>

)
}

export default App;