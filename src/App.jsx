import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Post from "./UploadImage";
import ProtectedRoute from "./ProtectedRoute";

import { Route,Routes,} from "react-router-dom";
function App() {
  return (
   
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/home" element={ <ProtectedRoute><Home/></ProtectedRoute>}/>
         <Route path="/forgot-password" element={<ForgotPassword/>}/>
         <Route path="/reset-password/:token" element={<ProtectedRoute><ResetPassword/></ProtectedRoute>}/>
         <Route path="/post" element={<ProtectedRoute><Post/></ProtectedRoute>}/>
       </Routes>
      
       

    
 
  );
}

export default App;
