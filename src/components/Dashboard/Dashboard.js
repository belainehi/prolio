import React from "react";
import '../App/App.css';
import { Link, useHistory } from "react-router-dom";


export default function Dashboard() {

  return (
    <>
    <h2>Dashboard</h2>
      <Link className = "addIcon" to="/login"></Link> 
    </>
  )
}
