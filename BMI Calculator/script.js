function bmicalculate() {
    const weight = parseInt(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    bmi_height = height * height;
    const bmi = weight / bmi_height;
    if (bmi <= 0 || bmi >= 100) {
        errormsg();
    }
    else {
        statusbar(bmi.toFixed(1), weight, height);
    }
}
function errormsg() {
    const errormsg = document.getElementById("message");
    errormsg.textContent = 'Input is very high value';
    errormsg.classList.add('show');
    setTimeout(() => {
        errormsg.classList.add('fadeout')
    }, 2000);
    setTimeout(() => {
        errormsg.textContent = ''
        errormsg.classList.remove('show', 'fadeout')
    }, 3500);
}
function statusbar(bmi, weight, height) {
    const statbar = document.getElementById('status_bar');
    const weighttext = document.getElementById('weight-p');
    const heighttext = document.getElementById('height-p');
    const result = document.getElementById('result');
    const bmitype = document.getElementById('bmi_type');
    weighttext.textContent = "Weight: " + weight;
    heighttext.textContent = "Height: " + height;
    result.textContent = "BMI: " + bmi;
    bmitype.textContent = btype(bmi)
    statbar.classList.add('show');
}
function return_status() {
    const statbar = document.getElementById('status_bar');
    statbar.classList.remove('show');
}

function btype(b) {
    b = parseFloat(b);
    switch (true) {
        case (b < 18.5):
            return "Skinny";
        case (b >= 18.5 && b < 24.9):
            return "Normal";
        case (b >= 25 && b < 29.9):
            return "Overweight";
        case (b >= 30):
            return "Obese"
        default:
            return "Unknown";
    }
}