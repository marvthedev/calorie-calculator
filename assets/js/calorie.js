//Declare DOM variables
const gender = document.getElementsByName('gender');
const calcButton = document.querySelector('.calc-btn');
const heightFeet = document.getElementById("feet");
const heightInches = document.getElementById("inches");
const height = document.getElementsByName('height');
const heightInput = document.getElementsByClassName('height-input');
const heightLabel = document.getElementsByClassName('height-label');
const cmInput = document.getElementById('cm');
const weightLabel = document.getElementsByClassName('weight-label');
const weightKg = document.getElementById('kg');
const lbsInput = document.getElementById('lbs');
const weight = document.getElementsByName('weight');
const ageInput = document.getElementById('age-input');
const bmrInput = document.getElementById('bmr-input');
const goalSelect = document.getElementById('goal-select');

//Height Global Variables
let heightCM;
let feetToInches;
let totalInches;
let inchesToCm;
let toNumb;

//Weight Global Variables
let poundsToKilos;
let weightKilos;
const age = ageInput.value;
let calcBMR;

//Additional calories to be added to total calories

// Load event listeners
loadEventListeners();

//Convert height if it's not in cm
function feetInchToCm() {
    // Convert feet input to inches and convert to number type
    feetToInches = heightFeet.value * 12;

    // Combine feet input and inches input together to get total inches
    totalInches = Number(feetToInches) + Number(heightInches.value);
    inchesToCm = totalInches * 2.54;
}

//Convert height to kg
function lbsToKg() {
    poundsToKilos = lbsInput.value / 2.205;
}

// Display height input boxes based on radio selection
function selectHeight() {
    if (height[0].checked) {
        heightLabel[0].style.display = '';
        heightLabel[1].style.display = '';
        heightLabel[2].style.display = 'none';
        heightCM = inchesToCm;
    } else if (height[1].checked) {
        //Hide feet and inches input and display CM inputs
        heightLabel[0].style.display = 'none';
        heightLabel[1].style.display = 'none';
        heightLabel[2].style.display = 'block';
        heightCM = cmInput.value;
    }
}

// Display weight input boxes based on radio selection
function selectWeight() {
    if (weight[0].checked) {
        //Hide Kilos pounds input and show kilos input 
        weightLabel[0].style.display = '';
        weightLabel[1].style.display = 'none';
        weightKilos = weightKg.value;
    } else if (weight[1].checked) {
        //Hide Kilos input and display Pounds input
        weightLabel[0].style.display = 'none';
        weightLabel[1].style.display = 'block';
        weightKilos = poundsToKilos;
    }
}

// Function to load event listeners
function loadEventListeners() {
    gender[0].addEventListener('click', calcByGender);
    gender[1].addEventListener('click', calcByGender);
    height[0].addEventListener('click', selectHeight);
    height[1].addEventListener('click', selectHeight);
    weight[0].addEventListener('click', selectWeight);
    weight[1].addEventListener('click', selectWeight);
    calcButton.addEventListener('click', calculate);
    goalSelect.addEventListener('change', goalChanger);
}

//Formula to calculate BMR based on gender
function calcByGender(e) {
    feetInchToCm();
    lbsToKg();
    selectHeight();
    selectWeight();
    if (gender[0].checked) {
        calcBMR = (9.99 * weightKilos) + (6.25 * heightCM) - (4.92 * age) - 161;
    } else if (gender[1].checked) {
        calcBMR = (9.99 * weightKilos) + (6.25 * heightCM) - (4.92 * age) + 5;
    }
}

function goalChanger() {
    if (goalSelect.value == 'Maintain Weight') {
        console.log("Your goal is to maintain weight");
    } else if (goalSelect.value == 'Lose Weight') {
        console.log("Your goal is to lose weight")
    } else if (goalSelect.value == "Gain Weight") {
        console.log('Your goal is to Gain Weight');
    }
}

//Display calculated BMR when button is clicked
function calculate() {
    calcByGender();
    bmrInput.value = Math.round(calcBMR);
    console.log("Your weight in kilos is " + weightKilos);
    console.log("Your weight in pounds is " + lbsInput.value)
    console.log("Your height in cm " + heightCM);
    console.log("Your height in inches " + totalInches);
    console.log("Your age is " + ageInput.value);
    console.log("Your BMR is " + Math.round(calcBMR));
}