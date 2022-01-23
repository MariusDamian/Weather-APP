import React from "react";
import { useState, useEffect, useContext } from "react";
import { weatherContext, dataContext } from "./Util";
import Clock from "react-live-clock";
import moment from "moment-timezone";
import Moment from "react-moment";
import "moment-timezone";
import { FaSnowflake } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { GiFog, GiStripedSun } from "react-icons/gi";
import { BsFillCloudRainFill, BsFillCloudsFill } from "react-icons/bs";
import axios from "axios";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let mo = parseInt(mm) - 1;
var yyyy = today.getFullYear();
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

today = dd + " " + month[mo] + " " + yyyy;

function Left() {
     const { currentWeather, setCurrentWeather } = useContext(dataContext);
     // const { selectCity, setSelectCity } = useContext(weatherContext);

     return (
          <div className="w-7/12 h-full p-28">
               <div className="h-full w-full flex items-end">
                    <div className="flex flex-row">
                         <p className="text-8xl w-40">{Math.round(currentWeather.temperature)}°</p>
                         <div className="flex flex-col justify-end ml-5">
                              <p className="text-4xl">
                                   {currentWeather.city},<em className="not-italic text-xl"> {currentWeather.country}</em>
                              </p>
                              <p>
                                   <Clock ticking={true} timezone={""} className="mr-5" />
                                   {today}
                              </p>
                              <date />
                         </div>
                         <div className="flex flex-col justify-end ml-5">
                              <p className="text-4xl">{currentWeather.feel === "Rain" ? <BsFillCloudRainFill /> : currentWeather.feel === "Clouds" ? <BsFillCloudsFill /> : currentWeather.feel === "Snow" ? <FaSnowflake /> : currentWeather.feel === "Mist" ? <GiFog /> : currentWeather.feel === "Clear" ? <IoMdSunny /> : <IoMdSunny />}</p>
                              <p>{currentWeather.feel}</p>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Left;
