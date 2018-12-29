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

console.log(weightLabel[1]);


//Height Global Variables
let heightCM;
let feetToInches;
let totalInches;
let inchesToCm;
let toNumb;

//Weight Global Variables
let poundsToKilos;
let weightKilos;
let age = 30;
let calcBMR;

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
    poundsToKilos = lbsInput.value / 2.2;
}

// Display height input boxes based on radio selection
function selectHeight() {
    if(height[0].checked) {
        heightLabel[0].style.display = '';
        heightLabel[1].style.display = '';
        heightLabel[2].style.display = 'none';
        heightCM = Math.round(inchesToCm);
    } else if(height[1].checked) {
        //Hide feet and inches input and display CM inputs
        heightLabel[0].style.display = 'none';
        heightLabel[1].style.display = 'none';
        heightLabel[2].style.display = 'block';
        heightCM = Math.round(cmInput.value);
    }
}

// Display weight input boxes based on radio selection
function selectWeight() {
    if(weight[0].checked) {
        //Hide Kilos pounds input and show kilos input 
        weightLabel[0].style.display = '';
        weightLabel[1].style.display = 'none';
        weightKilos = Math.round(weightKg.value);
    } else if(weight[1].checked) {
        //Hide Kilos input and display Pounds input
        weightLabel[0].style.display = 'none';
        weightLabel[1].style.display = 'block';
        weightKilos = Math.round(poundsToKilos);
    }
}

// Function to load event listeners
function loadEventListeners() {
    gender[0].addEventListener('click' , calcByGender);
    gender[1].addEventListener('click' , calcByGender);
    height[0].addEventListener('click' , selectHeight);
    height[1].addEventListener('click' , selectHeight);
    weight[0].addEventListener('click' , selectWeight);
    weight[1].addEventListener('click' , selectWeight);
    calcButton.addEventListener('click', calculate);
}

//Formula to calculate BMR based on gender
function calcByGender(e) {
    feetInchToCm();
    lbsToKg();
    selectHeight();
    selectWeight();
    if(gender[0].checked) {
        calcBMR = (9.99 * weightKilos) + (6.25 * heightCM) - (4.92 * age) - 161;
    } else if(gender[1].checked) {
        calcBMR = (9.99 * weightKilos) + (6.25 * heightCM) - (4.92 * age) + 5;
    } else if(gender[0].checked != true && gender[1].checked != true) {
        alert('Please select gender!');
    }
}


//Display calculated BMR when button is clicked
function calculate() {
    calcByGender();
    console.log("Feet to inches " + feetToInches);
    console.log("Total inches " + totalInches);
    console.log("Inches to CMs " + inchesToCm);
    console.log("Height in CMs " + heightCM);
    console.log("Your weight in kilos is " + weightKilos);
}