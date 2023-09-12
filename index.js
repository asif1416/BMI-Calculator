document.getElementById('calculate').addEventListener('click', function(){
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    if(height === "" || weight ===""){
        alert("Please enter Height and Weight!");
        return;
    }

    height = height / 100; 

    let BMI = (weight/ (height*height))
    BMI = BMI.toFixed(2);

    document.getElementById('result').innerHTML = BMI;

    let status = "";

  if (BMI < 18.5) {
    status = "Underweight! Eat some food 🍖";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Healthy! Keep it up 🤙";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "Overweight! Start working out ";
  }
  if (BMI >= 30) {
    status = "Obese! Go to gym right now!";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `Comment: you are <span id="comment">${status}</span>`;
});
