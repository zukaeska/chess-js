var checker = 0;
var colorArray = [];
var previousPiece;

//counts possible moves of pieces
function possibleMoves(type, columnCoordinate, rowCoordinate, specialArrayLength, arrayLength, arraySpecial, possibleArray, specialPosition, limit){  
    reset();

    colorArray.push([columnCoordinate, rowCoordinate, Yellow]);

    //breaks if input coordinate is out of bounds
    if(rowCoordinate > board.height || columnCoordinate > board.width) {
        return;
    }

    //for unusual type of pieces
    if (type == Unusual) {
        
        for (var index = 0; index < arrayLength; index++) {
            if(columnCoordinate + possibleArray[index][0] < board.height && rowCoordinate + possibleArray[index][1] < board.height 
                && columnCoordinate + possibleArray[index][0] > 0 && rowCoordinate + possibleArray[index][1] > 0) {
                    colorArray.push([columnCoordinate + possibleArray[index][0], rowCoordinate + possibleArray[index][1], Green]);
                }
        }

        if (rowCoordinate == specialPosition){
            
            for (var index = 0; index < specialArrayLength; index++) {
                if(columnCoordinate + possibleArray[index][0] < board.height && rowCoordinate + possibleArray[index][1] < board.height 
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
    for (columnIndex = columnCoordinate - 1, rowIndex = rowCoordinate - 1; columnIndex > 0 && rowIndex > 0; columnIndex--, rowIndex--) {
        if (type == Horizontal) { 
            break;
        }

        checker++;
        colorArray.push([columnIndex, rowIndex, Green]);
        
        if(checker == limit) {
            checker = 0;
            break;
        }
    }

    for (columnIndex = columnCoordinate + 1, rowIndex = rowCoordinate - 1; columnIndex < board.width + 1 && rowIndex > 0; columnIndex++, rowIndex--) {
        if (type == Horizontal){ 
            break;
        }
        checker++;
        colorArray.push([columnIndex, rowIndex, Green]);

        if(checker == limit) {
            checker = 0;
            break;
        }     
    }

    for (columnIndex = columnCoordinate + 1, rowIndex = rowCoordinate + 1; columnIndex < board.width + 1 && rowIndex < board.height + 1; columnIndex++, rowIndex++) {
        if (type == Horizontal){ 
            break;
        }
        checker++;
        colorArray.push([columnIndex, rowIndex, Green]);
        
        if(checker == limit) {
            checker = 0;
            break;
        }
    }

    for (columnIndex = columnCoordinate - 1, rowIndex = rowCoordinate + 1; columnIndex > 0 && rowIndex < board.height + 1; columnIndex--, rowIndex++) {
        if (type == Horizontal){ 
            break;
        }
        checker++;
        colorArray.push([columnIndex, rowIndex, Green]);
        
        if(checker == limit) {
            checker = 0;
            break;
        }
    }

    //Horizontal type pieces
    for (columnIndex = columnCoordinate - 1 , rowIndex = rowCoordinate; columnIndex > 0; columnIndex--){ 
        if (type == Diagonal){ 
            break;
        }
        checker++;
        colorArray.push([columnIndex, rowIndex, Green]);  
        
        if(checker == limit) {
            checker = 0;
            break;
        }
    }

    for (columnIndex = columnCoordinate + 1 , rowIndex = rowCoordinate; columnIndex < board.width + 1; columnIndex++) {
        if (type == Diagonal){ 
            break;
        }
        checker++;
        colorArray.push([columnIndex, rowIndex, Green]);    
        
        if(checker == limit) {
            checker = 0;
            break;
        }
    }

    for (columnIndex = columnCoordinate , rowIndex = rowCoordinate + 1; rowIndex < board.height + 1; rowIndex++) {
        if (type == Diagonal){ 
            break;
        }
        checker++;
        colorArray.push([columnIndex, rowIndex, Green]);      
        
        if(checker == limit) {
            checker = 0;
            break;
        }
    }

    for (columnIndex = columnCoordinate , rowIndex = rowCoordinate - 1; rowIndex > 0; rowIndex--) {
        if (type == Diagonal){ 
            break;
        }
        checker++;
        colorArray.push([columnIndex, rowIndex, Green]);  
        
        if(checker == limit) {
            checker = 0;
            break;
        }
    }

    //gives moves
    moves(colorArray);

    //changes view
    changeColor(colorArray);
}

//sorts information and calls function possibleMoves
function input() {       
    var value = $(PieceId).val();
    var name = value.split(Comma)[1];
    var coordinate = value.split(Comma)[2];
    pieces[name].color = value.split(Comma)[0];
    pieces[name].name = name;
    pieces[name].letter = coordinate.substr(0,1);
    pieces[name].number = parseInt(coordinate.substr(2,1));
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
            input();      
        }  
    });
    $(Enter).click(function() {
        input();
    });
    $(EnterSize).click(function() {
        boardResize();
        input();
    });
});