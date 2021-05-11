function redirectToPage(target) {
	console.log(target);
	location.href = `${target}.html`;
}

function playAudio(audioID) {
	var music = new Audio(`./audio/${audioID}.mp3`);
	music.play();
}

function startTimer(duration, display) {
	var timer = duration,
		minutes,
		seconds;
	setInterval(function () {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);

		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;

		display.textContent = minutes + ":" + seconds;

		if (--timer < 0) {
			timer = duration;
			redirectToPage("index");
		}
	}, 1000);
}

window.onload = function () {
	if (document.getElementById("count_down")) {
		var countDownTime = 5, // 5 seconds
			display = document.querySelector("#count_down");
		startTimer(countDownTime, display);
	}
};
