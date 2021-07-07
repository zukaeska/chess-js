const divId = "#table_div";
const Table = "<table></table>";
const Tr = "<tr></tr>";
const Th = "<th class='numbers'></th>";
$(function () {
    createTable();
});
function createTable() {
    var rowIndex;
    var columnIndex;
    var table = document.createElement("table");
    var width = board.width;
    var height = board.height;

    for (rowIndex = height; rowIndex > 0; rowIndex--) {
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.className = Numbers;
        th.textContent = rowIndex;

        $(tr).append(th);

        for (columnIndex = 0; columnIndex < width; columnIndex++) {
            var td = document.createElement("td");
            if (rowIndex % 2 == 0) {
                if (columnIndex % 2 == 0) {
                    td.className = "tray " + White;
                }
                if (columnIndex % 2 == 1) {
                    td.className = "tray " + Brown;
                }
            }else {
                if (columnIndex % 2 == 0) {
                    td.className = "tray " + Brown;
                }
                if (columnIndex % 2 == 1) {
                    td.className = "tray " + White;
                }
            }
            td.id = String.fromCharCode(columnIndex + 65) + Underscore + rowIndex;
            $(tr).append(td);
        }

        $(table).append(tr);
    }

    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.className = "letters";
    $(tr).append(td); 

    for (columnIndex = 1; columnIndex < width + 1; columnIndex++) { 
        var td = document.createElement("td");
        td.className = "letters";
        td.textContent = String.fromCharCode(columnIndex + 64);
        $(tr).append(td);
    }

    $(table).append(tr);

    $(divId).append(table);
}


