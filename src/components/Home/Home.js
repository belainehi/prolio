import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ProlioNavbar from "../Navbar/Navbar";
import Post from "../Post/Post";
import "./Home.css";

function Home() {
    return (
        <div>
            <Router>
                <ProlioNavbar />
            </Router>
            <div className="mainPage">
                <Post />
                <Post />
                <Post />
            </div>
        </div>
        
      );
    }
    
export default Home;