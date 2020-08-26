var allSquares = $(".square")
var playsFirst = document.querySelector("#whoPlays")
var newBoard = document.querySelector("#newBoard")


function randomSet() {

    var randVar = 3;
    var lower = 1;
    var blue = 0;
    var red = 0;
    var yellow = 0;
    var black = Math.floor((Math.random() * 25))

    for (var i = 0; i < 25; i++) {
        if (i == black) {
            allSquares[i].style.backgroundImage = "url('images/black.png')";
        } else {
            var rand = Math.floor((Math.random() * randVar) + lower)
            if (rand == 1 && blue <= 9) {
                if (blue < 9) {
                    if (red == 9 && blue == 8) {
                        i--;
                    }
                    else {
                        blue++;
                        allSquares[i].style.backgroundImage = "url('images/blue.png')";
                        if (blue == 9) {
                            lower++;
                        }
                    }
                } else {
                    i--;
                }
            } else if (rand == 2 && red <= 9) {
                if (red < 9) {
                    if (blue == 9 && red == 8) {
                        i--
                    } else {
                        red++;
                        allSquares[i].style.backgroundImage = "url('images/red.png')";
                    }
                } else {
                    i--;
                }
            } else if (rand == 3 && yellow < 7) {
                allSquares[i].style.backgroundImage = "url('images/yellow.png')";
                yellow++;
            } else {
                i--;
            }
        }
    }
    if (blue == 9) {
        playsFirst.style.backgroundColor = "blue";
    } else {
        playsFirst.style.backgroundColor = "red";
    }
}

newBoard.addEventListener('click', randomSet)
randomSet()