const apiKey ='be46f601804625da4cc75bf0736d3400';
//const apikey ="46f80a02ecae410460d59960ded6e1c6";

const weatherDataElements =document.getElementById('weather-data');
const cityInput=document.getElementById("city");
const formElement=document.querySelector("form")

formElement.addEventListener("submit",(event)=>{
event.preventDefault();
const cityValue= cityInput.value;


getWeatherData(cityValue);
});
async function getWeatherData(cityValue){
    try{
        const resp=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        
        if(!resp.ok){
            throw new Error("Network response was not ok")
        }
        const data = await resp.json();
        
        const temp=data.main.temp;

        const descr=data.weather[0].description
        const icon=data.weather[0].icon
        const details=[
            `Feel Like : ${data.main.feels_like}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed}m/s`
        ]
        weatherDataElements.querySelector("#icon").innerHTML=` <img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`
        weatherDataElements.querySelector("#temperature").textContent=`${temp}°C`;
        weatherDataElements.querySelector("#description").textContent=`${descr}`;
        weatherDataElements.querySelector("#details").innerHTML=details.map((detail)=>`<div> ${detail}</div>`).join("");
    
    }catch (error){
        weatherDataElements.querySelector("#icon").innerHTML=""
        weatherDataElements.querySelector("#temperature").textContent="";
        weatherDataElements.querySelector("#description").textContent=" An error occured. Please Try Again later";
        weatherDataElements.querySelector("#details").innerHTML="";
    }
    
}