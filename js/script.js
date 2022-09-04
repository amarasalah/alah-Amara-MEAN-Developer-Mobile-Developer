const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ourSkillsSection = document.querySelector(".our-skills");
const progressEl = document.querySelectorAll(".progress span");
let countDate = new Date("september 11 2022").getTime();



let counter = setInterval(()=>{
    let dateNow = new Date().getTime();
    let diffDat =  countDate - dateNow;
    let days = Math.floor(diffDat / (1000 * 60 * 60 * 24));

    let hours =  (diffDat % (1000*60*60*24));

    let minutes =  (diffDat % (1000 * 60 * 60));

    let seconds =  (diffDat % (1000 * 60));
    daysEl.innerHTML = days;

    hoursEl.innerHTML = Math.floor(hours / 1000 / 60/ 60);

    minutesEl.innerHTML = Math.floor(minutes / 1000 / 60);

    secondsEl.innerHTML = Math.floor(seconds / 1000);

    if (diffDat < 0) {
        clearInterval(counter);
    }
},1000)

window.onscroll = function() {
    if (window.scrollY >= ourSkillsSection.offsetTop){
        progressEl.forEach((e) => {
            e.style.width = e.dataset.width
        });
    }
};
