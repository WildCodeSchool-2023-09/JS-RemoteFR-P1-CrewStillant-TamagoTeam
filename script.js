/*Position par défaut*/
let gameStart = "false";

/* !!!Prendre un form en compte pour cette variable.!!! */
let petName = "Dragoti";
/* Stats */

let food;
let water;
let health;

/* Quand le nom du dragon est validé */
const playBtn = document.querySelector(".playButton");

playBtn.addEventListener("click", function(){
    gameStart = "true";
    if (gameStart === "true"){
        food = 100;
        water = 100;
        health = 100;
        }
});

/* Liaisons entre HTML et JS */

const foodBtn = document.querySelector(".foodButton");
const waterBtn = document.querySelector(".waterButton");
const healthBtn = document.querySelector(".healthButton");

let petAlert = document.querySelector(".alert");

/* Actions suite à appui d'un bouton */

foodBtn.addEventListener("click", function(){
    food+=10;
    console.log(`Food: ${food}`);
});

waterBtn.addEventListener("click", function(){
    water+=10;
    console.log(`Water: ${water}`)
});

healthBtn.addEventListener("click", function(){
    health+=10;
    console.log(`Health: ${health}`);
});


/* Chrono décrémentation des stats toute les deux secondes*/
playBtn.addEventListener("click", function(){
if (gameStart === "true"){
    setInterval(decrease, 2000)
        function decrease(){
            food-=2;
            water-=3;
            health--;
    }
}
})

/* Limitation à 100 des barres de besoins*/
setInterval(inspection, 500)
function inspection(){
    if (food > 100){
        food = 100;
        health --; // Malus de sur-alimentation //
        console.log("Food limit bypassed: restored to 100");
        document.getElementsByClassName("alert")[0].innerHTML = "I've ate too much.";
    }

    if (water > 100){
        water = 100;
        health --;
        console.log("Water limit bypassed: restored to 100");
        document.getElementsByClassName("alert")[0].innerHTML = "I've drank too much.";
    }

    if (health > 100){
        health = 100;
        health --;
        console.log("Water limit bypassed: restored to 100");
        document.getElementsByClassName("alert")[0].innerHTML = "I dont need meds.";
    }
}

/* Detection Game Over */

setInterval(gameOver, 500)
function gameOver(){

    if (health <= 0){
    //Faire disparaitre le dragon!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    gameStart = "false";
    document.getElementsByClassName("alert")[0].innerHTML = "Game Over.";
    console.log("Game Over reached, shutting down game until restart.")
    window.alert("Game Over");
    health = 100;
    }
}
