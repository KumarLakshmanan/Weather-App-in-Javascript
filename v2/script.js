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
// const ENDPOINT = `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APIKEY}`;

const submitFormElement = document.querySelector(".submitForm");

submitFormElement.addEventListener("submit", submitForm);

// submitForm onSubmit

function submitForm(e) {
	e.preventDefault();
	const place = document.querySelector("#place").value;
	const APIKEY = "7a82cfb2e94223595db64e25c36ba8aa";
	const ENDPOINT = `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APIKEY}`;
	fetch(ENDPOINT)
		.then(response => response.json())
		.then(data => {
			document.querySelector(".column2").style.display = "block";
			document.querySelector("#placename").innerHTML = data.name;
			document.querySelector("#weather_discription").innerHTML = data.weather[0].main;
			document.querySelector(".icon-image").setAttribute("src", iconData[data.weather[0].icon]);
			document.querySelector(".celsius").innerHTML = FaherhitToCelsius(data.main.temp).toFixed(1) + "°C";
			console.log(data)
		}).catch(error => console.log(error));
}

function FaherhitToCelsius(temp) {
	return (temp - 273.15);
}
