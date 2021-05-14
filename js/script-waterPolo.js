// Loading all TimeTable buttons.
const allButton = document.querySelector(".all-button");
const swimmingButton = document.querySelector(".swimming-button");
const basicsButton = document.querySelector(".basics-button");
const landTrainingButton = document.querySelector(".landTraining-button");
const gymButton = document.querySelector(".gym-button");
const practiceMatchButton = document.querySelector(".practiceMatch-button");

// Loading all TimeTable data.
const swimming = document.querySelectorAll(".swimming");
const basics = document.querySelectorAll(".basics");
const landTraining = document.querySelectorAll(".land-training");
const gym = document.querySelectorAll(".gym");
const practiceMatch = document.querySelectorAll(".practice-match");

/**
 * This Function removes all TimeTable data from the TimeTable.
 */
function removeAll() {
    allButton.classList.remove("practice-active");
    swimmingButton.classList.remove("practice-active");
    basicsButton.classList.remove("practice-active");
    landTrainingButton.classList.remove("practice-active");
    gymButton.classList.remove("practice-active");
    practiceMatchButton.classList.remove("practice-active");


    for (let i = 0; i < swimming.length; i++) {
        swimming[i].classList.remove("timetable-active");
    }
    for (let i = 0; i < basics.length; i++) {
        basics[i].classList.remove("timetable-active");
    }
    for (let i = 0; i < landTraining.length; i++) {
        //console.log(landTraining[i]);
        landTraining[i].classList.remove("timetable-active");
    }
    for (let i = 0; i < gym.length; i++) {
        gym[i].classList.remove("timetable-active");
    }
    for (let i = 0; i < practiceMatch.length; i++) {
        practiceMatch[i].classList.remove("timetable-active");
    }
}

/**
 * Making All Time Table date Visible.
 */
allButton.addEventListener("click", function () {
    removeAll();
    allButton.classList.add("practice-active");
    for (let i = 0; i < swimming.length; i++) {
        //console.log(swimming[i]);
        swimming[i].classList.add("timetable-active");
    }
    for (let i = 0; i < basics.length; i++) {
        basics[i].classList.add("timetable-active");
    }
    for (let i = 0; i < landTraining.length; i++) {
        landTraining[i].classList.add("timetable-active");
    }
    for (let i = 0; i < gym.length; i++) {
        gym[i].classList.add("timetable-active");
    }
    for (let i = 0; i < practiceMatch.length; i++) {
        practiceMatch[i].classList.add("timetable-active");
    }
});

/**
 * Making Only Swimming schedules visible.
 */
swimmingButton.addEventListener("click", function () {
    removeAll();
    swimmingButton.classList.add("practice-active");
    for (let i = 0; i < swimming.length; i++) {
        swimming[i].classList.add("timetable-active");
    }
});

/**
 * Making Only Land-Training schedules visible.
 */
landTrainingButton.addEventListener("click", function () {
    removeAll();
    landTrainingButton.classList.add("practice-active");
    for (let i = 0; i < landTraining.length; i++) {
        landTraining[i].classList.add("timetable-active");
    }
});

/**
 * Making Only Basics schedules visible.
 */
basicsButton.addEventListener("click", function () {
    removeAll();
    basicsButton.classList.add("practice-active");
    for (let i = 0; i < basics.length; i++) {
        basics[i].classList.add("timetable-active");
    }
});

/**
 * Making Only Gym schedules visible.
 */
gymButton.addEventListener("click", function () {
    removeAll();
    gymButton.classList.add("practice-active");
    for (let i = 0; i < gym.length; i++) {
        gym[i].classList.add("timetable-active");
    }
});

/**
 * Making Only Practice-Match schedules visible.
 */
practiceMatchButton.addEventListener("click", function () {
    removeAll();
    practiceMatchButton.classList.add("practice-active");
    for (let i = 0; i < practiceMatch.length; i++) {
        practiceMatch[i].classList.add("timetable-active");
    }
});