import React from "react";
import Navbar from "./Navbar";
import MainContainer from "./mainContainer";

const Section1 = () => {
  const user=[
    {
      img:"https://imagescdn.allensolly.com/img/app/product/9/918359-11472054.jpg?auto=format&w=390",
      feedback:"satisfied",
      color:"royalblue"
    },
    {
      img:"https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      feedback:"underbanked",
      color:"purple"
    },
    {
      img:"https://img.freepik.com/free-photo/portrait-elegant-professional-businesswoman_23-2150917266.jpg?semt=ais_hybrid&w=740&q=80",
      feedback:"underserved",
      color:"orange"
    },
    {
      img:"https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      feedback:"undertaker",
      color:"lightgreen"
    }
  ]
  return (
    <div className=" h-screen w-full px-10 overflow-hidden">
      <Navbar />
      <MainContainer users={user}/>
    </div>
  );
};

export default Section1;
