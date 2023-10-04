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

/*puis message validation lancement jeu*/



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

/* Quand le nom du dragon est validé */
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

/* Actions suite à appui d'un bouton */

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
playBtn.addEventListener("click", function(){
if (gameStart === "true"){
    decrementation = setInterval(decrease, 2000)
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
    clearInterval(decrementation);
    }
}

/*TO-DO LIST;

Pas Listé: faire les animations à l'état normal, 50% Food/Water et Malade.
L11 (Nom): Améliorer le système de démarrage du jeu quand un nom est entré
L92 (gameover): Faire disparaitre le dragon
*/