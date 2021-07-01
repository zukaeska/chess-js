const Black = "black"; White = "white"; Green = "green"; Brown = "brown"; Yellow = "yellow";
const Diagonal = "diagonal"; Horizontal = "horizontal"; Both = "both"; king = "king"; queen = "queen"; bishop = "bishop"; rook = "rook";
const KnightMoves = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]]; 
const Id = "show";
var previousPiece;
var rowIndex;
var columnIndex;
function pawnType (color){
    if (color == White) return  moves = [1, 2, 2];else  return moves = [-1, -2, 7];
}

function getNumber(letter){
    return letter.charCodeAt(0) - 64;
}

function getName(color, name){
    return color + "_" + name;
}

function coordinate(letter, number){
    return letter + "_" + number;
}

function getLetter(number){
    return String.fromCharCode(number + 64);
}

 //cheks piece type
function pieceType (name){
    if (name == king){
        return Both
    };
    if (name == rook){
        return Horizontal
    };
    if (name == bishop){
        return Diagonal
    };
    if (name == queen){
        return Both
    };
}

 //changes background color
function changeColor (first, second, color) {
    if (document.getElementById(first + "_" + second) !== null)
    document.getElementById(first + "_" + second).style.backgroundColor = color ;
}

var brownCell = document.getElementsByClassName(Brown);
var whiteCell = document.getElementsByClassName(White);

function reset(){
    for ( var index = 0; index < 32; index++){
        brownCell[index].style.backgroundColor = Brown;
        whiteCell[index].style.backgroundColor = White;
    }
}
var insert = document.getElementById(Id);


function posibleMoves(name, type, columnCoordinate, rowCoordinate, color, letter){  
    reset();
    changeColor(getLetter(columnCoordinate), rowCoordinate, Yellow)
    insert.innerHTML = getName(color, name) + "<br />" + "posible moves" + "<br />";
    var place = letter + "_" + rowCoordinate;
    var startPiece = document.getElementById(place);
    var img = document.createElement("img");
    img.src = "./content/images/" + getName(color, name) + ".png";
    startPiece.append(img);
    for( columnIndex = columnCoordinate - 1, rowIndex = rowCoordinate - 1; columnIndex > 0 && rowIndex > 0; columnIndex--, rowIndex--){
        if(type == Horizontal) break;
        insert.innerHTML += coordinate(getLetter(columnIndex), rowIndex) + "<br />";
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if(name == king) break;
    }
    for( columnIndex = columnCoordinate + 1, rowIndex = rowCoordinate - 1; columnIndex < 9 && rowIndex > 0; columnIndex++, rowIndex--){
        if(type == Horizontal) break;
        insert.innerHTML += coordinate(getLetter(columnIndex), rowIndex) + "<br />";
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if(name == king) break;
    }
    for( columnIndex = columnCoordinate + 1, rowIndex = rowCoordinate + 1; columnIndex < 9 && rowIndex < 9; columnIndex++, rowIndex++){
        if(type == Horizontal) break;
        insert.innerHTML += coordinate(getLetter(columnIndex), rowIndex) + "<br />";
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if(name == king) break;
    }
    for( columnIndex = columnCoordinate - 1, rowIndex = rowCoordinate + 1; columnIndex > 0 && rowIndex < 9; columnIndex--, rowIndex++){
        if(type == Horizontal) break;
        insert.innerHTML += coordinate(getLetter(columnIndex), rowIndex) + "<br />";
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if(name == king) break;
    }
    for( columnIndex = columnCoordinate - 1 , rowIndex = rowCoordinate; columnIndex > 0; columnIndex--){
        if(type == Diagonal) break;
        insert.innerHTML += coordinate(getLetter(columnIndex), rowIndex) + "<br />";
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if(name == king) break;
    }
    for( columnIndex = columnCoordinate + 1 , rowIndex = rowCoordinate; columnIndex < 9; columnIndex++){
        if(type == Diagonal) break;
        insert.innerHTML += coordinate(getLetter(columnIndex), rowIndex) + "<br />";
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if(name == king) break;
    }
    for( columnIndex = columnCoordinate , rowIndex = rowCoordinate + 1; rowIndex < 9; rowIndex++){
        if(type == Diagonal) break;
        insert.innerHTML += coordinate(getLetter(columnIndex), rowIndex) + "<br />";
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if(name == king) break;
    }
    for( columnIndex = columnCoordinate , rowIndex = rowCoordinate - 1; rowIndex > 0; rowIndex--){
        if(type == Diagonal) break;
        insert.innerHTML += coordinate(getLetter(columnIndex), rowIndex) + "<br />";
        changeColor(getLetter(columnIndex), rowIndex, Green);
        if(name == king) break;
    }
}



class Piece {
    constructor(color, name){
        this.color = color;
        this.name = name;
    }
}
class Pawn extends Piece {
    constructor(color, name, letter, number){
        super(color, name);
        this.letter = letter;
        this.number = number;
    }
    getCoordinate(){
        reset();
        changeColor(this.letter, this.number, Yellow)
        var place = this.letter + "_" + this.number;
        var startPiece = document.getElementById(place);
        var img = document.createElement("img");
        img.src = "./content/images/" + getName(this.color, this.name) + ".png";
        startPiece.append(img);
        var numberX = getNumber(this.letter);
        var numberY = this.number;
        pawnType(this.color);
        numberY += moves[0];
        insert.innerHTML = getName(this.color, this.name) + "<br />" + "posible moves" + "<br />";
        insert.innerHTML += coordinate(this.letter, numberY) + "<br />";
        changeColor(this.letter, numberY, Green);
        numberY = this.number;
        if (this.number == moves[2]){
            numberY += moves[1];
            insert.innerHTML += this.letter + "_" + numberY + "<br />";
            changeColor(this.letter, numberY, Green);
        }
    }
}
class Knight extends Piece {
    constructor(color, name, letter, number){
        super(color, name);
        this.letter = letter;
        this.number = number;
    }
    getCoordinate(){
        reset();
        changeColor(this.letter, this.number, Yellow)
        var place = this.letter + "_" + this.number;
        var startPiece = document.getElementById(place);
        var img = document.createElement("img");
        img.src = "./content/images/" + getName(this.color, this.name) + ".png";
        startPiece.append(img);
        var numberX = getNumber(this.letter);
        var numberY = this.number;
        insert.innerHTML = getName(this.color, this.name) + "<br />" + "posible moves" + "<br />";
        for (var Index = 0; Index < 8; Index++){
            if (numberX + KnightMoves[Index][0] > 0 && numberX + KnightMoves[Index][0] < 9 && 
                numberY + KnightMoves[Index][1] > 0 && numberY + KnightMoves[Index][1] < 9){
                    numberX += KnightMoves[Index][0];
                    numberY += KnightMoves[Index][1];
                    insert.innerHTML += coordinate(getLetter(numberX), numberY) + "<br />";
                    changeColor(getLetter(numberX), numberY, Green);
                    numberX = getNumber(this.letter);
                    numberY = this.number;
                }
        }
    }
}
class Bishop extends Piece {
    constructor(color, name, letter, number){
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = pieceType(this.name); 
    }
    getCoordinate(){
        var numberX = getNumber(this.letter);
        var numberY = this.number;
        posibleMoves(this.name, this.type, numberX, numberY, this.color, this.letter);
    }
}
class King extends Piece {
    constructor(color, name, letter, number){
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = pieceType(this.name); 
    }
    getCoordinate(){
        var numberX = getNumber(this.letter);
        var numberY = this.number;
        posibleMoves(this.name, this.type, numberX, numberY, this.color, this.letter);
    }
}
class Queen extends Piece {
    constructor(color, name, letter, number){
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = pieceType(this.name); 
    }
    getCoordinate(){
        var numberX = getNumber(this.letter);
        var numberY = this.number;
        posibleMoves(this.name, this.type, numberX, numberY, this.color, this.letter);
    }
}
class Rook extends Piece {
    constructor(color, name, letter, number){
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = pieceType(this.name); 
    }
    getCoordinate(){
        var numberX = getNumber(this.letter);
        var numberY = this.number;
        posibleMoves(this.name, this.type, numberX, numberY, this.color, this.letter);
    }
}



const arr_1 = ["king", "queen", "rook", "bishop", "knight", "pawn"];
const arr_2 = [King, Queen, Rook, Bishop, Knight, Pawn];
$(function() {
    $("body").keydown(function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 13) {
            input();      
        }  
    });
    $("#enter").click(function(){
        input();
    });
});
function input(){       
    var value = $("#piece").val();
    var color = value.split(",")[0];
    var name = value.split(",")[1];
    var coordinate = value.split(",")[2];
    if (document.getElementById(previousPiece) !== null && document.getElementById(previousPiece).firstChild !== null){
        var piece = document.getElementById(previousPiece).firstChild;
        piece.remove();
    }
    previousPiece = coordinate;
    var letter = coordinate.substr(0,1);
    var number = parseInt(coordinate.substr(2,1));
    var pieceClass = new arr_2[arr_1.findIndex((element) => {return element == name;})](color, name, letter, number);
    pieceClass.getCoordinate();        
}