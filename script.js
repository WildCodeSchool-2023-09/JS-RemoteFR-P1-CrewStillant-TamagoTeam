/*Position par défaut*/
let gameStart = "false";

/* !!!Prendre un form en compte pour cette variable.!!! */
let petName = "Dragoti";

/*Quand le form pour le nom sera rempli */
gameStart = "True"

/* Liaisons HTML/JS */
const foodBtn = document.querySelector(".foodButton");
const waterBtn = document.querySelector(".waterButton");
const healthBtn = document.querySelector(".healthButton");


let petAlert = document.querySelector(".alert");


/* Stats */

let food = 100;
let water = 100;
let health = 100;

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


/* Chrono décrémentation toute les deux secondes*/
if (gameStart = "true"){
    setInterval(decrease, 2000)
        function decrease(){
            food-=2;
            water-=3;
            health--;
    }
}

/* Limitation à 100 des barres de besoins*/
setInterval(inspection, 500)
function inspection(){
    if (food > 100){
        document.getElementsByClassName("alert")[0].innerHTML = "I've ate too much.";
        console.log("Food limit bypassed: restored to 100");
        food = 100;
        health --;
    }

    if (water > 100){
        document.getElementsByClassName("alert")[0].innerHTML = "I've drank too much.";
        console.log("Water limit bypassed: restored to 100");
        water = 100;
        health --;
    }

    if (health > 100){
        document.getElementsByClassName("alert")[0].innerHTML = "I dont need meds.";
        console.log("Water limit bypassed: restored to 100");
        health --;
    }
}
