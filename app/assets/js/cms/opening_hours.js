const hours = [
	["monday", "10:00 - 22:00"],
	["tuesday", "10:00 - 22:00"],
	["wednesday", "10:00 - 22:00"],
	["thursday", "10:00 - 22:00"],
	["friday", "10:00 - 22:00"],
	["saturday", "10:00 - 22:00"],
	["sunday", "10:00 - 22:00"]
];






















































/**
DO NOT TOUCH ANYTHING BELOW THIS LINE
===============================================================================================
DO NOT TOUCH ANYTHING BELOW THIS LINE
**/

const parseHours = () => {
	let dayTimeHtml = ``;
	hours.forEach(day => {
		dayTimeHtml += `
			<div class="col-5 footer_days_element">
				${day[0]}
			</div>
			<div class="col-7 footer_time_element">
				${day[1]}
			</div>
		`;
	})
	return dayTimeHtml;
}

document.getElementById("footer-day-time").innerHTML = parseHours();
