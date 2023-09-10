const apiKey = "83ffce0510f2d7a34047ce7fa6bc9552";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const res = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await res.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = `${Math.round(
      data.main.temp
    )}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;

    let weather = data.weather[0].main;

    switch (weather) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;

      case "Clear":
        weatherIcon.src = "images/clear.png";
        break;

      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;

      case "Mist":
        weatherIcon.src = "images/mist.png";
        break;

      case "Rain":
        weatherIcon.src = "images/rain.png";
        break;

      case "Snow":
        weatherIcon.src = "images/snow.png";
        break;

      default:
        weatherIcon.src = "images/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
