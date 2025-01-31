import API from "./API.js";
document.addEventListener("DOMContentLoaded", init);

function init() {
	const form = document.querySelector("form");
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const latValue = document.querySelector(".form__field--lat").value;
		const lngValue = document.querySelector(".form__field--lng").value;
		const api = new API();
		api
			.get(latValue, lngValue)
			.then((data) => {
				insertData(
					latValue,
					lngValue,
					data.data[0].weather.description,
					data.data[0].temp
				);
			})
			.catch((err) => console.log(err))
			.finally(() => {
				console.log("odpytywanie zakończone");
			});
	});
}

function insertData(latitude, longditude, summary, temp) {
	const latText = document.querySelector(".weather__lat");
	const lngText = document.querySelector(".weather__lng");
	const summaryItem = document.querySelector(".weather__summary");
	const tempItem = document.querySelector(".weather__temperature");
	latText.innerText = latitude;
	lngText.innerText = longditude;
	summaryItem.innerText = summary;
	tempItem.innerText = temp;
}