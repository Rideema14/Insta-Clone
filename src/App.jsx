import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Post from "./UploadImage";

import { Route,Routes,} from "react-router-dom";
function App() {
  return (
   
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/home" element={<Home/>}/>
         <Route path="/forgot-password" element={<ForgotPassword/>}/>
         <Route path="/reset-password/:token" element={<ResetPassword/>}/>
         <Route path="/post" element={<Post/>}/>
       </Routes>
      
       

    
 
  );
}

export default App;
