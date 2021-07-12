class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.array = new Array(this.width);
    }
    createArray() {
        for (var index = 1; index <= this.width; index++) {
            this.array[index] = new Array(this.height);
          }
    }
}


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
        this.killType = Unusual; 
    }
    special() {
        if (this.color == White) {
            return [
                    this.possibleMoves = [[0, 1]],
                    this.specialMove = [[0, 2]],
                    this.specialPosition = 2,
                    this.killMove = [[-1, 1], [1, 1]]
                ]
        }else {
            return [
                    this.possibleMoves = [[0, -1]],
                    this.specialMove = [[0, -2]],
                    this.specialPosition = board.height - 1,
                    this.killMove = [[-1, -1], [1, -1]]
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
        this.killType = Direct;  
        
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
        this.killType = Direct; 
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
        this.killType = Direct; 
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
        this.killType = Direct;  
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
        this.killType = Direct;  
    }
    special() {
        return [
            this.possibleMoves = [0, 0],
            this.specialMove = [0, 0],
            this.specialPosition = 0
        ]
    }
}

//class objects
var pieces = {
    "pawn" : Pawn, 
    "knight" : Knight, 
    "rook" : Rook, 
    "queen" : Queen, 
    "king" : King, 
    "bishop" : Bishop
}
var board = new Board(Eight, Eight);


