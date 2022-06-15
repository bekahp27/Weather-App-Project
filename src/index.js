function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#currentTemp");
  let cityElement = document.querySelector("#currentCityHeader");
  let weatherDescription = document.querySelector("#weatherDescription");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  weatherDescription.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let city = "Shaftesbury";
let apiKey = "c8bcf38f16acb69ddfc1b3daa6ad1ae3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
