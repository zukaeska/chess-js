var insert = document.getElementById(Id);
var brownCell = document.getElementsByClassName(Brown);
var whiteCell = document.getElementsByClassName(White);


 //changes background color
function changeColor(colorArray) {

    for (var index = 0; index < colorArray.length; index++) {
        var first = String.fromCharCode(colorArray[index][0] + 64);
        var second = colorArray[index][1];
        var color = colorArray[index][2];
        if (document.getElementById(first + Underscore + second) !== null && color != None) {
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

        if (board.array[columnNumber][rowNumber] != 0) {
            var object = board.array[columnNumber][rowNumber];
            
            getMoves(object);
        } else {

            reset();  
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
            if (firstNumber == colorArray[index][0] && secondNumber == colorArray[index][1] 
                && colorArray[index][2] != Yellow && colorArray[index][2] != None) {

                if (colorArray[index][3] == Castling) {
                    if (colorArray[index][0] == 2) {
                        var rookId = String.fromCharCode(colorArray[index][0] - 1 + 64) + Underscore + colorArray[index][1];
                        var endId = String.fromCharCode(colorArray[index][0] + 1 + 64) + Underscore + colorArray[index][1];
                    } else {
                        var rookId = String.fromCharCode(colorArray[index][0] + 1 + 64) + Underscore + colorArray[index][1];
                        var endId = String.fromCharCode(colorArray[index][0] - 1 + 64) + Underscore + colorArray[index][1];
                    }
                    var rookPiece = document.getElementById(rookId).firstChild;
                    var columnCoordinate = parseInt(rookId.split(Underscore)[0].charCodeAt(0)-64);
                    var rowCoordinate = parseInt(rookId.split(Underscore)[1]);
                    var endColumnCoordinate = parseInt(endId.split(Underscore)[0].charCodeAt(0)-64);
                    var endRowCoordinate = parseInt(endId.split(Underscore)[1]);


                    board.array[endColumnCoordinate][endRowCoordinate] = board.array[columnCoordinate][rowCoordinate];
                    board.array[endColumnCoordinate][endRowCoordinate].letter = endId.split(Underscore)[0];
                    board.array[endColumnCoordinate][endRowCoordinate].number = parseInt(endId.split(Underscore)[1]);
                    board.array[endColumnCoordinate][endRowCoordinate].countMove++;
                    board.array[columnCoordinate][rowCoordinate] = 0;
                    console.log(board.array[endColumnCoordinate][endRowCoordinate],board.array[columnCoordinate][rowCoordinate])
                    animate(rookId, endId, rookPiece);
                }

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

function animate(starting, ending, piece, type, appendPiece) {
    var endPlace = document.getElementById(ending);
    var startCoordinate = $("#" + starting).offset();
    var endCoordinate = $("#" + ending).offset();
    var lengthTop = endCoordinate.top - startCoordinate.top;
    var lengthLeft = endCoordinate.left - startCoordinate.left
     $(piece).css("position","relative")
     .animate({top:'+=' + lengthTop + 'px',left:'+=' + lengthLeft + 'px'},100,function(){ 
        endPlace.append(piece);
        $(piece).css("position","static");
        $(piece).css({top: 0, left: 0});
        if (type == Kill) {
            $("#" + starting).append(appendPiece);
        }
    });
}


$(document).ready(function(){
    var object = JSON.parse(games);
    var page = window.location.href.split("=")[2];
    var name = page;
    var mainObject = object[name];
    var moveArray = mainObject.move;
    var index = 0;
    var arrayIndex = 0;
    var diedPiece = [];
    var totalMoves;

    $("#next").click(function(){
        totalMoves = parseInt(mainObject.total_move) - 1;
        buttonIndex = 1;
        if (index <= totalMoves) {
            var startingId = moveArray[index].starting_position;
            var endingId = moveArray[index].ending_position;
            var piece = document.getElementById(startingId).firstChild;
            var endingPiece = document.getElementById(endingId).firstChild;
            var startingColumnNumber = parseInt(moveArray[index].starting_position.split(Underscore)[0].charCodeAt(0) - 64);
            var startingRowNumber = parseInt(moveArray[index].starting_position.split(Underscore)[1]);
            var endingColumnNumber = parseInt(moveArray[index].ending_position.split(Underscore)[0].charCodeAt(0) - 64);
            var endingRowNumber = parseInt(moveArray[index].ending_position.split(Underscore)[1]);
            var type = moveArray[index].move_type;

            gameMove(startingColumnNumber, startingRowNumber, endingColumnNumber, endingRowNumber, type, buttonIndex);
    
            animate(startingId, endingId, piece);
    
            if (endingPiece !== undefined && endingPiece !== null) {
                diedPiece[arrayIndex] = endingPiece;
                $(endingPiece).remove();
                arrayIndex++;
            }
    
            index++;  
            turnIndex++;
        }

    }); 
    $("#back").click(function(){
        buttonIndex = 0;
        if (index >= 1) {
            index--;
            var startingId = moveArray[index].starting_position;
            var endingId = moveArray[index].ending_position;
            var endingPiece = document.getElementById(endingId).firstChild;
            var startingColumnNumber = parseInt(moveArray[index].starting_position.split(Underscore)[0].charCodeAt(0) - 64);
            var startingRowNumber = parseInt(moveArray[index].starting_position.split(Underscore)[1]);
            var endingColumnNumber = parseInt(moveArray[index].ending_position.split(Underscore)[0].charCodeAt(0) - 64);
            var endingRowNumber = parseInt(moveArray[index].ending_position.split(Underscore)[1]);
            var type = moveArray[index].move_type;
    
            if (type == Kill) {
                arrayIndex--;
                var appendPiece = diedPiece[arrayIndex];
            }
    
            gameMove(endingColumnNumber, endingRowNumber, startingColumnNumber, startingRowNumber, type, buttonIndex);
    
            animate(endingId, startingId, endingPiece, type, appendPiece);

            turnIndex++;
        }

    }); 
});


$(function () {
    $(TdTag).css({
        "width" : "25px",
        "height" : "25px",
    });
    $(Img).css({
        "width" : "20px",
        "height" : "20px",
    });
    $().css({

    });
    $(Player1).css({
        "width" : "60px",
        "height" : "30px",
        "background-color" : Brown,
        "position" : "absolute",
        "margin-top" : "-80px",
        "margin-left" : "470px"
    });
    $(Player2).css({
        "width" : "60px",
        "height" : "30px",
        "background-color" : White,
        "position" : "absolute",
        "margin-top" : "350px",
        "margin-left" : "470px"
    });
    $(Page).css({
        "width" : "500px",
        "height" : "5000px"
    })
});