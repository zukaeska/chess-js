$(document).ready(function () {

    $.ajax({
        url: "https://localhost:44396/json/playersInfo.json", success: function (result) {
            var playersJson = JSON.stringify(result);
            var playersObject = JSON.parse(playersJson);

            getPlayers(playersObject);
        }
    })
});
// var playersObject = JSON.parse(playersInfo);

function getPlayers(playersObject) {

    for (var index = 0; index < 3; index++) {
        var object = {};
        object = playersObject.players[index];
        var playerId = object.player_id;
        var playerName = object.name;
        var playerNation = object.nation;
        var playerBirthdate = object.birthdate;
        var playerTitles = object.world_titles;
        var playerScore = object.Peak_rating;
        var heading = $("<p id='name'></p>").text("Player : " + playerName);
        var nation = $("<p id='nation'></p>").text("Nation : " + playerNation);
        var birthdate = $("<p id='birth'></p>").text("Birthdate : " + playerBirthdate);
        var titles = $("<p id='title'></p>").text("World titles : " + playerTitles);
        var score = $("<p id='score'></p>").text("Chess high score : " + playerScore);
        var img = document.createElement(Img);
        img.src = PLayerImageLocation + playerName + Jpg;
        var link = document.getElementById(playerId).parentElement;
        link.href = GamesInfoLink + playerId;
        link.className = Link;
        $("#" + playerId).append(heading, nation, birthdate, titles, score, img);
    }
}


