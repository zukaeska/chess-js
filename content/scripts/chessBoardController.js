var checker = 0;
var colorArray = [];
var previousPiece;
var pieceColor;
var limiter;


//counts possible moves of pieces
function possibleMoves(type, columnCoordinate, rowCoordinate, specialArrayLength, arrayLength, arraySpecial, possibleArray, specialPosition, limit, killType, killMove, killArrayLength) { 

    checkColor(columnCoordinate, rowCoordinate);

    reset();

    colorArray.push([columnCoordinate, rowCoordinate, Yellow]);

    //breaks if input coordinate is out of bounds
    if (rowCoordinate > board.height || columnCoordinate > board.width) {
        return;
    }

    //for unusual type of pieces
    if (type == Unusual) {
        limiter = 0;
        for (var index = 0; index < arrayLength; index++) {
            if (columnCoordinate + possibleArray[index][0] <= board.height && rowCoordinate + possibleArray[index][1] <= board.width 
                && columnCoordinate + possibleArray[index][0] > 0 && rowCoordinate + possibleArray[index][1] > 0) {
                if (killType == Unusual) {
                    
                    for (var killIndex = 0; killIndex < killArrayLength; killIndex++) {
                        
                        if (!checkArray(columnCoordinate + killMove[killIndex][0], rowCoordinate + killMove[killIndex][1])) {
                            colorArray.push([columnCoordinate + killMove[killIndex][0], rowCoordinate + killMove[killIndex][1], Blue]);
                        }
                    }
                }    
                if (checkArray(columnCoordinate + possibleArray[index][0], rowCoordinate + possibleArray[index][1])) {

                    colorArray.push([columnCoordinate + possibleArray[index][0], rowCoordinate + possibleArray[index][1], Green]);
                }else {

                    if (killType == Direct){

                        if (checkEnemy(columnCoordinate + possibleArray[index][0], rowCoordinate + possibleArray[index][1])){

                            colorArray.push([columnCoordinate + possibleArray[index][0], rowCoordinate + possibleArray[index][1], Blue]);
                        }
                    }else {
                        limiter++;
                        break;
                    }
                }
            }
        }

        if (rowCoordinate == specialPosition && limiter == 0) {   
            for (var index = 0; index < specialArrayLength; index++) {
                if (columnCoordinate + arraySpecial[index][0] <= board.height && rowCoordinate + arraySpecial[index][1] <= board.width 
                    && columnCoordinate + arraySpecial[index][0] > 0 && rowCoordinate + arraySpecial[index][1] > 0) {
                        if (checkArray(columnCoordinate + arraySpecial[index][0], rowCoordinate + arraySpecial[index][1])) {

                        colorArray.push([columnCoordinate + arraySpecial[index][0], rowCoordinate + arraySpecial[index][1], Green]);
                    }else {

                        if (killType == Direct){
                            
                            if (checkEnemy(columnCoordinate + possibleArray[index][0], rowCoordinate + possibleArray[index][1])){

                                colorArray.push([columnCoordinate + possibleArray[index][0], rowCoordinate + possibleArray[index][1], Blue]);
                            }else {
                                break;
                            }
                        }
                    }
                }
            } 
        }
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

            while (columnIndex <= board.width && rowIndex <= board.height  && columnIndex > 0 && rowIndex > 0) {
                columnIndex += move[0];
                rowIndex += move[1];
                if (columnIndex > board.width || rowIndex > board.height || columnIndex < 1 || rowIndex < 1) {
                    break;
                }
                if (checkArray(columnIndex, rowIndex)) {
                    colorArray.push([columnIndex, rowIndex, Green]);
                }else {
                    if (checkEnemy(columnIndex, rowIndex)){
                        colorArray.push([columnIndex, rowIndex, Blue]);
                        break;
                    }else {
                        break;
                    }
                }
                checker++;

                if (checker == limit) {
                    checker = 0;
                    break;
                }
            }
            checker = 0;
        }
    }


    //Horizontal type pieces

    if (type != Diagonal) {

        for (var index = 0; index < 4; index++) {
            var move = HorizontalMoves[index];
            columnIndex = columnCoordinate;
            rowIndex = rowCoordinate;
            
            while (columnIndex <= board.width && rowIndex <= board.height  && columnIndex > 0 && rowIndex > 0) {
                columnIndex += move[0];
                rowIndex += move[1];
                if (columnIndex > board.width || rowIndex > board.height || columnIndex < 1 || rowIndex < 1) {
                    break;
                }
                if (checkArray(columnIndex, rowIndex)) {
                    colorArray.push([columnIndex, rowIndex, Green]);
                }else {
                    if (checkEnemy(columnIndex, rowIndex)){
                        colorArray.push([columnIndex, rowIndex, Blue]);
                        break;
                    }else {
                        break;
                    }
                }
                checker++;

                if (checker == limit) {
                    checker = 0;
                    break;
                }
            }
            checker = 0;
        }
    }
    //changes view
    changeColor(colorArray);
}


//checks array is empty or not
function checkArray(columnIndex, rowIndex) {
    if (board.array[columnIndex] !== undefined){
        if (board.array[columnIndex][rowIndex] === undefined || board.array[columnIndex][rowIndex] == 0) {
            return true;
        }
    }
}

//checks piece is enemy or not
function checkEnemy(columnIndex, rowIndex) { 
    if (board.array[columnIndex][rowIndex].color == pieceColor) {
        return false;
    }else {
        return true;
    }
}

//checks starting piece color
function checkColor (columnIndex, rowIndex) {
    return pieceColor = board.array[columnIndex][rowIndex].color;
}