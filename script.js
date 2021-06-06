const APIKEY = "7a82cfb2e94223595db64e25c36ba8aa";
const section = document.querySelector("section");
const img = document.querySelector("img");
const place = document.querySelector(".place");
const weather = document.querySelector(".weather");
const temp = document.querySelector(".temp");
const windspeed = document.querySelector(".windspeed");
const iframe = document.querySelector("iframe");
const iconData = {
	"01d": "https://bmcdn.nl/assets/weather-icons/v1.5/clear-day.svg",
	"01n": "https://bmcdn.nl/assets/weather-icons/v1.5/clear-night.svg",
	"02d": "https://bmcdn.nl/assets/weather-icons/v1.5/partly-cloudy-day.svg",
	"02n": "https://bmcdn.nl/assets/weather-icons/v1.5/partly-cloudy-night.svg",
	"03d": "https://bmcdn.nl/assets/weather-icons/v1.5/cloudy.svg",
	"03n": "https://bmcdn.nl/assets/weather-icons/v1.5/cloudy.svg",
	"04d": "https://bmcdn.nl/assets/weather-icons/v1.5/overcast-day.svg",
	"04n": "https://bmcdn.nl/assets/weather-icons/v1.5/overcast-night.svg",
	"09d": "https://bmcdn.nl/assets/weather-icons/v1.5/partly-cloudy-day-rain.svg",
	"09n": "https://bmcdn.nl/assets/weather-icons/v1.5/partly-cloudy-night-rain.svg",
	"10d": "https://bmcdn.nl/assets/weather-icons/v1.5/partly-cloudy-day-rain.svg",
	"10n": "https://bmcdn.nl/assets/weather-icons/v1.5/partly-cloudy-night-rain.svg",
	"11d": "https://bmcdn.nl/assets/weather-icons/v1.5/thunderstorms-day.svg",
	"11n": "https://bmcdn.nl/assets/weather-icons/v1.5/thunderstorms-night.svg",
	"13d": "https://bmcdn.nl/assets/weather-icons/v1.5/partly-cloudy-day-snow.svg",
	"13n": "https://bmcdn.nl/assets/weather-icons/v1.5/partly-cloudy-night-snow.svg",
	"50d": "https://bmcdn.nl/assets/weather-icons/v1.5/mist.svg",
	"50n": "https://bmcdn.nl/assets/weather-icons/v1.5/mist.svg",
};

document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault();
	var place = document.querySelector("#place").value;
	fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APIKEY}`
	)
		.then((result) => result.json())
		.then((res) => renderDOM(res));
});

function renderDOM(json) {
	let name = json.weather[0]["icon"];
	img.setAttribute("src", iconData[name]);
	place.textContent = json.name;
	weather.textContent = json.weather[0]["main"];
	temp.textContent = json.main.temp + " Fahrenhit";
	windspeed.textContent = json.wind.speed + " meter / second";
	section.style.display = "block";
	console.log(
		`https://maps.google.com/maps?q=${json.coord.lon},${json.coord.lat}&hl=es&z=14&output=embed`
	);
	iframe.src = `https://maps.google.com/maps?q=${json.coord.lat},${json.coord.lon}&hl=es&z=14&output=embed`;
}
