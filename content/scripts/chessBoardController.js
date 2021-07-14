var checker = 0;
var colorArray = [];


function getMoves(object) {
    reset();

    colorArray = object.getMove();

    changeColor(colorArray);
}

