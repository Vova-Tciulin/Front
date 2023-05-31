const url='https://api.weather.gov/points/42.93708397900008,-75.61070144699994';


async function getWeather(){
    const response=await fetch(url);
    const cityInfo=await response.json();
    const urlForecast=cityInfo.properties.forecast;
    const responseForecast=await fetch(urlForecast);
    const forecastInfo=await responseForecast.json();

    createInfo(cityInfo.properties.relativeLocation.properties.city,cityInfo.properties.relativeLocation.properties.state,
        forecastInfo.properties.updated,forecastInfo.properties.periods[0].temperature,forecastInfo.properties.periods[1].temperature);
}

function createInfo(city,state,date,afternoon,tonight){

    const elem=document.getElementById("forecast");
    while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
      }
    const cityTag=document.createElement("h3");
    const stateTag=document.createElement("h3");
    const dateTag=document.createElement("h3");
    const afternoonTag=document.createElement("h3");
    const tonightTag=document.createElement("h3");

    cityTag.textContent='Город: '+city;
    stateTag.textContent='Штат: '+state;
    dateTag.textContent='Последнее время обновления: '+date;
    afternoonTag.textContent='Температура днем: '+afternoon+'°F';
    tonightTag.textContent='Температура ночью: '+tonight+'°F';

    elem.appendChild(cityTag);
    elem.appendChild(stateTag);
    elem.appendChild(dateTag);
    elem.appendChild(afternoonTag);
    elem.appendChild(tonightTag);
}
