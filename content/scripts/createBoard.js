const TableDivId = "#table_div";
const Table = "<table></table>";
const Tr = "<tr></tr>";
const Th = "<th class='numbers'></th>";


$(function () {
    createTable();
});


function createTable() {

    var rowIndex;
    var columnIndex;
    var table = document.createElement(TableTag);
    var width = board.width;
    var height = board.height;

    //creates tr, th ,td
    for (rowIndex = height; rowIndex > 0; rowIndex--) {
        var tr = document.createElement(TrTag);
        var th = document.createElement(ThTag);
        th.className = Numbers;
        th.textContent = rowIndex;

        $(tr).append(th);

        for (columnIndex = 0; columnIndex < width; columnIndex++) {
            var td = document.createElement(TdTag);
            if (rowIndex % 2 == 0) {
                if (columnIndex % 2 == 0) {
                    td.className = Tray + White;
                }
                if (columnIndex % 2 == 1) {
                    td.className = Tray + Brown;
                }
            }else {
                if (columnIndex % 2 == 0) {
                    td.className = Tray + Brown;
                }
                if (columnIndex % 2 == 1) {
                    td.className = Tray + White;
                }
            }
            td.id = String.fromCharCode(columnIndex + 65) + Underscore + rowIndex;
            $(tr).append(td);
        }

        $(table).append(tr);
    }

    var tr = document.createElement(TrTag);
    var td = document.createElement(TdTag);
    td.className = Letters;
    $(tr).append(td); 

    //creates letters under table
    for (columnIndex = 1; columnIndex < width + 1; columnIndex++) { 
        var td = document.createElement(TdTag);
        td.className = Letters;
        td.textContent = String.fromCharCode(columnIndex + 64);
        $(tr).append(td);
    }

    changeSize();

    $(table).append(tr);

    $(TableDivId).append(table);
}


