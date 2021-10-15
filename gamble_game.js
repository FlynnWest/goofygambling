window.addEventListener("load", function()
{ 
    let highscore = 0;
    parseInt(localStorage.getItem("highscore")) ? highscore = parseInt(localStorage.getItem("highscore")) : highscore = 0;
    document.getElementById("highscore").innerHTML = "Highscore: <span>" + highscore + "</span>";
});

function showCard(el) {
    let cards = document.getElementsByClassName("card");
    for (let card of cards) {
        card.setAttribute("onclick", "");
    }
    
    let roll = Math.floor((Math.random() * 5) + 1);
    
    let cardID = el.id;

    if (roll === parseInt(cardID)) {
        el.src = "cross.png";
        document.getElementById("score").innerHTML = "0";
        
        setTimeout(function(){ 
            el.src = "card.png";
            for (let card of cards) {
                card.setAttribute("onclick", "showCard(this)");
            }
        }, 2000);
    } else {
        let highscore = 0;
        let score = parseInt(document.getElementById("score").innerHTML);
        score++;
        document.getElementById("score").innerHTML = score;
        
        parseInt(localStorage.getItem("highscore")) ? highscore = parseInt(localStorage.getItem("highscore")) : highscore = 0;
        
        if (score > highscore) {
            localStorage.setItem("highscore", score);
            document.getElementById("highscore").innerHTML = `Highscore: <span>${score}</span>`;
        }
        
        el.src = "tick.png";
        setTimeout(function(){ 
            el.src = "card.png"; 
            for (let card of cards) {
                card.setAttribute("onclick", "showCard(this)");
            }
        }, 2000);
    }
}

