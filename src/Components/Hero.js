import { useState, useEffect } from "react";
import Left from "./Left";
import Right from "./Right";
import { dataContext } from "./Util";
import { weatherContext } from "./Util";

function Hero() {
     const [randomPic, setRandomPic] = useState(5);
     useEffect(() => {
          setRandomPic(Math.floor(Math.random() * 24));
     }, []);

     const [selectCity, setSelectCity] = useState("Bucharest");
     const [currentWeather, setCurrentWeather] = useState({
          temperature: 0,
          feel: "Loading",
          city: "Loading",
          humidity: "Loading",
          wind: "Loading",
          country: "Loading",
     });
     return (
          <div>
               <dataContext.Provider value={{ currentWeather, setCurrentWeather }}>
                    <weatherContext.Provider value={{ selectCity, setSelectCity }}>
                         <div className="w-full h-screen  bg-cover" style={{ backgroundImage: `url('/images/backgroundImage${randomPic}.jpg')` }}>
                              <div className="bg-black h-full w-full flex md:flex-row flex-col items-center justify-center text-xl bg-opacity-50">
                                   <Left />
                                   <Right />
                              </div>
                         </div>
                    </weatherContext.Provider>
               </dataContext.Provider>
          </div>
     );
}

export default Hero;
