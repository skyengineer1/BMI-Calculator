function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");
    
    if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        result.textContent = "Please enter valid weight and height values.";
        return;
    }
    
    const bmi = (weight / (height * height)).toFixed(2);
    let category = "";
    
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    
    result.textContent = `Your BMI is ${bmi} (${category}).`;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("calculate").addEventListener("click", calculateBMI);
});
