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

/* Stats */

let food = " ";
let water = " ";
let health = " ";

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
        window.alert("I've ate too much.");
        console.log("Food limit bypassed: retored to 100");
        food = 100;
        health --;
    }

    if (water > 100){
        window.alert("I've drank too much.");
        console.log("Water limit bypassed: retored to 100");
        water = 100;
        health --;
    }

    if (health > 100){
        window.alert("I've drank too much.");
        console.log("Water limit bypassed: retored to 100");
        water = 100;
        health --;
    }
}
