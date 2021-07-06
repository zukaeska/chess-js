var insert = document.getElementById(Id);
function pawnType (color){
    if (color == White){
        return  moves = [1, 2, 2];
    }else  {
        return moves = [-1, -2, 7];
    }
}

function getNumber(letter){
    return letter.charCodeAt(0) - 64;
}

function getName(color, name){
    return color + Underscore + name;
}

function coordinate(letter, number){
    return letter + Underscore + number;
}

function getLetter(number){
    return String.fromCharCode(number + 64);
}

 //cheks piece type
function pieceType (name){
    if (name == pieceTypeKing){
        return Both
    };
    if (name == pieceTypeRook){
        return Horizontal
    };
    if (name == pieceTypeBishop){
        return Diagonal
    };
    if (name == pieceTypeQueen){
        return Both
    };
}

 //changes background color
function changeColor (first, second, color) {
    if (document.getElementById(first + Underscore + second) !== null)
    document.getElementById(first + Underscore + second).style.backgroundColor = color ;
}

var brownCell = document.getElementsByClassName(Brown);
var whiteCell = document.getElementsByClassName(White);

function reset(){
    for ( var index = 0; index < 32; index++){
        brownCell[index].style.backgroundColor = Brown;
        whiteCell[index].style.backgroundColor = White;
    }
}



function posibleMoves(type, columnCoordinate, rowCoordinate, specialArrayLength, arrayLength, arraySpecial, possibleArray, specialPosition){  
    reset();

    changeColor(getLetter(columnCoordinate), rowCoordinate, Yellow)

    if (type == Unusual) {

        for (var index = 0; index < arrayLength; index++) {
            changeColor(getLetter(columnIndex + possibleArray[index][0]), rowIndex + possibleArray[index][1], Green);
            console.log(columnIndex + possibleArray[index][0])
        }

       
        return ; 
    }

    for (columnIndex = columnCoordinate - 1, rowIndex = rowCoordinate - 1; columnIndex > 0 && rowIndex > 0; columnIndex--, rowIndex--){
        if (type == Horizontal){ 
            break;
        }
        
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if (name == pieceTypeKing){ 
            break;
        }
    }

    for (columnIndex = columnCoordinate + 1, rowIndex = rowCoordinate - 1; columnIndex < board.width + 1 && rowIndex > 0; columnIndex++, rowIndex--){
        if (type == Horizontal){ 
            break;
        }
        
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if (name == pieceTypeKing){ 
            break;
        }
    }

    for (columnIndex = columnCoordinate + 1, rowIndex = rowCoordinate + 1; columnIndex < board.width + 1 && rowIndex < board.height + 1; columnIndex++, rowIndex++){
        if (type == Horizontal){ 
            break;
        }
        
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if (name == pieceTypeKing){ 
            break;
        }
    }

    for (columnIndex = columnCoordinate - 1, rowIndex = rowCoordinate + 1; columnIndex > 0 && rowIndex < board.height + 1; columnIndex--, rowIndex++){
        if (type == Horizontal){ 
            break;
        }
        
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if (name == pieceTypeKing){ 
            break;
        }
    }

    for (columnIndex = columnCoordinate - 1 , rowIndex = rowCoordinate; columnIndex > 0; columnIndex--){
        if (type == Diagonal){ 
            break;
        }
        
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if (name == pieceTypeKing){ 
            break;
        }
    }

    for (columnIndex = columnCoordinate + 1 , rowIndex = rowCoordinate; columnIndex < board.height + 1; columnIndex++){
        if (type == Diagonal){ 
            break;
        }
        
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if (name == pieceTypeKing){ 
            break;
        }
    }

    for (columnIndex = columnCoordinate , rowIndex = rowCoordinate + 1; rowIndex < board.height + 1; rowIndex++){
        if (type == Diagonal){ 
            break;
        }
        
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if (name == pieceTypeKing){ 
            break;
        }
    }

    for (columnIndex = columnCoordinate , rowIndex = rowCoordinate - 1; rowIndex > 0; rowIndex--){
        if (type == Diagonal){ 
            break;
        }
        
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if (name == pieceTypeKing){ 
            break;
        }
    }
}

function input() {       
    var value = $(PieceId).val();
    var name = value.split(Comma)[1];
    var coordinate = value.split(Comma)[2];
    if (document.getElementById(previousPiece) !== null && document.getElementById(previousPiece).firstChild !== null) {
        var piece = document.getElementById(previousPiece).firstChild;
        piece.remove();
    }
    previousPiece = coordinate;
    pieces[name].color = value.split(Comma)[0];
    pieces[name].name = name;
    pieces[name].letter = coordinate.substr(0,1);
    pieces[name].number = parseInt(coordinate.substr(2,1));
    var letter = pieces[name].letter;
    var number = pieces[name].number;
    var type = pieces[name].type;
    var specialArrayLength = pieces[name].specialMove.length
    var arrayLength = pieces[name].possibleMoves.length;
    var arraySpecial = pieces[name].specialMove;
    var possibleArray = pieces[name].possibleMoves;
    var columnNumber = pieces[name].letter.charCodeAt(0) - 64;
    var specialPosition = pieces[name].specialPosition;
    posibleMoves(type, columnNumber, number, letter, specialArrayLength, arrayLength, arraySpecial, possibleArray, specialPosition); 
    console.log(specialArrayLength, arrayLength, arraySpecial, possibleArray, specialPosition)   
} 


$(function() {
    $(Body).keydown(function(key) {
        var keyCode = key.keyCode || key.which;
        if (keyCode == 13) {
            input();      
        }  
    });
    $(Enter).click(function() {
        input();
    });
});