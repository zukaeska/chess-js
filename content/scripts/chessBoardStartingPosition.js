var number;
var mainObject = JSON.parse(startingPosition);

function positioning(object){
    var quantity = object.positions.quantity;
    for (number = 0; number < quantity; number++) {
        var pieceName = object.positions.pieces[number].name;
        var color = pieceName.split(Underscore)[0];
        var name = pieceName.split(Underscore)[1];
        var piecePosition = object.positions.pieces[number].position;
        var letter = piecePosition.split(Underscore)[0];
        var columnNumber = parseInt(piecePosition.split(Underscore)[0].charCodeAt(0) - 64);
        var rownNumber = parseInt(piecePosition.split(Underscore)[1]);
        var parent = document.getElementById(piecePosition);
        var child = document.createElement(Img);
        child.src = Location + pieceName + Png;
        child.className = pieceName;
        parent.appendChild(child);
        board.array[columnNumber][rownNumber] = new pieces[name](color, name, letter, rownNumber);
    }
}