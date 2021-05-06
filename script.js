const box = document.querySelector(".container");
const video = box.querySelector("video");
const skipButton = box.querySelectorAll("[data-skip]");
const ranges = box.querySelectorAll("[type = range]");
const progress = box.querySelector(".progress");
const progressBar = box.querySelector(".progress_filled");

let toggle = box.querySelector(".toggle");

function playVideo() {
    video.paused ? video.play() : video.pause();
    video.paused ? (toggle.textContent = "►") : (toggle.textContent = "❚❚");
}

function skip() {
    //TODO-this.dataset is the value of the data parameter which we have provided in html .we can provide any value in html in data attributes and then later access by usiong the data set in javscript

    video.currentTime += parseFloat(this.dataset.skip);
}
//? here we have used the name parameter to select that particular property we want to change of any item.here we named the slider as the property of video we want to change and later change that property only by providing that value as this.value  this is nice and easy way to change the property oif value.

function updateRange() {
    video[this.name] = this.value;
}

function progressBarUpdate() {
    const value = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${value}%`;
}
//TODO- similarly we can  change the timing of video using the progressbar. only we to change the video current time by adding a event listner and provide the value equal to ratio of  offsetX to total offsetWidth and then multiply that ratio with the total duration of video in this way video will work according to the progressbar movement.

toggle.addEventListener("click", playVideo);
video.addEventListener("click", playVideo);
video.addEventListener("timeupdate", progressBarUpdate);
skipButton.forEach((x) => x.addEventListener("click", skip));
ranges.forEach((x) => x.addEventListener("change", updateRange));
