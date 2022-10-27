document.addEventListener('DOMContentLoaded', init, false);

function init() {
    var buttons = document.querySelectorAll(".x-button");

    document.addEventListener("click", function (evt) {
        if (evt.target.classList.contains("x-button")) {
            buttons.forEach(function (button) {
                button.classList.remove("active");
            });
            evt.target.classList.add("active");
        }
    })
}
