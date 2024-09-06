import { useEffect } from "react";
import { useState } from "react";
import { fetchWeatherApi } from 'openmeteo';

export function Weather(){

  const [Temp, SetTemp] = useState(0)
  
 useEffect(()=>{ 
  async function fetchWeather() {
    const params = {
      latitude: 51.5085,
      longitude: -0.1257,
      hourly: ["rain", "showers", "snowfall", "temperature_120m"],
      timezone: "GMT"
    };
    const url = "https://api.open-meteo.com/v1/forecast";
    try{
      const response = await fetch(`${url}?latitude=${params.latitude}&longitude=${params.longitude}&hourly=${params.hourly.join(',')}&timezone=${params.timezone}`);
    const data = await response.json();
    SetTemp(data.hourly.temperature_120m[0]
    )
  
    }
    catch(error){
      console.log(error)

    }


  }
  fetchWeather()
  
},[])


  

  return(
    <div className="temp-div">
      {Temp !== null ? (
        <p className="temp">London Temperature: {Temp}°C</p>
      ) : (
        <p className="temp">Loading...</p>
      )}
    </div>
  )

}