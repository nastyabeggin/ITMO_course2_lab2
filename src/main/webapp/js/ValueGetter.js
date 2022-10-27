function getX() {
    let xButtons = document.querySelectorAll(".x-button");
    let orangeColor = "rgb(220, 88, 42)";
    let xValues = getButtonsByColor(orangeColor, xButtons);
    return parseFloat(xValues[0])
}

function getY(){
    return parseFloat(document.getElementById("y-value").value)
}

function getR(){
    return $('.r-value:checked').val()
}