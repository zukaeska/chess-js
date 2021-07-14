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

    moves() {
        var begin = 0;
        var end = 8;
        var possibleMoves = [];
        var columnCoordinate = this.letter.charCodeAt(0) - 64;
        var rowCoordinate = this.number;
        possibleMoves.push([columnCoordinate, rowCoordinate, Yellow]);

        if (this.type == Diagonal) {
            begin = 4;
            end = 8;
        } else {

            if (this.type == Horizontal) {
                begin = 0;
                end = 4;
            }
        }

        checkColor(columnCoordinate, rowCoordinate);

        for (var index = begin; index < end; index++) {
            var move = Moves[index];
            var columnIndex = columnCoordinate;
            var rowIndex = rowCoordinate;
            while (columnIndex <= board.width && rowIndex <= board.height && columnIndex > 0 && rowIndex > 0) {
                columnIndex += move[0];
                rowIndex += move[1];

                if (columnIndex > board.width || rowIndex > board.height || columnIndex < 1 || rowIndex < 1) {
                    break;
                }

                if (checkArray(columnIndex, rowIndex)) {
                    possibleMoves.push([columnIndex, rowIndex, Green]);
                } else {
                    if (checkEnemy(columnIndex, rowIndex)) {
                        possibleMoves.push([columnIndex, rowIndex, Blue]);
                        break;
                    } else {
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
        return possibleMoves;
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
        var columnCoordinate = this.letter.charCodeAt(0) - 64;
        var rowCoordinate = this.number;
        var moves = [];
        var killMove = [];
        moves.push([columnCoordinate, rowCoordinate, Yellow]);

        checkColor(columnCoordinate, rowCoordinate)

        if (this.color == White) {
            this.specialPosition = 2;
            killMove = [[-1, 1], [1, 1]];

            if (this.specialPosition == this.number) {
                this.possibleMoves = [[0, 1], [0, 2]];
            } else {
                this.possibleMoves = [[0, 1]];
            }
        } else {
            this.specialPosition = board.height - 1;
            killMove = [[-1, -1], [1, -1]]

            if (this.specialPosition == this.number) {
                this.possibleMoves = [[0, -1], [0, -2]];
            } else {
                this.possibleMoves = [[0, -1]];
            }
        }

        for (var index = 0; index < this.possibleMoves.length; index++) {

            if (checkArray(columnCoordinate + this.possibleMoves[index][0], rowCoordinate + this.possibleMoves[index][1])) {
                moves.push([columnCoordinate + this.possibleMoves[index][0], rowCoordinate + this.possibleMoves[index][1], Green]);
            } else {
                break;
            }
        }

        for (var index = 0; index < killMove.length; index++) {

            if (!checkArray(columnCoordinate + killMove[index][0], rowCoordinate + killMove[index][1])) {
                if (checkEnemy(columnCoordinate + killMove[index][0], rowCoordinate + killMove[index][1])) {
                    moves.push([columnCoordinate + killMove[index][0], rowCoordinate + killMove[index][1], Blue]);
                }
            }
        }

        return moves;
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
        var columnCoordinate = this.letter.charCodeAt(0) - 64;
        var rowCoordinate = this.number;
        var moves = [];
        var possibleMoves = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
        moves.push([columnCoordinate, rowCoordinate, Yellow]);

        checkColor(columnCoordinate, rowCoordinate);

        for (var index = 0; index < possibleMoves.length; index++) {
            if (checkArray(columnCoordinate + possibleMoves[index][0], rowCoordinate + possibleMoves[index][1])) {
                moves.push([columnCoordinate + possibleMoves[index][0], rowCoordinate + possibleMoves[index][1], Green]);
            } else {
                if (checkEnemy(columnCoordinate + possibleMoves[index][0], rowCoordinate + possibleMoves[index][1])) {
                    moves.push([columnCoordinate + possibleMoves[index][0], rowCoordinate + possibleMoves[index][1], Blue])
                }
            }
        }

        return moves;
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
        return this.moves();
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
        return this.moves();
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
        return this.moves();
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
        return this.moves();
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

    if (board.array[columnIndex] !== undefined) {

        if (board.array[columnIndex][rowIndex] == 0) {
            return true;
        }
    }
}

//checks piece is enemy or not
function checkEnemy(columnIndex, rowIndex) {

    if (board.array[columnIndex] !== undefined && board.array[columnIndex][rowIndex] !== undefined) {

        if (board.array[columnIndex][rowIndex].color == pieceColor) {
            return false;
        } else {
            return true;
        }
    }
}

//checks starting piece color
function checkColor(columnIndex, rowIndex) {
    return pieceColor = board.array[columnIndex][rowIndex].color;
}

var pieceColor;
