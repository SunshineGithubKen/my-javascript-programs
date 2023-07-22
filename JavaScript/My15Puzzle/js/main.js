'use strict';

(() => {
  class PuzzleRenderer {
    constructor (puzzle, canvas) {
      this.puzzle = puzzle;
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.img = document.createElement('img');
      // this.img.src = 'img/a15puzzle.png';//15タイル画像
      this.img.src = 'img/animal1.png';//動物画像
      this.img.addEventListener('load', () => {
        this.render();
      });
      this.canvas.addEventListener('click', e => {
        if (this.puzzle.getCompletedStatus() === true) {
          //ゲームがクリア済みであれば動作を終了させる
          return;
        }

        const rect = this.canvas.getBoundingClientRect();
        const col = Math.floor((e.clientX - rect.left) / 70);
        const row = Math.floor((e.clientY - rect.top) / 70);
        this.puzzle.swapTiles(col, row);
        this.render();

        if (this.puzzle.isComplete() === true) {
          // this.isCompleted = true;
          this.puzzle.setCompletedStatus(true);
          this.renderGameClear();
        }
      });
    }

    renderGameClear() { //ゲームクリア時に表示する画面を描画
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.font = '28px Arial';
      this.ctx.fillStyle = '#fff';
      this.ctx.fillText('GAME CLEAR!!', 40, 150);
    }
    render() { //全てのタイルを描画
      for (let row = 0; row < 4; row++) { 
        for (let col = 0; col < 4; col++) {
          this.renderTile(this.puzzle.getTile(row, col), col, row);//プロパティをメソッドに置き換える
        }
      }
    }

    renderTile(n, col, row) { //タイル番号を指定の位置に描画
      if (n === 15) {//タイルの番号が15（空白タイル）の場合には長方形を描画
        this.ctx.fillStyle = '#eeeeee';
        this.ctx.fillRect(col * 70, row * 70, 70, 70);
      } else {
        this.ctx.drawImage( 
          this.img, //nはタイルの番号 //それ以外の場合には画像を描画
          (n % 4) * 70, Math.floor(n / 4) * 70, 70, 70, //画像の位置
          col * 70, row * 70, 70, 70 //70はタイルの幅と高さ
        );
      }
    }
  }


  class Puzzle {
    constructor(level) {
      this.level = level;
      this.tiles = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],
      ];
      this.UDLR = [
        [0, -1], // up 
        [0, 1], // down
        [-1, 0], // left
        [1, 0] // right
      ];
      this.isCompleted = false;//クリア状態をチェック
      
      do {// 最初の（完成した）状態に戻っていたらやり直し
        this.shuffle(this.level);
      } while (this.isComplete() === true);
    }

    getCompletedStatus() {//クリア状態を取得
      return this.isCompleted;
    }

    setCompletedStatus(value) {//クリア状態を設定
      this.isCompleted = value;
    }

    getTile(row, col) {
      return this.tiles[row][col];
    }

    shuffle(n) {//空白タイルの移動先をランダムに決める
      let blankCol = 3;
      let blankRow = 3;

      for (let i = 0; i < n; i++) {
        let destCol;
        let destRow;
        do {
          const dir = Math.floor(Math.random() * 4);
          destCol = blankCol + this.UDLR[dir][0];
          destRow = blankRow + this.UDLR[dir][1];
        
        } while (
          this.isOutside(destCol, destRow) === true);

        [
          this.tiles[blankRow][blankCol],
          this.tiles[destRow][destCol],
        ] = [
          this.tiles[destRow][destCol],
          this.tiles[blankRow][blankCol],
        ];

        [blankCol, blankRow] = [destCol, destRow];
      }
    }

    swapTiles(col, row) {//colとrowをswapする
      if (this.tiles[row][col] === 15) {
        return;
      }

      for (let i = 0; i < 4; i++) {
        const destCol = col + this.UDLR[i][0];
        const destRow = row + this.UDLR[i][1];

        if (this.isOutside(destCol, destRow) === true
        //範囲外の場合移動先が無効なので、スキップ
        ) {
          continue;
        }

        if (this.tiles[destRow][destCol] === 15) {
          //タイル（番号15）の時、タイル15と空白のタイルを入れ替える
          [
            this.tiles[row][col],
            this.tiles[destRow][destCol],
          ] = [
            this.tiles[destRow][destCol],
            this.tiles[row][col],
          ];
          break;
        }
      }
    }

    isOutside(destCol, destRow) {
      return (
        destCol < 0 || destCol > 3 ||
        destRow < 0 || destRow > 3
      );
    }
    
    isComplete() {//タイルが順番通りになっているかをチェック
      let i = 0;
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
          if (this.tiles[row][col] !== i++) {
            return false;
          }
        }
      }
      return true;
    }

    
  }

  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  new PuzzleRenderer(new Puzzle(2), canvas);
})();