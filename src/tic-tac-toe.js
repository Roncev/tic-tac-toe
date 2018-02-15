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
     if(this.t[rowIndex][columnIndex] == undefined && this.count <=9) {
     this.t[rowIndex][columnIndex] = this.symbol;

   if (this.symbol == 'x') {this.symbol = 'o'}
   else {this.symbol = 'x'}
   this.count++

   }
///////////////////////////////////
if (this.count == 9) {
for(var i=0; i<4; i++) {
       if(this.t[i][0]==this.t[i][1] && this.t[i][1]==this.t[i][2]) {
         console.log("winnn1");
         this.winner = this.t[i][0];
         this.finished = true;
       console.log(this.winner, "AAAAAAAAAAA");
       //return this.winner
       }
       else if (this.t[0][i]==this.t[1][i] && this.t[1][i]==this.t[2][i]){
         this.winner = this.t[0][i];
         console.log("winnn2");
      this.finished = true;
      console.log(this.winner, "AAAAAAAAAAA");
      //return this.winner
       }
       else if (this.t[0][0]==this.t[1][1] && this.t[1][1]==this.t[2][2]){
         this.winner = this.t[0][0];
         console.log("winnn3");
      this.finished = true;
      console.log(this.winner, "AAAAAAAAAAA");
      //return this.winner

       }
       else if (this.t[0][2]==this.t[1][1] && this.t[1][1]==this.t[2][0]){
         this.winner = this.t[0][2];
         console.log("winnn4");
       this.finished = true;
       console.log(this.winner, "AAAAAAAAAAA");
       //return this.winner
       }
console.log(this.count, this.t, this.winner)
return this.count, this.t, this.winner, this.symbol
     }

}
//////////////////////////////////



}

   isFinished() {
     if(this.winner == null && this.count <9) {
       return null
     }
     return this.winner
}
   

   getWinner() {
if(this.winner != null) {
  return this.winner
}
return null
   }

   noMoreTurns() {
     if(this.count==9) {return true}
     return false

   }

   isDraw() {
     if( this.count == 9 && this.winner == null) {
      //console.log('TRUE')
      //console.log(this.winner)
       return true

     }
      //console.log('FALSE')
      //console.log(this.winner)
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
