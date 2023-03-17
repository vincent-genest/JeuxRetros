/*******************************************************************************
Faire basculer la possibilité de défiler dans la page
*******************************************************************************/

let leCheckBox = document.querySelector("#cc-nav-principale");
let leBody = document.querySelector("body");
leCheckBox.addEventListener("click", gererLeDefilement);

function gererLeDefilement() {
    if (leCheckBox.checked == true) {
        leBody.style.overflow = "hidden";
    } else {
        leBody.style.overflow = "scroll";
    }
}

/*******************************************************************************
Fermer le menu adaptatif lorsque un bouton est cliqué
*******************************************************************************/

let lesBoutons = document.querySelectorAll(".nav-principale a");
/*Mettre un gestionnaire d'événement sur chaque bouton avec un boucle for of*/
for (let unBouton of lesBoutons) {
    unBouton.addEventListener("click", controlerBoutonBurger);
}
function controlerBoutonBurger() {
    //Gérer l'état de la case à cocher
    leCheckBox.checked = false;
    //Remettre la barre de défilement sur le body
    leBody.style.overflow = "scroll";
}

window.addEventListener("scroll", faireApparaitre);

function faireApparaitre() {
    let lesSectionsAfaireApparaitre = document.querySelectorAll("section");
    //On attribue les classes quand la hauteur de la section atteint 65% de celle de la fenêtre
    let hauteurVisible = window.innerHeight * 0.75;
    for (let uneSection of lesSectionsAfaireApparaitre) {
        let hautDeLaSection = uneSection.getBoundingClientRect().top;

        if (hautDeLaSection < hauteurVisible) {
            uneSection.classList.add("active");
        } else {
            uneSection.classList.remove("active");
        }
    }
}
/*******************************************************************************
Modification css par bouton
*******************************************************************************/
let premierBouton = document.querySelector("#premierBouton");
let lesConteneurs = document.querySelectorAll(".conteneur");
let titrePong = document.querySelector("h2");
let titrePacMan = document.querySelector("#titrePacMan");
let lesInfos = document.querySelectorAll(".info");

premierBouton.addEventListener("click", changerMode);
function changerMode() {
    for (let unConteneur of lesConteneurs) {
        if (premierBouton.checked == true) {
            unConteneur.style.backgroundColor = "#ccc";
        } else {
            unConteneur.style.backgroundColor = "#454545";
        }
    }
    for (let uneInfo of lesInfos) {
        if (premierBouton.checked == true) {
            uneInfo.style.color = "black";
        } else {
            uneInfo.style.color = "white";
        }
    }
    if (premierBouton.checked == true) {
        titrePong.style.color = "#ccc";
        titrePong.style.textShadow = "2px 2px 5px rgba(204, 204, 204, 0.6)";
        titrePong.style.borderBottom = "5px dashed #ccc";
        titrePacMan.style.borderBottom = "5px dotted rgb(254, 204, 0)";
        leBody.style.backgroundColor = "#eeeeee";
    } else {
        titrePong.style.color = "#ffffff";
        titrePong.style.borderBottom = " 5px dashed #ffffff";
        titrePacMan.style.borderBottom = " 5px dotted #ffffff";
        leBody.style.backgroundColor = "#1b1b1b";
    }
}

let deuxiemeBouton = document.querySelector("#deuxiemeBouton");
let laBarreNav = document.querySelector(".barre-nav");
let laNav = document.querySelector(".nav-principale");
let leBoutonHaut = document.querySelector(".btn-retour-haut");
let lesLignes = document.querySelectorAll(".ligne");

deuxiemeBouton.addEventListener("click", changerIcone);
function changerIcone() {
    if (deuxiemeBouton.checked == true) {
        iconePong.src = "images/iconePongAlternatif.png";
        iconePong.style.transform = "scale(2)";
        iconePacMan.src = "images/iconePacManAlternatif.png";
        iconePacMan.style.transform = "scale(3)";
        iconeMario.src = "images/iconeMarioAlternatif.png";
        iconeMario.style.transform = "scale(3)";
        iconeTetris.src = "images/iconeTetrisAlternatif.png";
        iconeTetris.style.transform = "scale(2)";
    } else {
        iconePong.src = "images/iconePong.png";
        iconePong.style.transform = "scale(1)";
        iconePacMan.src = "images/iconePacMan.png";
        iconePacMan.style.transform = "scale(1)";
        iconeMario.src = "images/iconeMario.png";
        iconeMario.style.transform = "scale(1)";
        iconeTetris.src = "images/iconeTetris.png";
        iconeTetris.style.transform = "scale(1)";
    }
}

let troisiemeBouton = document.querySelector("#troisiemeBouton");
let iconePong = document.querySelector("#iconePong");
let iconePacMan = document.querySelector("#iconePacMan");
let iconeMario = document.querySelector("#iconeMario");
let iconeTetris = document.querySelector("#iconeTetris");

troisiemeBouton.addEventListener("click", stopperFondCouleur);
function stopperFondCouleur() {
    for (let uneLigne of lesLignes) {
        if (troisiemeBouton.checked == true) {
            uneLigne.style.animationPlayState = "paused";
        } else {
            uneLigne.style.animationPlayState = "running";
        }
    }
    if (troisiemeBouton.checked == true) {
        leBoutonHaut.style.animationPlayState = "paused";
        laBarreNav.style.animationPlayState = "paused";
        laNav.style.animationPlayState = "paused";
    } else {
        leBoutonHaut.style.animationPlayState = "running";
        laBarreNav.style.animationPlayState = "running";
        laNav.style.animationPlayState = "running";
    }
}

let quatriemeBouton = document.querySelector("#quatriemeBouton");

quatriemeBouton.addEventListener("click", montrerLesInfos);
function montrerLesInfos() {
    for (let uneInfo of lesInfos) {
        if (quatriemeBouton.checked == true) {
            uneInfo.style.display = "block";
        } else {
            uneInfo.style.display = "none";
        }
    }
}
