import { apiKey } from './config.js';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon');

async function findWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data = await response.json();


    if (response.status===404) {
        document.querySelector('.error').style.display ='block';
        document.querySelector('.container').style.display = 'none';
    }else {
        
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';


    if (data.weather[0].main==='Clouds') {
        weatherIcon.src = 'Images/cloud-sun.png'
    }
    else if (data.weather[0].main==='Clear') {
        weatherIcon.src = 'Images/clear.png'
    }
    else if (data.weather[0].main==='Rain') {
        weatherIcon.src = 'Images/cloud-rain.png'
    }
    else if (data.weather[0].main==='Drizzle') {
        weatherIcon.src = 'Images/drizzle.png'
    }
    else if (data.weather[0].main==='Mist') {
        weatherIcon.src = 'Images/mist.png'
    }
    else if (data.weather[0].main==='Snow') {
        weatherIcon.src = 'Images/snowflake.png'
    }

    document.querySelector('.container').style.display='block';
    document.querySelector('.error').style.display ='none';

    }

    
}

searchBtn.addEventListener('click', ()=> {
    findWeather(searchBox.value);
})




