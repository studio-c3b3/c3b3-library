var debug = {
  state : 0,
  on : function() {
    this.state = 1;
  },
  off : function() {
    this.state = 0;
  },
  release : function() {
    if (this.state == 0) {

    }
    else {
      /*ctx.beginPath();
      for(var key1 in entity) {
        ctx.arc(gameMath.middleXY(key1,"x"), gameMath.middleXY(key1,"y"), gameMath.diagonaleCarre(entity[key1].width/2), 0, 2* Math.PI, false);
      }

      ctx.stroke();

      ctx.closePath();*/
      ctx.beginPath();

      for(var key in entity) {
        ctx.moveTo(gameMath.middleXY(gameProperty.player, "x"), gameMath.middleXY(gameProperty.player, "y"));
        ctx.lineTo(gameMath.middleXY(key, "x"), gameMath.middleXY(key, "y"));

      }
      ctx.closePath();
      ctx.stroke();


    }
  }
}
