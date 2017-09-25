class TicTacToe {
    constructor() {
        
        this.endgame=false
        this.curent="x";
        this.storage=[
            [null,null,null],
            [null,null,null],
            [null,null,null],
        ];
        
   }

    getCurrentPlayerSymbol() {
    
        return this.curent;
 

    }

    nextTurn(rowIndex, columnIndex) {
             
        if (this.storage[rowIndex][columnIndex]==null){
          this.storage[rowIndex][columnIndex]=this.curent;
	        if (this.curent==="x"){
	            this.curent="o";
	        } else {
	            this.curent="x";
	        }
        }
        
   }

    isFinished() {

        if(this.storage[0][0]=="x"&&this.storage[0][1]=="x"&&this.storage[0][2]=="x") {this.endgame=true};
        if(this.storage[1][0]=="x"&&this.storage[1][1]=="x"&&this.storage[1][2]=="x") {this.endgame=true};
        if(this.storage[2][0]=="x"&&this.storage[2][1]=="x"&&this.storage[2][2]=="x") {this.endgame=true};

        if(this.storage[0][0]=="x"&&this.storage[1][0]=="x"&&this.storage[2][0]=="x") {this.endgame=true};
        if(this.storage[0][1]=="x"&&this.storage[1][1]=="x"&&this.storage[2][1]=="x") {this.endgame=true};
        if(this.storage[0][2]=="x"&&this.storage[1][2]=="x"&&this.storage[2][2]=="x") {this.endgame=true};

        if(this.storage[0][0]=="x"&&this.storage[1][1]=="x"&&this.storage[2][2]=="x") {this.endgame=true};
        if(this.storage[0][2]=="x"&&this.storage[1][1]=="x"&&this.storage[2][0]=="x") {this.endgame=true};

        if(this.storage[0][0]=="o"&&this.storage[0][1]=="o"&&this.storage[0][2]=="o") {this.endgame=true};
        if(this.storage[1][0]=="o"&&this.storage[1][1]=="o"&&this.storage[1][2]=="o") {this.endgame=true};
        if(this.storage[2][0]=="o"&&this.storage[2][1]=="o"&&this.storage[2][2]=="o") {this.endgame=true};
        
        if(this.storage[0][0]=="o"&&this.storage[1][0]=="o"&&this.storage[2][0]=="o") {this.endgame=true};
        if(this.storage[0][1]=="o"&&this.storage[1][1]=="o"&&this.storage[2][1]=="o") {this.endgame=true};
        if(this.storage[0][2]=="o"&&this.storage[1][2]=="o"&&this.storage[2][2]=="o") {this.endgame=true};
        
        if(this.storage[0][0]=="o"&&this.storage[1][1]=="o"&&this.storage[2][2]=="o") {this.endgame=true};
        if(this.storage[0][2]=="o"&&this.storage[1][1]=="o"&&this.storage[2][0]=="o") {this.endgame=true};

        return this.endgame || this.noMoreTurns();

    }
    
    getWinner() {
    	if (this.isFinished() && this.endgame){
    		return this.curent==="x"? "o":"x"
    	}
        return null
    }
    

    noMoreTurns(){
    for (var i=0; i<this.storage.length; i++){
        for (var j=0; j<this.storage[i].length; j++){
            if(this.storage[i][j]==null){
                return false;
            }
        }
    }
        return true;
    }



    isDraw() {
        return (this.noMoreTurns() && !this.getWinner())

    }

    getFieldValue(rowIndex, colIndex) {

        return this.storage[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
