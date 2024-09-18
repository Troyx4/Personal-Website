import React from "react";
import { useEffect, useState } from "react";

export function Weather() {
  const [Temp, SetTemp] = useState(null); // Initialize Temp with null for proper loading check
  const [error, setError] = useState(null); // Optional error handling
  const [currentDate, setCurrentDate] = useState("");



  useEffect(() => {
    function GetDate(){
      const today = new Date();
    
      // Format the date (optional, here using 'en-GB' format)
      const formattedDate = today.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
      });
      
      // Set the date in state
      setCurrentDate(formattedDate);
    }
    
    async function fetchWeather() {
      const params = {
        latitude: 51.5085,
        longitude: -0.1257,
        hourly: ["rain", "showers", "snowfall", "temperature_120m"],
        timezone: "GMT",
      };
      const url = "https://api.open-meteo.com/v1/forecast";
      
      try {
        const response = await fetch(
          `${url}?latitude=${params.latitude}&longitude=${params.longitude}&hourly=${params.hourly.join(",")}&timezone=${params.timezone}`
        );
        const data = await response.json();

        SetTemp(data.hourly.temperature_120m[0]); // Set the temperature
      } catch (error) {
        console.log("Error fetching weather data:", error);
        setError("Failed to load weather data"); // Set error state
      }
    }
    
    fetchWeather()
    GetDate();
  }, []);



  return (
    <div className="temp-div">
      {error ? (
        
        <p className="temp error">{error}</p> // Show error message if fetch fails
      ) : Temp !== null ? (
        <div className="t">
        <p className="temp">London : {Temp}°C</p>
        </div>
       
      ) : (
        <p className="temp">Loading...</p> // Show loading state until temperature is fetched
      )}
      
     
    </div>
  );
}
