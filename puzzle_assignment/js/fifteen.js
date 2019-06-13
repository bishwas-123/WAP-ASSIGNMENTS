$(document).ready(function () {

    let randomBlankSpaceIndex = 16;
    let currentOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, null];


init = function() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
      
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("images/background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        
        // store x and y for later
        div.x = x;
        div.y = y; 
    }        
};

    init();
//  random order
    $("#shufflebutton").click(function () {
        let divs = $(".puzzlepiece");
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        function shuffle(o) {
            for (var j, x, i = o.length;
                i; j = parseInt(Math.random() * i),
                x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        };
        var random = shuffle(numbers);
        randomBlankSpaceIndex = parseInt(Math.random() * 15);
        let afterBlank = false;


        for (var i = 0; i <= divs.length; i++) {
            if (randomBlankSpaceIndex === i) {
                afterBlank = true;
                currentOrder[i] = null;
            } else {
                var div;
                let randomindex;
                if (afterBlank) {
                    randomindex = random[i - 1];
                    // div = divs[randomindex];
                } else {
                    randomindex = random[i];
                }
                currentOrder[i] = randomindex;
                div = divs[randomindex];
                var x = (((i) % 4) * 100);
                var y = (Math.floor((i) / 4) * 100);
                // set basic style and background
                div.style.left = x + 'px';
                div.style.top = y + 'px';
            }
        }
    });

    $("#puzzlearea div").click(function () {
        let space = currentOrder.indexOf(null);
        let nearbyPieces = [null, null, null, null];
        let index = 0;
        if (space > 3) {
            let up = space - 4;
            nearbyPieces[0] = currentOrder[up];
        }
        if ((space % 4) >= 0 && (space % 4) < 3) {
            let right = space + 1;
            nearbyPieces[1] = currentOrder[right];
        }
        if (space < 12) {
            let down = space + 4;
            nearbyPieces[2] = currentOrder[down];
        }
        if ((space % 4) <= 3 && (space % 4) > 0) {
            let left = space - 1;
            nearbyPieces[3] = currentOrder[left];
        }
        let divId = parseInt(this.id);
        //verifies if the piece can be moved
        if (nearbyPieces.includes(divId)) {
            let PiecePosition = nearbyPieces.indexOf(divId);
            currentOrder[space] = divId;
            let y = parseInt(this.style.top);
            let x = parseInt(this.style.left);
            let newY = 0;
            let newX = 0;
            switch (PiecePosition) {
                case 0:
                    currentOrder[space - 4] = null;
                    newY = y + 100;
                    this.style.top = newY + 'px';
                    break;
                case 1:
                    currentOrder[space + 1] = null;
                    newX = x - 100;
                    this.style.left = newX + 'px';
                    break;
                case 2:
                    currentOrder[space + 4] = null;
                    newY = y - 100;
                    this.style.top = newY + 'px';
                    break;
                case 3:
                    currentOrder[space - 1] = null;
                    newX = x + 100;
                    this.style.left = newX + 'px';
                    break;
                default:
            }
        }
    });
});