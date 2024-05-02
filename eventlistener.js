import {nextStep, previousStep} from "./stepnavigation.js";

//next button

const nextButton = document.querySelector("#nextButton");
console.log(nextButton);


nextButton.addEventListener("click", nextStep);

export default nextButton;

//previous button

const previousButton = document.querySelector("#previousButton");
console.log(previousButton);

previousButton.addEventListener("click", previousStep);


export {nextButton, previousButton};