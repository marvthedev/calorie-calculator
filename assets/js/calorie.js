//Declare Global Variables
const gender = document.getElementsByName('gender');
const calcButton = document.querySelector('.calc-btn');
const heightFeet = document.getElementById("feet");
const heightInches = document.getElementById("inches");
const height = document.getElementsByName('height');
const heightInput = document.getElementsByClassName('height-input');
const heightLabel = document.getElementsByClassName('height-label');
const cmInput = document.getElementById('cm');

//Height Global Variables
let heightCM;
let feetToInches;
let totalInches;
let inchesToCm;
let toNumb;

let weightKilos;
let age = 30;
let calcBMR;

// Load event listeners
loadEventListeners();

//Convert weight if it's not in kg
function convertToKg() {

}

//Convert height if it's not in cm
function feetInchToCm() {
    // Convert feet input to inches and convert to number type
    feetToInches = heightFeet.value * 12;
    
    // Combine feet input and inches input together to get total inches
    totalInches = Number(feetToInches) + Number(heightInches.value);
    inchesToCm = totalInches * 2.54;
    //Places the converted inches to the cm input box
}

// Display height input boxes based on radio selection
function selectHeight() {
    if(height[0].checked) {
        heightLabel[0].style.display = '';
        heightLabel[1].style.display = '';
        heightLabel[2].style.display = 'none';
        heightCM = inchesToCm;
    } else if(height[1].checked) {
        //Hide feet and inches input and display CM inputs
        heightLabel[0].style.display = 'none';
        heightLabel[1].style.display = 'none';
        heightLabel[2].style.display = 'block';
        heightCM = cmInput.value;
    }
}

// Function to load event listeners
function loadEventListeners() {
    gender[0].addEventListener('click' , calcByGender);
    gender[1].addEventListener('click' , calcByGender);
    height[0].addEventListener('click' , selectHeight);
    height[1].addEventListener('click' , selectHeight);
    calcButton.addEventListener('click', calculate);
}

//Formula to calculate BMR based on gender
function calcByGender(e) {
    feetInchToCm()
    selectHeight();
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
}