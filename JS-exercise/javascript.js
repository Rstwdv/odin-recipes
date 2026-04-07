function computerPlay(){
        let scf = ["sasso","carta","forbici"];
        let casuale = scf[Math.floor(Math.random() * scf.length)];
        return casuale;
}

function gioco(selezione_giocatore, selezione_computer) {
    if (selezione_giocatore === selezione_computer){
        return ("pareggio");
    }
    else if ((selezione_giocatore === "sasso") && (selezione_computer === "forbici")){
        return("Vittoria, sasso batte forbici");
    }
    
    else if ((selezione_giocatore === "sasso") && selezione_computer === "carta"){
        return("Hai perso, carta batte sasso");
    }
    
    else if ((selezione_giocatore === "carta") && selezione_computer === "sasso"){
        return("Vittoria, carta batte sasso");
    }
    
    else if ((selezione_giocatore === "carta") && selezione_computer === "forbici"){
        return("Hai perso, forbici batte carta");
    }
    
    else if ((selezione_giocatore === "forbici") && selezione_computer === "sasso"){
        return("Hai perso, sasso batte forbici");
    }
    else if ((selezione_giocatore === "forbici") && selezione_computer === "carta"){
        return("Vittoria, forbici batte carta");
    }
}

let selezione_computer = computerPlay();
const prompt = require('prompt-sync')();
const selezione_giocatore = prompt("carta, forbici o sasso?", "");
if (selezione_giocatore !== null){
    console.log(selezione_giocatore);
}

console.log(selezione_computer)
console.log(gioco(selezione_giocatore, selezione_computer));
