function displayTemperature (response) {
    let temperatureElement = document.querySelector("#main-temp"); 
    temperatureElement.innerHTML = Math.round(response.data.main.temp); 
    let cityElement = document.querySelector ("#city"); 
    cityElement.innerHTML = response.data.name; 
    let descriptionElement = document.querySelector ("#description"); 
    descriptionElement.innerHTML = response.data.weather[0].description;
    let humidityElement = document.querySelector ("#humidity"); 
    humidityElement.innerHTML = response.data.main.humidity;
    let windElement = document.querySelector ("#wind"); 
    windElement.innerHTML = Math.round(response.data.wind.speed); 

}

let apiKey = "8aff452f462b48a45bc3c998378072b3"; 
let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=New York,&appid=${apiKey}&units=metric`;
 
axios.get (apiUrl).then (displayTemperature); 

