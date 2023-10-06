/* Position par défaut */
let gameStart = "false";
let petName = document.querySelector("#pet-name");

/* Stats */

let food;
let water;
let health;

                    /*Mouvement Zone "Nommes ton dragon"*/

/*apparition de la zone pour donner le nom du dragon*/

const initiateGame = document.querySelector(".defaultBox");
initiateGame.addEventListener("click", () => document.querySelector(".secondBox").style.display = "contents");

/*le nom saisi remplace le nom par default*/

const playBtn = document.querySelector(".playButton");
const newName = document.querySelector("#dName");
newName.addEventListener("change", function () {
    petName.textContent = this.value
});

/*Le message de validation du nom remplace le reste puis les 3 boutons s'affichent*/

playBtn.addEventListener("click", () => {
    document.querySelector(".defaultBox").style.display = "none";
    document.querySelector(".secondBox").style.display = "none";
    document.querySelector(".thirdBox").style.display = "contents";
    setTimeout(() => {document.querySelector(".dragon-game").style.display = "none";
    document.querySelector(".three-buttons").style.display = "contents"}, 3000);
    });

/* Quand le nom du dragon est validé, le jeu se lance vraiment */

playBtn.addEventListener("click", function() {
    gameStart = "true";
    if (gameStart === "true") {
        food = 100;
        water = 100;
        health = 100;
        }
});

/* Liaisons entre HTML et JS */

const foodBtn = document.querySelector("#food-Button");
const waterBtn = document.querySelector("#water-Button");
const healthBtn = document.querySelector("#health-Button");

let petAlert = document.querySelector(".alert");

/*Modif du style des boutons d'interraction au survol*/

foodBtn.addEventListener("mouseover", () => {
    foodBtn.style.boxShadow = "3px 3px 4px 2px black";
    setTimeout(() => foodBtn.style.boxShadow = "none", 250);
});

waterBtn.addEventListener("mouseover", () => {
    waterBtn.style.boxShadow = "3px 3px 4px 2px black";
    setTimeout(() => waterBtn.style.boxShadow = "none", 250);
});

healthBtn.addEventListener("mouseover", () => {
    healthBtn.style.boxShadow = "3px 3px 4px 2px black";
    setTimeout(() => healthBtn.style.boxShadow = "none", 250);
});

/* Actions suite à appui sur un bouton */

foodBtn.addEventListener("click", function(){
    food+=10;
    console.log(`Food: ${food}`);
    foodBtn.style.boxShadow = "3px 3px 4px 2px black";
    setTimeout(() => foodBtn.style.boxShadow = "none", 250);
});

waterBtn.addEventListener("click", function(){
    water+=10;
    console.log(`Water: ${water}`);
    waterBtn.style.boxShadow = "3px 3px 4px 2px black";
    setTimeout(() => waterBtn.style.boxShadow = "none", 250);
});

healthBtn.addEventListener("click", function(){
    health+=10;
    console.log(`Health: ${health}`);
    healthBtn.style.boxShadow = "3px 3px 4px 2px black";
    setTimeout(() => healthBtn.style.boxShadow = "none", 250);
});


/* Chrono décrémentation des stats toute les deux secondes*/

setInterval(decrease, 2000)
function decrease(){
    if (gameStart === "true"){
        food-=2;
        water-=3;
        health--;
    }
}

/* Limitation à 100 des barres de besoins*/

setInterval(inspection, 500)
function inspection(){
    if (food > 100){
        food = 100;
        console.log("Food limit bypassed: restored to 100");
    }

    if (water > 100){
        water = 100;
        console.log("Water limit bypassed: restored to 100");
    }

    if (health > 100){
        health = 100;
        console.log("Health limit bypassed: restored to 100");
    }
}

/* Changement de Status + Malus + message d'alerte */

statusInterval = setInterval(dragonStatus, 500)
function dragonStatus(){
    if (food > 75 && water > 75 && health > 75) {
        document.querySelector(".dragonStates").src="Dragon Tamagotchi/Normal.gif"
        document.getElementsByClassName("alert")[0].innerHTML = "Je suis en pleine forme!";
        console.log("food > 75 && water > 75 && health > 75")

    } else if (food > 50 && water > 50 && health > 50) {
        document.getElementsByClassName("alert")[0].innerHTML = "Je vais bien!";
        console.log("food > 50 && water > 50 && health > 50")

    } else if (health < 50){
        document.querySelector(".dragonStates").src="Dragon Tamagotchi/Sick.gif"
        document.getElementsByClassName("alert")[0].innerHTML = "Je me sens pas bien du tout...";
        health--;
        health--;
        console.log("health < 50")
        
    } else if (health < 75){
        document.getElementsByClassName("alert")[0].innerHTML = "Je me sens pas très bien...";
        console.log("health < 75")

    } else if (food < 50){
        document.querySelector(".dragonStates").src="Dragon Tamagotchi/Sad.gif"
        document.getElementsByClassName("alert")[0].innerHTML = "J'ai faim...";
        health--;
        health--;
        console.log("Food < 50")
        
    } else if (food < 75){
        document.getElementsByClassName("alert")[0].innerHTML = "J'ai un petit creux...";
        console.log("Food < 75")
        
    } else if (water < 50){
        document.querySelector(".dragonStates").src="Dragon Tamagotchi/Sad.gif"
        document.getElementsByClassName("alert")[0].innerHTML = "J'ai vraiment soif...";
        health--;
        health--;
        console.log("Water < 50")
    
    } else if (water < 75){
        document.getElementsByClassName("alert")[0].innerHTML = "J'ai un peu soif";
        console.log("Water < 75")

}}


/* Detection Game Over */

overInterval = setInterval(gameOver, 500)
function gameOver(){

    if (health <= 0){
        document.querySelector(".dragonStates").src="Dragon Tamagotchi/dragonGameOver.png"
        gameStart = "false";
        document.getElementsByClassName("alert")[0].innerHTML = "Game Over.";
        console.log("Game Over reached, shutting down game until restart.")
        clearInterval(statusInterval);
        clearInterval(overInterval);
        document.querySelector(".game-over").style.display = "contents";
        document.querySelector(".three-buttons").style.display = "none";
}
}

/* Reset du jeu */

const gameOverBtn = document.querySelector(".game-over");
gameOverBtn.addEventListener("click", function(){
    location.reload();
});