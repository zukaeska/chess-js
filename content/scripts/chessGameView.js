function changeSize() {
    $(function () {
        if (window.innerWidth > 940) {
            console.log(window.innerWidth)
            $(".tray").css({"width" : "100px", "height" : "100px"});
            $("img").css({"width" : "85px", "height" : "85px"});
            $(".letters, .numbers").css({"width" : "30px", "height" : "30px"});
        }else if (window.innerWidth > 485) {
                console.log(window.innerWidth)
                $(".tray").css({"width" : "50px", "height" : "50px"});
                $("img").css({"width" : "30px", "height" : "30px"});
                $(".letters, .numbers").css({"width" : "15px", "height" : "15px"});
            }else {
                console.log(window.innerWidth)
                $(".tray").css({"width" : "25px", "height" : "25px"});
                $("img").css({"width" : "15px", "height" : "15px"});
                $(".letters, .numbers").css({"width" : "8px", "height" : "8px"});
            }
    });
}