import React from "react";
import HomeCard from "./HomeCard";
import HomeService from "./HomeService";
import Card from './Card'
import './style.css'
import CardSlide from "./CardSlide";
export default function Home() {
  return (
    <div>
      <HomeCard/>
      <HomeService/>
      <Card/>
      <CardSlide/>
    </div>
   
  );
}
