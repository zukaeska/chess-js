class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.array = [[]];
    }
}
var board = new Board(8, 8);

class Piece {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
}


class Pawn extends Piece {
    constructor(color, name, letter, number) {
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = Unusual;
        this.limit = Infinity; 
    }
    special() {
        if (this.color == White) {
            return [
                    this.possibleMoves = [[0, 1]],
                    this.specialMove = [[0, 2]],
                    this.specialPosition = 2
                ]
        }else {
            return [
                    this.possibleMoves = [[0, -1]],
                    this.specialMove = [[0, -2]],
                    this.specialPosition = board.height - 1
                ]
        }
    }
}


class Knight extends Piece {
    constructor(color, name, letter, number) {
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = Unusual;
        this.limit = Infinity; 
        
    }
    special() {
        return [
            this.possibleMoves = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]],
            this.specialMove = [0, 0],
            this.specialPosition = 0
        ]
    }
}


class Bishop extends Piece {
    constructor(color, name, letter, number) {
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = Diagonal;
        this.limit = Infinity; 
        this.possibleMoves = [0, 0];
        this.specialMove = [0, 0];
        this.specialPosition = 0;
    }
    special() {
        return [
            this.possibleMoves = [0, 0],
            this.specialMove = [0, 0],
            this.specialPosition = 0
        ]
    }
}


class King extends Piece {
    constructor(color, name, letter, number) {
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = Both;
        this.limit = 1;  
    }
    special() {
        return [
            this.possibleMoves = [0, 0],
            this.specialMove = [0, 0],
            this.specialPosition = 0
        ]
    }
}
class Queen extends Piece {
    constructor(color, name, letter, number) {
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = Both;
        this.limit = Infinity;  
    }
    special() {
        return [
            this.possibleMoves = [0, 0],
            this.specialMove = [0, 0],
            this.specialPosition = 0
        ]
    }
}


class Rook extends Piece {
    constructor(color, name, letter, number) {
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = Horizontal;
        this.limit = Infinity; 
    }
    special() {
        return [
            this.possibleMoves = [0, 0],
            this.specialMove = [0, 0],
            this.specialPosition = 0
        ]
    }
}


var pawn = new Pawn();
var knight = new Knight();
var rook = new Rook();
var queen = new Queen();
var king = new King();
var bishop = new Bishop();
var pieces = {pawn, knight, rook, queen, king, bishop}




