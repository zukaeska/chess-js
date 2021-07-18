var checker = 0;
var colorArray = [];
var turnIndex = 0;
var appendObject = [];
var rookObject = [];
var appendIndex = 0;
var rookIndex = 0;

//class objects
var pieces = {
    "pawn": Pawn,
    "knight": Knight,
    "rook": Rook,
    "queen": Queen,
    "king": King,
    "bishop": Bishop
}
var board = new Board(Eight, Eight);

function getMoves(object) {

    if(turn() != object.color){
        return;
     }

    reset();

    colorArray = object.getMove();

    changeColor(colorArray);
}


function turn(){
    
    if (turnIndex % 2 == 0) {return White;}
    else {return Black} 
}

function gameMove(startingColumnNumber, startingRowNumber, endingColumnNumber, endingRowNumber, type, buttonIndex) {
    var object = board.array[endingColumnNumber][endingRowNumber]; 
    board.array[endingColumnNumber][endingRowNumber] = board.array[startingColumnNumber][startingRowNumber];
    board.array[endingColumnNumber][endingRowNumber].letter = String.fromCharCode(endingColumnNumber + 64);
    board.array[endingColumnNumber][endingRowNumber].number = endingRowNumber;
    board.array[endingColumnNumber][endingRowNumber].countMove++;

    
    if (buttonIndex == 0) {
        console.log(2)
        board.array[endingColumnNumber][endingRowNumber].countMove -= 2;
    }

    if (type == Kill) {
        if (buttonIndex == 1) {
            appendObject[appendIndex] = object;
            appendIndex++;
            board.array[startingColumnNumber][startingRowNumber] = 0;
        } else {
            appendIndex--;
            board.array[startingColumnNumber][startingRowNumber] = appendObject[appendIndex];
        }
    } else {
        board.array[startingColumnNumber][startingRowNumber] = 0;
    }



    if (type == Castling) {
        
        if (endingColumnNumber == 2) {
            var rookId = String.fromCharCode(endingColumnNumber - 1 + 64) + Underscore + endingRowNumber;
            var endId = String.fromCharCode(endingColumnNumber + 1 + 64) + Underscore + endingRowNumber;
        } else {
            var rookId = String.fromCharCode(endingColumnNumber + 1 + 64) + Underscore + endingRowNumber;
            var endId = String.fromCharCode(endingColumnNumber - 1 + 64) + Underscore + endingRowNumber;
        }
        var rookPiece = document.getElementById(rookId).firstChild;
        var columnCoordinate = parseInt(rookId.split(Underscore)[0].charCodeAt(0)-64);
        var rowCoordinate = parseInt(rookId.split(Underscore)[1]);
        var endColumnCoordinate = parseInt(endId.split(Underscore)[0].charCodeAt(0)-64);
        var endRowCoordinate = parseInt(endId.split(Underscore)[1]);

        if (buttonIndex == 1) {
            board.array[endColumnCoordinate][endRowCoordinate] = board.array[columnCoordinate][rowCoordinate];
            board.array[endColumnCoordinate][endRowCoordinate].letter = endId.split(Underscore)[0];
            board.array[endColumnCoordinate][endRowCoordinate].number = parseInt(endId.split(Underscore)[1]);
            board.array[endColumnCoordinate][endRowCoordinate].countMove++;
            board.array[columnCoordinate][rowCoordinate] = 0;

            rookObject[rookIndex] = [endColumnCoordinate, endRowCoordinate, columnCoordinate, rowCoordinate, rookId, endId, rookPiece]
            rookIndex++;
            animate(rookId, endId, rookPiece);
        } else {
            rookIndex--;
            var startColumn = rookObject[rookIndex][0];
            var startRow = rookObject[rookIndex][1];
            var columnNumber = rookObject[rookIndex][2];
            var rowNumber = rookObject[rookIndex][3];
            board.array[columnNumber][rowNumber] = board.array[startColumn][startRow];
            board.array[columnNumber][rowNumber].letter = rookObject[rookIndex][4].split(Underscore)[0];
            board.array[columnNumber][rowNumber].number = parseInt(rookObject[rookIndex][4].split(Underscore)[1]);
            board.array[columnNumber][rowNumber].countMove--;
            board.array[startColumn][startRow] = 0;

            animate(rookObject[rookIndex][5], rookObject[rookIndex][4], rookObject[rookIndex][6]);
        }
    }

    console.log(board.array)
}