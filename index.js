function BMI() {
    let Weigth = Number(document.getElementById('weight').value);
    let height = Number(document.getElementById('Height').value);
    let bmi = Math.round(Weigth / Math.pow(height, 2));
    document.getElementById('bmi').innerHTML = `Your BMI is ${bmi}`;
}
