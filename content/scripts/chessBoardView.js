var insert = document.getElementById(Id);
var brownCell = document.getElementsByClassName(Brown);
var whiteCell = document.getElementsByClassName(White);

function getName(color, name) {
    return color + Underscore + name;
}

function coordinate(first, second) {
    return first + Underscore + second;
}

function getLetter(index) {
    return String.fromCharCode(index + 64);
}

 //changes background color
function changeColor(colorArray) {

    for (var index = 0; index < colorArray.length; index++) {
        var first = String.fromCharCode(colorArray[index][0] + 64);
        var second = colorArray[index][1];
        var color = colorArray[index][2];
        if (document.getElementById(first + Underscore + second) !== null) {
            document.getElementById(first + Underscore + second).style.backgroundColor = color ;
        }   
    }
}


function reset() {
    for (var index = colorArray.length; index >= 0; index--) {
        colorArray.pop();
    }
    for ( var index = 0; index < board.width * board.height; index++) {
        if (brownCell[index] !== null && brownCell[index] !== undefined && whiteCell[index] !== null && whiteCell[index] !== undefined) {
            brownCell[index].style.backgroundColor = Brown;
            whiteCell[index].style.backgroundColor = White;
        }
    }
}

$(function () {
    $(TrayClass).click(function() {
        var id = this.id;
        if(document.getElementById(id).firstChild !== undefined && document.getElementById(id).firstChild !== null){
            var columnNumber = parseInt(id.split(Underscore)[0].charCodeAt(0) - 64);
            var rowNumber = parseInt(id.split(Underscore)[1]);
            var object = board.array[columnNumber][rowNumber]
            var type = object.type;
            var limit = object.limit;
            var killType = object.killType;
            // var killMove = object.getMove()[1];
            // var killArrayLength = object.getMove()[1].length;
            // var arrayLength = object.getMove()[0].length;
            // var possibleArray = object.getMove()[0];
            console.log(object.getMove())
            // possibleMoves(type, columnNumber, rowNumber, arrayLength, possibleArray, limit, killType, killMove, killArrayLength);
        }
        // freeMove(id);
        
    });
});


function freeMove(id){
    var firstNumber = parseInt(id.split(Underscore)[0].charCodeAt(0)-64);
    var secondNumber = parseInt(id.split(Underscore)[1]);
    for (x in colorArray) {
        if (firstNumber == colorArray[x][0] && secondNumber == colorArray[x][1] && colorArray[x][2] != Yellow) {
            console.log(colorArray[x][0], colorArray[x][1])
        }
      } 
}