var etats = [];

function declarerEtat(id, type, functionEntrer, functionSortie, update){
    etats[id] = {
        id: id,
        type: type,
        functionEntrer: () => functionEntrer(),
        functionSortie: () => functionSortie(),
        update: () => update(),
    };
}

function changeEtat(id) {
    if(etats[gamePropriete.etat].functionSortie) etats[gamePropriete.etat].functionSortie();
    if(etats[id].functionEntrer) {
        etats[id].functionEntrer();
        gamePropriete.etat = id;
    }
}