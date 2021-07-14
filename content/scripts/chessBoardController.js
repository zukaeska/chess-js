var checker = 0;
var colorArray = [];
var turnIndex = 0;

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