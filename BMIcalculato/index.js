let calculateBMI = ()=>{
    let height = document.getElementById("Height").value;
    let weight = document.getElementById("Weight").value;

    if (height=== "" || weight=== "" ){
        alert("Fields cannot be empty");
    }
    let heightInMeters = height/100;
    const bmi = weight/ height*height;

    let result = document.getElementById("result");
    result.innerHTML = "Your BMI is " + bmi.toFixed(2) ;


}

