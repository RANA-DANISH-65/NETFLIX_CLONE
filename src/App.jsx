import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Player from "./Pages/Player/player";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    console.log(import.meta.env.VITE_API_KEY);
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged In");
        setTimeout(()=>{
          navigate("/");
        },1000)
        
      }else{
        console.log("Logged Out");
        setTimeout(()=>{
          navigate("/login");
        },1000)
        
      }
    })
  },[])
  return (
    <div>
       <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/player/:id" element={<Player/>}/>
      </Routes>
    </div>
  );
};

export default App;
