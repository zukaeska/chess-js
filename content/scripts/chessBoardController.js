var checker = 0;
var colorArray = [];
var turnIndex = 0;
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
     if (object.name == KingName) {
        console.log(object.kingDanger())
     }

    colorArray = object.getMove();

    changeColor(colorArray);
}


function turn(){
    if (turnIndex % 2 == 0) {return White;}
    else {return Black} 
}