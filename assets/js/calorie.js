//Declare Global Variables
const gender = document.getElementsByName('gender');
const calcButton = document.querySelector('.calc-btn');
const heightFeet = document.getElementById("feet");
const heightInches = document.getElementById("inches");
const height = document.getElementsByName('height');
const heightInput = document.getElementsByClassName('height-input');
const heightLabel = document.getElementsByClassName('height-label');


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
function convertToCm() {
    // Convert feet input to inches and convert to number type
    feetToInches = heightFeet.value * 12;
    
    // Combine feet input and inches input together to get total inches
    totalInches = Number(feetToInches) + Number(heightInches.value);
    inchesToCm = totalInches * 2.54;
    heightCM = inchesToCm;
}

// Display height input boxes based on radio selection
function selectHeight() {
    if(height[0].checked) {
        heightInput[0].removeChild(heightLabel[2]);
        heightLabel[0].style.display = '';
        heightLabel[1].style.display = '';
    } else if(height[1].checked) {
        //Hide feet and inches input
        heightLabel[0].style.display = 'none';
        heightLabel[1].style.display = 'none';
        //Remove feet and inches input
        console.log("Height input status: " + heightInput);
        //Create label for new input
        const newLabel = document.createElement('label');
        newLabel.className = 'height-label';
        newLabel.id = 'height-label-cm';
        newLabel.innerHTML = 'CMs '
        //Create new input for CMs
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.id = 'cm';
        // append new input to the label
        newLabel.appendChild(newInput);
        // append label and input box to form
        heightInput[0].appendChild(newLabel);
        console.log(heightInput);
        //replace child 
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
    convertToCm();
    if(gender[0].checked) {
        calcBMR = (9.99 * weightKilos) + (6.25 * heightCM) - (4.92 * age) - 161;
    } else if(gender[1].checked) {
        calcBMR = (9.99 * weightKilos) + (6.25 * heightCM) - (4.92 * age) + 5;
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