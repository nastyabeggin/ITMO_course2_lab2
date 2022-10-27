function getButtonsByColor(color, buttons) {
    let values = [];
    buttons.forEach(function (button) {
        if (getComputedStyle(button).backgroundColor === color) {
            values.push(button.value);
        }
    })
    return values;
}

function isXValid() {
    let validationInfo = '';
    let xButtons = document.querySelectorAll(".x-button");
    let orangeColor = "rgb(220, 88, 42)";
    let valid = false;
    let xValues = getButtonsByColor(orangeColor, xButtons);

    if (xValues.length !== 1) {
        if (xValues.length === 0) {
            validationInfo += "Выберите X"
        } else if (xValues.length > 1) {
            validationInfo += "Должно быть выбрано одно значение X"
        }
    } else {
        if (!(-2 <= parseFloat(xValues[0]) <= 2)) {
            validationInfo += "X не в выбранном диапазоне"
        }
    }
    if (validationInfo === "") {
        valid = true;
    } else{
        addMessageToValidationPanel(validationInfo);
    }

    return valid
}

function isYValid(){
    let yValue = document.getElementById("y-value").value;
    let validationInfo = '';
    let valid = false;

    if (!(yValue.trim() === "")) {
        if (/\d+/.test(yValue)) {
            if ((parseFloat(yValue) > -5.0) && (parseFloat(yValue) < 3.0)) {
                valid = true;
            } else validationInfo += "Y должен быть в интервале (-5...3)!";
        } else validationInfo += "Y должен быть числом!";
    } else validationInfo += "Введите Y";

    addMessageToValidationPanel(validationInfo);

    return valid;
}

function isRValid(){
    let rValues = document.querySelectorAll(".r-value:checked");
    let validationInfo = '';
    let valid = false;
    let rValue = null;

    if (rValues.length === 1){
        rValue = $('.r-value:checked').val();
        if ((rValue) <= 5)
        valid = true;
    } else if (rValues.length > 1){
        validationInfo = "Выберите только одно значение R"
    } else{
        validationInfo = "Выберите R"
    }

    addMessageToValidationPanel(validationInfo);

    return valid
}

function addMessageToValidationPanel(message){
    let validationInfoPanel = document.querySelector('.validationInfo');
    validationInfoPanel.innerHTML += message + "<br>";
    validationInfoPanel.classList.add("show");
}


function validateTextField() {
    $('.y-text').on('input', function () {
        $(this).val($(this).val().replace(/[^.0-9]/, ''));
    });
}