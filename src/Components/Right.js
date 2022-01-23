import React from "react";
import { useState, useEffect, useContext } from "react";
import { weatherContext, dataContext } from "./Util";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

function Right() {
     const { currentWeather, setCurrentWeather } = useContext(dataContext);
     const { selectCity, setSelectCity } = useContext(weatherContext);
     const [searchCity, setSearchCity] = useState("London");
     let currWeather = `https://api.openweathermap.org/data/2.5/weather?q=${selectCity}&units=metric&appid=296bb441ea1613b9097ca367aada460d`;
     let currWeather2 = `https://api.openweathermap.org/data/2.5/weather?q=${selectCity}&units=metric&appid=6890862a72fc7aabfe2222f2f2b1d4b0`;

     useEffect(() => {
          axios.get(currWeather).then((request) => {
               setCurrentWeather({ temperature: request.data.main.temp, feel: request.data.weather[0].main, city: request.data.name, humidity: request.data.main.humidity, wind: request.data.wind.speed, country: request.data.sys.country });
          });
     }, [currWeather]);

     function getData(val) {
          setSearchCity(val.target.value);
     }

     let predCity = ["Bucharest", "Cluj", "Brasov", "Arad", "Iasi"];
     let predCity2 = ["London", "New York", "Dubai", "Sydney", "Tokyo"];

     return (
          <div className="w-5/12 h-full backdrop-filter backdrop-blur-2xl shadow-2xl p-10 flex flex-col divide-y divide-gray-500 divide-opacity-70 space-y-5 font-light text-gray-400 ">
               <div className="flex flex-row justify-between">
                    <input type="text" name="" id="" className="bg-transparent w-full focus:outline-none focus:none text-white" placeholder="Search City" onChange={getData} onKeyPress={(e) => e.key === "Enter" && setSelectCity(searchCity)} />
                    <button onClick={() => setSelectCity(searchCity)}>
                         <BsSearch className="text-3xl hover:text-white" />
                    </button>
               </div>
               <div className="flex flex-row ">
                    <div className="space-y-5 py-10 flex flex-col items-start w-1/2">
                         {predCity.map((cit) => (
                              <button onClick={() => setSelectCity(cit)} className={selectCity === cit ? "text-white" : "hover:text-white font-light"}>
                                   {cit}
                              </button>
                         ))}
                    </div>
                    <div className="space-y-5 py-10 flex flex-col items-start w-1/2">
                         {predCity2.map((cit) => (
                              <button onClick={() => setSelectCity(cit)} className={selectCity === cit ? "text-white" : "hover:text-white font-light"}>
                                   {cit}
                              </button>
                         ))}
                    </div>
               </div>

               <div className="space-y-5 py-10">
                    <p className="text-white">Weather details</p>
                    <div className="flex flex-row justify-between">
                         <p>City</p>
                         <p>{currentWeather.city}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                         <p>Temperature</p>
                         <p>{currentWeather.temperature}°</p>
                    </div>
                    <div className="flex flex-row justify-between">
                         <p>Humidity</p>
                         <p>{currentWeather.humidity}%</p>
                    </div>
                    <div className="flex flex-row justify-between">
                         <p>Wind</p>
                         <p>{(currentWeather.wind * 3.6).toFixed(2)} km/h</p>
                    </div>
               </div>
          </div>
     );
}

export default Right;
