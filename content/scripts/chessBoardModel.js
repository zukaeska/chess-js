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


class SamePieces extends Piece {

    constructor(color, name) {
        super(color, name)
    }

    Diagonal() {
        var possibleMoves = [];
        var killMove = [];
        var columnCoordinate = this.letter.charCodeAt(0) - 64;
        var rowCoordinate = this.number;

        checkColor(columnCoordinate, rowCoordinate);

        for (var index = 0; index < 4; index++) {
            var move = DiagonalMoves[index];
            var columnIndex = columnCoordinate;
            var rowIndex = rowCoordinate;
            while (columnIndex <= board.width && rowIndex <= board.height  && columnIndex > 0 && rowIndex > 0) {
                columnIndex += move[0];
                rowIndex += move[1];

                if (columnIndex > board.width || rowIndex > board.height || columnIndex < 1 || rowIndex < 1) {
                    break;
                } 

                if (checkArray(columnIndex, rowIndex)) {
                    possibleMoves.push([columnIndex, rowIndex, Green]);
                }else {
                    if (checkEnemy(columnIndex, rowIndex)){
                        possibleMoves.push([columnIndex, rowIndex, Blue]);
                        break;
                    }else {
                        break;
                    }
                }
                checker++;

                if (checker == this.limit) {
                    checker = 0;
                    break;
                }
            }
            checker = 0;
        }
        return [
            possibleMoves,
            killMove = possibleMoves
        ]
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

    getMove() {
        if (this.color == White) {
            this.specialPosition = 2;

            if (this.specialPosition == this.number) {
                return [
                    this.possibleMoves = [[0, 1], [0, 2]],
                    this.killMove = [[-1, 1], [1, 1]]
                ]
            } else {
                return [
                    this.possibleMoves = [[0, 1]],
                    this.killMove = [[-1, 1], [1, 1]]
                ]
            }
        } else {
            this.specialPosition = board.height - 1;

            if (this.specialPosition == this.number) {
                return [
                    this.possibleMoves = [[0, -1], [0, -2]],
                    this.killMove = [[-1, -1], [1, -1]]
                ]
            } else {
                return [
                    this.possibleMoves = [[0, -1]],
                    this.killMove = [[-1, -1], [1, -1]]
                ]
            }
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

    getMove() {
        return [
            this.possibleMoves = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]],
            this.killMove = this.possibleMoves
        ]
    }
}


class Bishop extends SamePieces {

    constructor(color, name, letter, number) {
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = Diagonal;
        this.limit = Infinity;
        this.killType = Direct;
    }
    
    getMove() {
        return this.Diagonal();
    }
}


class King extends SamePieces {

    constructor(color, name, letter, number) {
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = Both;
        this.limit = 1;
        this.killType = Direct;
    }

    getMove() {
        return [
            this.possibleMoves = [0, 0],
            this.specialMove = [0, 0],
            this.specialPosition = 0
        ]
    }
}


class Queen extends SamePieces {

    constructor(color, name, letter, number) {
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = Both;
        this.limit = Infinity;
        this.killType = Direct;
    }

    getMove() {
        return this.Diagonal();
    }
}


class Rook extends SamePieces {

    constructor(color, name, letter, number) {
        super(color, name);
        this.letter = letter;
        this.number = number;
        this.type = Horizontal;
        this.limit = Infinity;
        this.killType = Direct;
    }

    getMove() {
        return [
            this.possibleMoves = [0, 0],
            this.specialMove = [0, 0],
            this.specialPosition = 0
        ]
    }
}


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

var pieceColor;
