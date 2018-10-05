var gameMath = {
  middleXY : function(id,xy) {
    var a = entite[id].x + image[id].tailleImage/2;
    var b = entite[id].y + image[id].tailleImage/2;
    switch (xy)
    {
      case "x" :
        return a
      case "y" :
        return b


    }
  },
  diagonaleCarre : function(num1) {
    return Math.sqrt(num1*num1+num1*num1);
  },
  tiles : function(num1,num2) {
      return (num1*WIDTH/maps[gamePropriete.mapsid].tailleTile)+num2;


  },
  zoom : function(id){
    if(image[id].zoom) return (image[id].tailleImage*image[id].zoomFacteur)
    else return (image[id].tailleImage/image[id].zoomFacteur)
  }

}
