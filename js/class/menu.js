var menuElement = [];

function updateMenu() {
    for(let cle in entite){
        if(entite[cle].type === 2 && !entite[cle].imageRendu.cursor){ //C'est un curseur
            entite[cle].imageRendu.gen();
        }
        if(cle === menuElement[gamePropriete.menuCursor].toString()){
            entite[gamePropriete.menuCursorId].y = entite[cle].y+(entite[cle].height/2-entite[gamePropriete.menuCursorId].height/2);
            entite[gamePropriete.menuCursorId].x = entite[cle].x - 20;
            entite[gamePropriete.menuCursorId].imageRendu.gen();
        }
    }

}

function declarerMenuCursor(id,width,height,srcImage,zoom,zoomFacteur){
    declarerEntite(id, 0, 0, 0, srcImage, width, height, 2);
    declarerStatic(id, width, height, zoom, zoomFacteur);
    gamePropriete.menuCursorId = id;
    entite[id].imageRendu.cursor = true;
}

function declarerMenuElement(id,x,width,height,srcImage,zoom,zoomFacteur,callback) {
    declarerEntite(id, WIDTH/2-width/2, x, 0, srcImage, width, height, 2);
    declarerStatic(id, width, height, zoom, zoomFacteur);
    entite[id].imageRendu.active = false;
    entite[id].imageRendu.cursor = false;
    entite[id].callback = () => callback();
    menuElement.push(id);
}