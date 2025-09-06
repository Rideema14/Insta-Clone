import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";

import { Route,Routes,} from "react-router-dom";
function App() {
  return (
   
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/home" element={<Home/>}/>
       </Routes>
      
       

    
 
  );
}

export default App;
