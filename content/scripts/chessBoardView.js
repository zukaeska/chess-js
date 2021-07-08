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

//inserts images
function insertImage(first, second, color, name, previousPiece) {

    if (document.getElementById(previousPiece) !== null && document.getElementById(previousPiece).firstChild !== null) {
        var piece = document.getElementById(previousPiece).firstChild;
        piece.remove();
    }

    var place = first + Underscore + second;
    var startPiece = document.getElementById(place);
    if(startPiece === null || startPiece === undefined){
        return;
    }
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
    if(document.getElementById(DivId).firstChild !== null){
        document.getElementById(DivId).firstChild.remove();
    }
    var size = $(BoardId).val();
    var width = parseInt(size.split(DoublePoint)[0]);
    var height = parseInt(size.split(DoublePoint)[1]);
    board.width = width;
    board.height = height;
    createTable();
}


//sorts information and calls function possibleMoves
function input() {       
    var value = $(PieceId).val();
    var name = value.split(Comma)[1];
    var coordinate = value.split(Comma)[2];
    pieces[name].color = value.split(Comma)[0];
    pieces[name].name = name;
    pieces[name].letter = coordinate.substr(0,1);
    pieces[name].number = parseInt(coordinate.split(Underscore)[1]);
    var color = pieces[name].color
    var letter = pieces[name].letter;
    var number = pieces[name].number;
    var type = pieces[name].type;
    var specialArrayLength = pieces[name].special()[1].length;
    var arrayLength = pieces[name].special()[0].length;
    var arraySpecial = pieces[name].special()[1];
    var possibleArray = pieces[name].special()[0];
    var columnNumber = pieces[name].letter.charCodeAt(0) - 64;
    var specialPosition = pieces[name].special()[2];
    var limit = pieces[name].limit;

    insertImage(letter, number, color, name, previousPiece);
    possibleMoves(type, columnNumber, number, specialArrayLength, arrayLength, arraySpecial, possibleArray, specialPosition, limit);

    previousPiece = coordinate;
} 

//input events
$(function() {
    $(Body).keydown(function(key) {
        var keyCode = key.keyCode || key.which;
        if (keyCode == 13) {
            boardResize();
            input();      
        }  
    });
    

    $(EnterSize).click(function() {
        boardResize();
        input();
    });
});