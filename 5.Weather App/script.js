let apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
let apiKey="7db4a9cd03b06ad398b70e5cfcad0c1b"
let temp=document.getElementById("temp")
let city=document.getElementById("city")
let humidity=document.getElementById("dh")
let wind=document.getElementById("dw")
let search=document.querySelector(".search input")
let btn=document.getElementById("btn")
let image=document.querySelector(".weatherstatus img")
let weatherstatus=document.querySelector(".weatherstatus")
let card=document.querySelector(".card")
let invalid=document.getElementById("invalid")

async function checkWeather(cityy){
    let response=await fetch(apiUrl + cityy +`&appid=${apiKey}`)
    let data=await response.json()
    if(data.cod=="404"){
        invalid.style="display:block";
        weatherstatus.style.display = "none";
        card.style = "height:70px; transition:height 0.5s";
    }
    else{
        temp.innerHTML=Math.round(data.main.temp) + "°C";
        city.innerHTML=data.name;
        humidity.innerHTML=data.main.humidity + "%";
        wind.innerHTML=data.wind.speed + "km/h";
        invalid.style="display:none";
        if(data.weather[0].main=="Clouds"){
            image.src="Clouds.svg";
        }
        else if(data.weather[0].main=="Rain"){
            image.src="rainy.svg"
        }
        else if(data.weather[0].main=="Clear"){
            image.src="day.svg"
        }
        else if(data.weather[0].main=="Snow"){
            image.src="snowy.svg"
        }
        card.style="height:530px;transition:height 0.5s";
        weatherstatus.style="display:block";
        }
}

btn.addEventListener("click",()=>{
    checkWeather(search.value)
})