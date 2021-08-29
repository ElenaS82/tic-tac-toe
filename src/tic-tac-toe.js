class TicTacToe {
  constructor() {
    this.x = 'x';
    this.o = 'o';
    this.curPlayer = 'x';
    this.field = {
      '0,5' : 'a'
    };
    this.fieldCount = 0;
    this.fieldCountX = 0;
    this.fieldCountO = 0;
    this.winner = false;
  }

  getCurrentPlayerSymbol() {
    return this.curPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
        if ([rowIndex, columnIndex] in this.field) {
        } else {
            this.field[[rowIndex, columnIndex]] = this.curPlayer;
            this.fieldCount++;
            if (this.curPlayer == 'x') {
              this.curPlayer = 'o';
              this.fieldCountX++;
            } else {
              this.curPlayer = 'x';
              this.fieldCountO++;
            }
          }
  }

  isFinished() {
    if (this.getWinner() != null || this.isDraw() === true) return true;
  }

  getWinner() {
    if (this.fieldCountO >= 3 || this.fieldCountX >= 3) {
      if (this.fieldCountO >= 3) {
        if (this.field[[0, 0]] == 'o' &&  this.field[[0, 1]] == 'o' && this.field[[0, 2]] == 'o') return 'o';
        if (this.field[[1, 0]] == 'o' &&  this.field[[1, 1]] == 'o' && this.field[[1, 2]] == 'o') return 'o';
        if (this.field[[2, 0]] == 'o' &&  this.field[[2, 1]] == 'o' && this.field[[2, 2]] == 'o') return 'o';
        if (this.field[[0, 0]] == 'o' &&  this.field[[1, 0]] == 'o' && this.field[[2, 0]] == 'o') return 'o';
        if (this.field[[0, 1]] == 'o' &&  this.field[[1, 1]] == 'o' && this.field[[2, 0]] == 'o') return 'o';
        if (this.field[[0, 2]] == 'o' &&  this.field[[1, 2]] == 'o' && this.field[[2, 2]] == 'o') return 'o';
        if (this.field[[0, 0]] == 'o' &&  this.field[[1, 1]] == 'o' && this.field[[2, 2]] == 'o') return 'o';
        if (this.field[[2, 0]] == 'o' &&  this.field[[1, 1]] == 'o' && this.field[[0, 2]] == 'o') return 'o';
      }
      if (this.fieldCountX >= 3) {
        if (this.field[[0, 0]] == 'x' &&  this.field[[0, 1]] == 'x' && this.field[[0, 2]] == 'x') return 'x';
        if (this.field[[1, 0]] == 'x' &&  this.field[[1, 1]] == 'x' && this.field[[1, 2]] == 'x') return 'x';
        if (this.field[[2, 0]] == 'x' &&  this.field[[2, 1]] == 'x' && this.field[[2, 2]] == 'x') return 'x';
        if (this.field[[0, 0]] == 'x' &&  this.field[[1, 0]] == 'x' && this.field[[2, 0]] == 'x') return 'x';
        if (this.field[[0, 1]] == 'x' &&  this.field[[1, 1]] == 'x' && this.field[[2, 0]] == 'x') return 'x';
        if (this.field[[0, 2]] == 'x' &&  this.field[[1, 2]] == 'x' && this.field[[2, 2]] == 'x') return 'x';
        if (this.field[[0, 0]] == 'x' &&  this.field[[1, 1]] == 'x' && this.field[[2, 2]] == 'x') return 'x';
        if (this.field[[2, 0]] == 'x' &&  this.field[[1, 1]] == 'x' && this.field[[0, 2]] == 'x') return 'x';
      }
    } else return null;
  }

  noMoreTurns() {
    if (this.fieldCount == 9) return true;
    return false;
  }

  isDraw() {
    if (this.fieldCount == 9 && this.getWinner() == null) return true;
    return false;
  }

  getFieldValue(rowIndex, colIndex) {
     if ([rowIndex, colIndex] in this.field) {
       return this.field[[rowIndex, colIndex]];
     } else return null;   
  }
}

module.exports = TicTacToe;
