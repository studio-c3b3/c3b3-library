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
      ctx.beginPath();
      ctx.moveTo(gameMath.middleXY(0, "x"), gameMath.middleXY(0, "y"));
      ctx.lineTo(gameMath.middleXY(1, "x"), gameMath.middleXY(1, "y"));
      ctx.stroke();
      ctx.closePath();
    }
  }
}
