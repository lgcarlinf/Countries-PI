import React,{useState} from "react";
import './Navbar.css';


export const Navbar = () => {
  const [darkMode,setDarkMode] = useState(false)
  return(
    <div className='navbar'>
      <div >
        <h1>Where in the world? </h1>
      </div>
      {/* <div className='containerMode'>
         <span><i class="fas fa-sun"></i></span>
         <div className='switch-check'>
           <label className='switch'>
         <input 
         type="checkbox"
         onChange={()=>setDarkMode(!darkMode)}
         />
         <span className='slider round'></span>
          </label>
          <span><i class="fas fa-moon"></i></span>
        
         </div>
        
        
      </div> */}
    </div>
  )
  
};
