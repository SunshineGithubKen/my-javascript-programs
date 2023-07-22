'use strict';

(() => {
  class MazeRenderer { //描画処理
    constructor(canvas) {
      this.ctx = canvas.getContext('2d');
      this.WALL_SIZE = 10;
    }
    render(data) {
      canvas.height = data.length * this.WALL_SIZE;
      canvas.width = data[0].length * this.WALL_SIZE;

      for (let row = 0; row < data.length; row++) {
        for (let col = 0; col < data[0].length; col++) {
          if (data[row][col] === 1) {
            this.ctx.fillRect(
              col * this.WALL_SIZE, 
              row * this.WALL_SIZE, 
              this.WALL_SIZE, 
              this.WALL_SIZE);//壁を描画
          };
        }
      }
    }
  }

  class Maze {
    constructor(row, col, renderer) {
      if (row < 5 || col < 5 || row % 2 === 0 || col % 2 === 0) {
        alert('Size not valid!');
        return;
      }

      this.renderer = renderer;
      this.row = row;
      this.col = col;
      this.data = this.getData();//迷路のデータを取得
    }

    getData() {//迷路のデータを生成
      const data = [];

      for (let row = 0; row < this.row; row++) { //9行のループ
        data[row] = [];
        for (let col = 0; col < this.col; col++) {//7列のループ
          data[row][col] = 1;//外周要素は1で初期化
        }
      }

      for (let row = 1; row < this.row - 1; row++) { 
        for (let col = 1; col < this.col - 1; col++) {
          data[row][col] = 0;//内部要素は0で初期化
        }
      }

      for (let row = 2; row < this.row - 2; row += 2) { 
        for (let col = 2; col < this.col - 2; col += 2) {
          data[row][col] = 1;//棒の配置に対応する要素は1で初期化
        }
      }

      for (let row = 2; row < this.row - 2; row += 2) { 
        for (let col = 2; col < this.col - 2; col += 2) {
          let destRow;
          let destCol;

          do {
            const dir = row === 2 ?
            Math.floor(Math.random() * 4)://棒を倒す方向をランダムに選ぶ乱数の生成 //trueの時
            Math.floor(Math.random() * 3) + 1;//falseの時
            switch (dir) {
              case 0: //up
                destRow = row - 1;
                destCol = col;
                break;
              case 1: //down
                destRow = row + 1;
                destCol = col;
                break;
              case 2: //left
                destRow = row;
                destCol = col - 1;
                break;
              case 3: //right
                destRow = row;
                destCol = col + 1;
                break;
            }
          } while (data[destRow][destCol] === 1);//棒を倒す位置が壁である場合

          

          data[destRow][destCol] = 1;
        }
      }

      return data;
    }

    render() {//迷路を描画するメソッド
      this.renderer.render(this.data);
    }
  }

  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {//canvas要素が未定義の場合は、処理が終了
    return;
  }

  const maze = new Maze(21, 15, new MazeRenderer(canvas));//正常ならばインスタンスを生成//行数,列数
  maze.render();//迷路を描画
})();