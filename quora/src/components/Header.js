import React, { useState } from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext, useLocation } from 'react';
import { ContextProvider, Context } from '../context/context';
import { Link } from "react-router-dom";
function Header({ setSearchQuery }) {
  const [icon, setIcon] = useState(null);
  const {user, dispatch} = useContext(Context);
  const handleLogout = ()=>{
    dispatch({type: "LOGOUT"})
  }
  return (
    <div className="header">
      <h1>Quora</h1>
      <button
        onClick={() => setIcon("home")}
        className={icon === "home" ? "bClick" : null}
      >
        <HomeIcon style={{ fontSize: "35px", cursor: "pointer" }} />
      </button>
      <button
        onClick={() => setIcon("notes")}
        className={icon === "notes" ? "bClick" : null}
      >
        <SpeakerNotesIcon style={{ fontSize: "35px", cursor: "pointer" }} />
      </button>
      <button
        onClick={() => setIcon("pencil")}
        className={icon === "pencil" ? "bClick" : null}
      >
        <BorderColorOutlinedIcon style={{ fontSize: "35px", cursor: "pointer" }} />
      </button>
      <button
        onClick={() => setIcon("community")}
        className={icon === "community" ? "bClick" : null}
      >
        <PeopleOutlinedIcon style={{ fontSize: "35px", cursor: "pointer" }} />
      </button>
      <button
        onClick={() => setIcon("notification")}
        className={icon === "notification" ? "bClick" : null}
      >
        <NotificationsOutlinedIcon style={{ fontSize: "35px", cursor: "pointer" }} />
      </button>

      <input 
        type="text" 
        placeholder="Search Quora" 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      {user && <AccountCircleIcon style={{ fontSize: "35px", cursor: "pointer" }} />} 
      <button
        onClick={() => setIcon("globe")}
        className={icon === "globe" ? "bClick" : null}
      >
        <LanguageOutlinedIcon style={{ fontSize: "35px", cursor: "pointer" }} />
      </button>
      <button className="ques">Ask question</button>
      <h3 style={{cursor: "pointer"}} onClick={handleLogout}>{user && "LOGOUT"}</h3>
      <h3 style={{cursor: "pointer"}}><Link to={"/login"} >{user ? null : "LOGIN"}</Link></h3>
    </div>
  );
}

export default Header;
