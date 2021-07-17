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

    constructor(color, name, array) {
        this.color = color;
        this.name = name;
        this.array = array;
    }

    checkArray(columnIndex, rowIndex) {

        if (this.array[columnIndex] !== undefined) {
    
            if (this.array[columnIndex][rowIndex] == 0) {
                return true;
            }
        }
    }

    checkEnemy(columnIndex, rowIndex) {

        if (this.array[columnIndex] !== undefined && this.array[columnIndex][rowIndex] !== undefined) {
    
            if (this.array[columnIndex][rowIndex].color == this.color) {
                return false;
            } else {
                return true;
            }
        }
    }
}


class SamePieces extends Piece {

    constructor(color, name, array) {
        super(color, name, array)
    }

    move() {
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

                if (this.checkArray(columnIndex, rowIndex)) {
                    possibleMoves.push([columnIndex, rowIndex, Green, Danger]);
                } else {
                    if (this.checkEnemy(columnIndex, rowIndex)) {
                        possibleMoves.push([columnIndex, rowIndex, Blue]);
                        break;
                    } else {
                        possibleMoves.push([columnIndex, rowIndex, None, Danger])
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

        this.possibleMoves = possibleMoves;
    }
}


class Pawn extends Piece {

    constructor(color, name, array, letter, number) {
        super(color, name, array);
        this.letter = letter;
        this.number = number;
        this.type = Unusual;
        this.limit = Infinity;
        this.killType = Unusual;
        this.countMove = 0;
        this.possibleMoves = [];
    }

    getMove() {
        return this.moves();
    }

    moves() {
        var columnCoordinate = this.letter.charCodeAt(0) - 64;
        var rowCoordinate = this.number;
        var moves = [];
        var killMove = [];
        moves.push([columnCoordinate, rowCoordinate, Yellow]);

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

            if (this.checkArray(columnCoordinate + this.possibleMoves[index][0], rowCoordinate + this.possibleMoves[index][1])) {
                moves.push([columnCoordinate + this.possibleMoves[index][0], rowCoordinate + this.possibleMoves[index][1], Green]);
            } else {
                break;
            }
        }

        for (var index = 0; index < killMove.length; index++) {

            if (!this.checkArray(columnCoordinate + killMove[index][0], rowCoordinate + killMove[index][1])) {
                if (this.checkEnemy(columnCoordinate + killMove[index][0], rowCoordinate + killMove[index][1])) {
                    moves.push([columnCoordinate + killMove[index][0], rowCoordinate + killMove[index][1], Blue]);
                }
            }
            moves.push([columnCoordinate + killMove[index][0], rowCoordinate + killMove[index][1], None, Danger]);
        }

        return moves;
    }
}


class Knight extends Piece {

    constructor(color, name, array, letter, number) {
        super(color, name, array);
        this.letter = letter;
        this.number = number;
        this.type = Unusual;
        this.limit = Infinity;
        this.killType = Direct;
        this.countMove = 0;
        this.possibleMoves = [];

    }

    getMove() {
        return this.moves();
    }

    moves() {
        var columnCoordinate = this.letter.charCodeAt(0) - 64;
        var rowCoordinate = this.number;
        var moves = [];
        var possibleMoves = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
        moves.push([columnCoordinate, rowCoordinate, Yellow]);

        for (var index = 0; index < possibleMoves.length; index++) {
            if (this.checkArray(columnCoordinate + possibleMoves[index][0], rowCoordinate + possibleMoves[index][1])) {
                moves.push([columnCoordinate + possibleMoves[index][0], rowCoordinate + possibleMoves[index][1], Green, Danger]);
            } else {
                if (this.checkEnemy(columnCoordinate + possibleMoves[index][0], rowCoordinate + possibleMoves[index][1])) {
                    moves.push([columnCoordinate + possibleMoves[index][0], rowCoordinate + possibleMoves[index][1], Blue])
                } else moves.push([columnCoordinate + possibleMoves[index][0], rowCoordinate + possibleMoves[index][1], None, Danger])
            }
        }

        return moves;
    }
}


class Bishop extends SamePieces {

    constructor(color, name, array, letter, number) {
        super(color, name, array);
        this.letter = letter;
        this.number = number;
        this.type = Diagonal;
        this.limit = Infinity;
        this.killType = Direct;
        this.countMove = 0;
        this.possibleMoves = [];
    }

    moves() {
        this.move();
        return this.possibleMoves;;
    }

    getMove() {
        this.move();
        return this.possibleMoves;
    }
}


class King extends SamePieces {

    constructor(color, name, array, letter, number) {
        super(color, name, array);
        this.letter = letter;
        this.number = number;
        this.type = Both;
        this.limit = 1;
        this.killType = Direct;
        this.countMove = 0;
        this.possibleMoves = [];
    }

    moves() {
        this.move();
        return this.possibleMoves;
    }

    getMove() {
        this.move();
        if (this.countMove == 0) {
            this.possibleRook();
        }
        this.kingDanger();

        return this.possibleMoves;
    }

    possibleRook() {
        var columnCoordinate = this.letter.charCodeAt(0) - 64;
        var rowCoordinate = this.number;
        var checker = -1;
        for (var index = 0; index < Two; index++) {
            var columnIndex = columnCoordinate;
            var rowIndex = rowCoordinate; 
            var move = rookMoves[index];
            columnIndex += move[0];

            while (columnIndex < board.width && columnIndex > 1 && this.checkArray(columnIndex, rowIndex)) {
                columnIndex += move[0];
            }

            if ((columnIndex == 1 || columnIndex == 8) && !this.checkArray(columnIndex, rowIndex)
                && this.array[columnIndex][rowIndex].countMove == 0) {
                this.possibleMoves.push([columnIndex + 2 * checker, rowIndex, None, Castling]);
                this.possibleMoves.push([columnIndex + checker, rowIndex, Green, Castling]);
            }
            checker = 1;
        }
    }
    
    kingDanger() {
        for (var columnIndex = 1; columnIndex < 9; columnIndex++) {

            for (var rowIndex = 1; rowIndex < 9; rowIndex++) {

                if (this.array[columnIndex][rowIndex] != 0 && this.array[columnIndex][rowIndex].color != this.color) {
                    var pieceArray = this.array[columnIndex][rowIndex].moves();

                    for (var index in pieceArray) {

                        for (var moveIndex in this.possibleMoves) {
                            if (pieceArray[index][0] == this.possibleMoves[moveIndex][0] && pieceArray[index][1] == this.possibleMoves[moveIndex][1]
                                && pieceArray[index][3] == Danger) {

                                if (this.possibleMoves[moveIndex][3] == Castling) {
                                    var counter = parseInt(moveIndex);
                                    counter += 1;

                                    if (this.possibleMoves[counter] !== undefined) {
                                        this.possibleMoves[counter][2] = None;
                                    }
                                }
                                this.possibleMoves[moveIndex][2] = None;
                            }
                        }
                    }
                }
            }
        }
        console.log(this.possibleMoves)
    }
}


class Queen extends SamePieces {

    constructor(color, name, array, letter, number) {
        super(color, name, array);
        this.letter = letter;
        this.number = number;
        this.type = Both;
        this.limit = Infinity;
        this.killType = Direct;
        this.countMove = 0;
        this.possibleMoves = [];
    }

    moves() {
        this.move();
        return this.possibleMoves;
    }

    getMove() {
        this.move();
        return this.possibleMoves;
    }
}


class Rook extends SamePieces {

    constructor(color, name, array, letter, number) {
        super(color, name, array); 
        this.letter = letter;
        this.number = number;
        this.type = Horizontal;
        this.limit = Infinity;
        this.killType = Direct;
        this.countMove = 0;
        this.possibleMoves = [];
    }

    moves() {
        this.move();
        return this.possibleMoves;
    }

    getMove() {
        this.move();
        return this.possibleMoves;
    }
}
