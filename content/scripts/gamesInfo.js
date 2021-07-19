$(document).ready(function () {

    $.ajax({
        url: "https://localhost:44396/json/gamesInfo.json", success: function (result) {
            var gamesJson = JSON.stringify(result);
            var gamesObject = JSON.parse(gamesJson);
            
            getGames(gamesObject);
        }
    })

    // var gamesObject = JSON.parse(gamesInfo);

});

function getGames(gamesObject) {  
    var page = window.location.href.split("=")[1];
    var object = gamesObject[page].games;

    for(var index = 0; index < 2; index++){
        var gameDate = object[index].date;
        var gameId = object[index].game_id;
        var firstPlayer = object[index].players[0];
        var secondPlayer = object[index].players[1];
        var list = document.createElement(ListTag);
        var date = $("<p id='date'></p>").text("date : " + gameDate);
        var player = $("<p id='players'></p>").text("players : " + firstPlayer + " - " + secondPlayer);
        list.id = gameId;
        $(list).append("<button></button>");
        $("#list").append(list);
        var button = list.firstChild;
        button.className = Button;
        var link = document.createElement("a");
        $(button).append(link);
        button.firstChild.textContent = gameId;
        button.firstChild.href = GamePlayLink + page + Semicolon + index + Semicolon + GameId + gameId;
        button.firstChild.className = Link;
        $("#" + gameId).append(date, player);
    }
}

