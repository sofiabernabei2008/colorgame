// VARIABLES

let colors;
let pickedColor;
let numSquare = 6;


// SELECTORES

let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");


// FUNCION PARA ELEGIR UN COLOR ALEATORIO DEL ARRAY

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


// FUNCION PARA GENERAR UN COLOR RGB ALEATORIO

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}


// FUNCION PARA GENERAR EL ARRAY DE COLORES

function generateRandomColors(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}


// FUNCION PARA CAMBIAR TODOS LOS CUADRADOS DE COLOR

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}


// FUNCION PARA REINICIAR EL JUEGO

function reset() {

    colors = generateRandomColors(numSquare);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    resetButton.textContent = "Nuevos Colores";

    message.textContent = "";

    h1.style.backgroundColor = "#4682b4";

    for (let i = 0; i < squares.length; i++) {

        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
}


// EVENT LISTENERS DE LOS CUADRADOS

function setupSquares() {

    for (let i = 0; i < squares.length; i++) {

        squares[i].addEventListener("click", function() {

            let clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {

                message.textContent = "¡Correcto!";

                resetButton.textContent = "Play Again?";

                h1.style.backgroundColor = pickedColor;

                changeColors(pickedColor);

            } else {

                this.style.backgroundColor = "#232323";

                message.textContent = "Intentalo nuevamente";

            }

        });

    }

}


// EVENT LISTENER DEL BOTON RESET

function setupResetButton() {

    resetButton.addEventListener("click", function() {
        reset();
    });

}


// EVENT LISTENERS DE EASY Y HARD

function setupModeButtons() {

    for (let i = 0; i < modeButtons.length; i++) {

        modeButtons[i].addEventListener("click", function() {

            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");

            this.classList.add("selected");

            numSquare = this.textContent === "Easy" ? 3 : 6;

            reset();

        });

    }

}


// FUNCION PRINCIPAL

function init() {

    setupSquares();

    setupResetButton();

    setupModeButtons();

    reset();

}


// INICIAR EL JUEGO

init();
