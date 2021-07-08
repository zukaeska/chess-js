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


function reset(){
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

//inserts images
function insertImage(first, second, color, name, previousPiece) {

    if (document.getElementById(previousPiece) !== null && document.getElementById(previousPiece).firstChild !== null) {
        var piece = document.getElementById(previousPiece).firstChild;
        piece.remove();
    }

    var place = first + Underscore + second;
    var startPiece = document.getElementById(place);
    var img = document.createElement(Img);
    img.src = Location + getName(color, name) + Png;
    startPiece.append(img);

}

//gives on screen moves
function moves(colorArray) {
    insert.innerHTML = PossibleMove + Br;
    for (var index = 1; index < colorArray.length; index++) {
        
        insert.innerHTML += coordinate(getLetter(colorArray[index][0]), colorArray[index][1]) + Br;
    }
}

function boardResize() {
    var size = $(BoardId).val();
    var width = parseInt(size.split(DoublePoint)[0]);
    var height = parseInt(size.split(DoublePoint)[1]);
    board.width = width;
    board.height = height;
    document.getElementById(DivId).firstChild.remove();
    createTable();
}


