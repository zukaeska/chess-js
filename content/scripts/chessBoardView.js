var insert = document.getElementById(Id);
var brownCell = document.getElementsByClassName(Brown);
var whiteCell = document.getElementsByClassName(White);


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

        freeMove(this.id);

        var id = this.id;
        var columnNumber = parseInt(id.split(Underscore)[0].charCodeAt(0) - 64);
        var rowNumber = parseInt(id.split(Underscore)[1]);

        if(board.array[columnNumber][rowNumber] != 0){
            var object = board.array[columnNumber][rowNumber];

            getMoves(object);
        }   
    });
});


function freeMove(id){
    if (colorArray[0] !== undefined){
        var firstNumber = parseInt(id.split(Underscore)[0].charCodeAt(0)-64);
        var secondNumber = parseInt(id.split(Underscore)[1]);
        var startingId = String.fromCharCode(colorArray[0][0] + 64) + Underscore + colorArray[0][1];
        var endingId = String.fromCharCode(firstNumber + 64) + Underscore + secondNumber;
        var piece = document.getElementById(startingId).firstChild;
        var endingPiece = document.getElementById(endingId).firstChild;

        for (var index in colorArray) {

            if (firstNumber == colorArray[index][0] && secondNumber == colorArray[index][1] && colorArray[index][2] != Yellow) {
    
                board.array[firstNumber][secondNumber] = board.array[colorArray[0][0]][colorArray[0][1]];
                board.array[firstNumber][secondNumber].letter = id.split(Underscore)[0];
                board.array[firstNumber][secondNumber].number = parseInt(id.split(Underscore)[1]);
                board.array[firstNumber][secondNumber].countMove++;
                board.array[colorArray[0][0]][colorArray[0][1]] = 0;
                animate(startingId, endingId, piece);
    
                if (colorArray[index][2] == Blue) {
                    endingPiece.remove();
                }
    
                reset();

                turnIndex++;
            }
        } 
    }
}

function animate(starting, ending, piece) {
    var endPlace = document.getElementById(ending);
    var startCoordinate = $("#" + starting).offset();
    var endCoordinate = $("#" + ending).offset();
    var lengthTop = endCoordinate.top - startCoordinate.top;
    var lengthLeft = endCoordinate.left - startCoordinate.left
     $(piece).css("position","relative")
     .animate({top:'+=' + lengthTop + 'px',left:'+=' + lengthLeft + 'px'},200,function(){ 
         endPlace.append(piece);
        $(piece).css("position","static");
        $(piece).css({top: 0, left: 0});
    });
}

$(function () {
    $(Player1).css({
        "width" : "150px",
        "height" : "150px",
        "background-color" : Brown,
        "position" : "absolute",
        "margin-top" : "340px",
        "margin-left" : "100px"
    });
    $(Player2).css({
        "width" : "150px",
        "height" : "150px",
        "background-color" : White,
        "position" : "absolute",
        "margin-top" : "350px",
        "margin-left" : "1250px"
    });
    $(Page).css({
        "width" : "1500px",
        "height" : "1500px"
    })
});