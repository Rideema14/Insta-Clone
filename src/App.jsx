import Signup from "./Signup";
import Login from "./Login";
import { Route,Routes,} from "react-router-dom";
function App() {
  return (
   
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
       </Routes>
      
       

    
 
  );
}

export default App;
