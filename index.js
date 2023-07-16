function BMI() {
    let Weigth = Number(document.getElementById('weight').value);
    let height = Number(document.getElementById('Height').value);
    let bmi = Math.round(Weigth / Math.pow(height, 2));
    document.getElementById('bmi').innerHTML = `Your BMI is ${bmi}`;
}
// Get the form element by its id
let form = document.getElementById("myform");

// Define a function to handle the form submission
function handleForm(event) {
  // Prevent the default action of refreshing the page
  event.preventDefault();
  // Do something with the form data here
  // For example, calculate the BMI and display it on the page
}

// Add an event listener to the form element
form.addEventListener("Get Your BMI", handleForm);
