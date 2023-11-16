
import './App.css';

import { Routes,Route } from "react-router-dom";
import Profile from "../src/components/Profile";
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import { Link } from "react-router-dom";

function App() {
  const [username,setuserName] = useState("");
  const [password,setPassword] = useState("");
  

  const navigate = useNavigate();


  function handleClick(e){
    e.preventDefault();

    // navigate("/profile");
  }

  const handleLogin = () => {
    // Perform any login/authentication logic here

    // For simplicity, just updating the state
    setuserName(username);
    setPassword(password);
    navigate("/profile");
  };
  return (
    <div className="App">
      <div className="border">
      
        <label htmlFor="username" >Username:</label><br />
        <input type="text" name="username" id="username" value={username} onChange={(e)=> setuserName(e.target.value)}/><br />
        <label htmlFor="username" className='pass'>Password:</label><br />
        <input  type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} id="password"/ ><br />
        <button onClick={handleLogin}>
          <Link style={{color:"white"}} to="/profile">Submit</Link>
        </button>
      
      </div>
      <Routes>
        <Route path="/profile" element={<Profile username={username} password = {password}/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
