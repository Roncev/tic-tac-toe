class TicTacToe {
   constructor() {
     this.symbol = 'x';
     this.t = [[,,,],[,,,],[,,,]];
     this.winner = null;
     this.count = 0;
     this.finished = false;
   }

   getCurrentPlayerSymbol() {
     //console.log(this.symbol)
     return this.symbol;

   }

   nextTurn(rowIndex, columnIndex) {
  var i = 0;
  var j = 0;
     if(this.t[rowIndex][columnIndex] == undefined && this.count <=9) {
     this.t[rowIndex][columnIndex] = this.symbol;

   if (this.symbol == 'x') {this.symbol = 'o'}
   else {this.symbol = 'x'}
  this.count++
  

   }
///////////////////////////////////
//while (i<=2 ) {
//console.log(this.t[0][0],this.t[0][1],this.t[0][2])
//console.log(this.t[1][0],this.t[1][1],this.t[1][2])
//console.log(this.t[2][0],this.t[2][1],this.t[2][2])
for(var i=0; i<=2; i++) {
       //console.log(i)
       if(this.t[i][0]==this.t[i][1] && this.t[i][1]==this.t[i][2] && this.t[i][1] !=undefined) {
        //console.log(this.t[i][0], "test1")

          this.winner = this.t[i][0];

       }
       else if (this.t[0][i]==this.t[1][i] && this.t[1][i]==this.t[2][i] && this.t[1][i] !=undefined){
      //  console.log(this.t[i][0], "test2")

            this.winner = this.t[0][i];

       }
       else if (this.t[0][0]==this.t[1][1] && this.t[1][1]==this.t[2][2] && this.t[i][1] !=undefined){
    //  console.log(this.t[1][1], "test3")
 
            this.winner = this.t[1][1];

       }
      else if (this.t[2][0]==this.t[1][1] && this.t[1][1]==this.t[0][2] && this.t[i][1] !=undefined){
    //  console.log(this.t[1][1], "test4")


            this.winner = this.t[1][1];

       }

}
//console.log(this.count, this.winner, "loop")
return this.winner, this.t, this.symbol
     }
//////////////////////////////////////////


   isFinished() {
//console.log(this.count, this.t,this.winner,"finished")
     if(this.winner != null || this.count == 9) {
//  console.log("TRUE")
  return true}
//  console.log("FALSE")
  return false

}
   

   getWinner() {
  if(this.winner == undefined) {
    return null
  }
  return this.winner
}
   noMoreTurns() { //DONE
     if(this.count==9) {return true}
     return false

   }

   isDraw() { //DONE
     if( this.count == 9 && this.winner == null) {
       return true

     }
     return false

  }

  getFieldValue(rowIndex, colIndex) {
    if(this.t[rowIndex][colIndex] != undefined){
      //console.log(this.t)
     // console.log(rowIndex, colIndex,"getFieldIn" )
      //console.log(this.t[rowIndex][colIndex], 'getFieldOut')
    return this.t[rowIndex][colIndex]
}
return null
  }

}

module.exports = TicTacToe;
