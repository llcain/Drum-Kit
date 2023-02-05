var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[0].addEventListener("click", function () {
        alert("I got clicked");

        // What to do when click detected
    });
}