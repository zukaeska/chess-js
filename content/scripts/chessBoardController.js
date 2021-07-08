var checker = 0;
var colorArray = [];
var previousPiece;

//counts possible moves of pieces
function possibleMoves(type, columnCoordinate, rowCoordinate, specialArrayLength, arrayLength, arraySpecial, possibleArray, specialPosition, limit) {  
    reset();

    colorArray.push([columnCoordinate, rowCoordinate, Yellow]);

    //breaks if input coordinate is out of bounds
    if (rowCoordinate > board.height || columnCoordinate > board.width) {
        return;
    }

    //for unusual type of pieces
    if (type == Unusual) {
        
        for (var index = 0; index < arrayLength; index++) {
            if (columnCoordinate + possibleArray[index][0] <= board.height && rowCoordinate + possibleArray[index][1] <= board.height 
                && columnCoordinate + possibleArray[index][0] > 0 && rowCoordinate + possibleArray[index][1] > 0) {
                    colorArray.push([columnCoordinate + possibleArray[index][0], rowCoordinate + possibleArray[index][1], Green]);
                }
        }

        if (rowCoordinate == specialPosition) {    
            for (var index = 0; index < specialArrayLength; index++) {
                if (columnCoordinate + possibleArray[index][0] < board.height && rowCoordinate + possibleArray[index][1] < board.height 
                    && columnCoordinate + possibleArray[index][0] > 0 && rowCoordinate + possibleArray[index][1] > 0) {
                        colorArray.push([columnCoordinate + arraySpecial[index][0], rowCoordinate + arraySpecial[index][1], Green]);
                    }
            } 
        }

        //gives moves
        moves(colorArray);

        //changes view
        changeColor(colorArray);
        return;
    }

    //for usual type of pieces

    //Diagonal type pieces

    if (type != Horizontal) {

        for (var index = 0; index < 4; index++) {
            var move = DiagonalMoves[index];
            columnIndex = columnCoordinate;
            rowIndex = rowCoordinate;

            while (columnIndex < board.width && rowIndex < board.height  && columnIndex > 1 && rowIndex > 1) {
                columnIndex += move[0];
                rowIndex += move[1];
                colorArray.push([columnIndex, rowIndex, Green]);
                checker++;

                if (checker == limit) {
                    checker = 0;
                    break;
                }
            }
        }
    }


    //Horizontal type pieces

    if (type != Diagonal) {

        for (var index = 0; index < 4; index++) {
            var move = HorizontalMoves[index];
            columnIndex = columnCoordinate;
            rowIndex = rowCoordinate;
            
            while (columnIndex < board.width && rowIndex < board.height  && columnIndex > 1 && rowIndex > 1) {
                columnIndex += move[0];
                rowIndex += move[1];
                colorArray.push([columnIndex, rowIndex, Green]);
                checker++;

                if (checker == limit) {
                    checker = 0;
                    break;
                }
            }
        }
    }


    //gives moves
    moves(colorArray);

    //changes view
    changeColor(colorArray);
}


