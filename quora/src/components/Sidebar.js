// src/components/Sidebar.js
import React, {useState} from 'react';
import './Sidebar.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ScienceIcon from '@mui/icons-material/Science';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PhonelinkOutlinedIcon from '@mui/icons-material/PhonelinkOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
function Sidebar({setCatQuery}) {
  
  return (
    <div className="sidebar">
      <ul>
        <li style={{display:"flex", alignItems: "center"}} onClick={(e)=>setCatQuery("finance")}><CurrencyRupeeIcon />Finance</li>
        <li style={{display:"flex", alignItems: "center"}} onClick={(e)=>setCatQuery("healthy living")}><DirectionsRunIcon />Healthy living</li>
        <li style={{display:"flex", alignItems: "center"}} onClick={(e)=>setCatQuery("Science")}><ScienceIcon />Science</li>
        <li style={{display:"flex", alignItems: "center"}} onClick={(e)=>setCatQuery("Health")}><HealthAndSafetyIcon />Health</li>
        <li style={{display:"flex", alignItems: "center"}} onClick={(e)=>setCatQuery("Technology")}><PhonelinkOutlinedIcon />Technology</li>
        <li style={{display:"flex", alignItems: "center"}} onClick={(e)=>setCatQuery("Animals")}><PetsOutlinedIcon />Animals</li>
        <li style={{display:"flex", alignItems: "center"}} onClick={(e)=>setCatQuery("")}><button style={{cursor: "pointer", backgroundColor: "#f52936", borderRadius: "50px", padding: "10px", color: "white"}}>Remove filters</button></li>
      </ul>
    </div>
  );
}

export default Sidebar;
