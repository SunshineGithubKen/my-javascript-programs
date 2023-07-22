'use strict';

(() => {
  function rand(min, max) { //乱数
    return Math.random() * (max - min) + min;//min以上で、maxを超えない
  }

  class Ball {//ボールの位置や速度、ボールが画面外に出たかなどの状態を管理
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.x = rand(30, 250);
      this.y = 30;
      this.r = 10;
      //リロードする度に乱数が変化する
      this.vx = rand (3, 5) * (Math.random() < 0.5 ? 1 : -1);//0.5より小さい時に1
      this.vy = rand(3, 5);
      this.isMissed = false;
    }

    getMissedStatus() {
      return this.isMissed;
    }

    bounce() {
      this.vy *= -1;//y方向の速度を反転する
    }

    reposition(paddleTop) {
      this.y = paddleTop - this.r;//paddleTop からthis.yの半径分引くことで、
                //paddleTop までボールを押し戻す（跳ね返す動き）
    }

    getX() {
      return this.x;
    }

    getY() {
      return this.y;
    }

    getR() {
      return this.r;
    }

    update() {//ボールの位置を更新
      this.x += this.vx;//ボールを動かす速さX軸
      this.y += this.vy;//ｙ軸

      if (this.y - this.r > this.canvas.height) {
        this.isMissed = true;
        //ボールの上端がcanvasのheightを超えたらisMissedをtrueにする
      }

      if (//ボールが跳ね返った動き:左右
        this.x - this.r < 0 ||
        this.x + this.r > this.canvas.width
      ) {
        this.vx *= -1;
      }

      if (//ボールが跳ね返った動き:上下
        this.y - this.r < 0 
      ){
        this.vy *= -1;
       }
    }

    draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = '#fdfdfd';
      this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      //中心座標がx, yで半径がr、0から360度まで
      this.ctx.fill();
    }
  }

  class Paddle {//パドルの位置や動き、描画の管理
    constructor(canvas, game) {
      this.canvas = canvas;
      this.game = game;
      this.ctx = this.canvas.getContext('2d');
      this.w = 60;
      this.h = 16;
      this.x = this.canvas.width / 2 - (this.w / 2);//ｘはパドルの半分の幅左にずらす
      this.y = this.canvas.height - 32; //yはcanvasから少し下に離れた位置にする
      this.mouseX = this.x;//マウスのx座標をmouseXプロパティに代入
      this.addHandler();
    }

    addHandler() {//マウスが移動するたびリスナーが動作
      document.addEventListener('mousemove', e => {
        this.mouseX = e.clientX;
      });
    }

    update(ball) {//パドルを動かす(更新)
      //プロパティを設定
      const ballBottom = ball.getY() + ball.getR();
      const paddleTop = this.y;
      const ballTop = ball.getY() - ball.getR();
      const paddleBottom = this.y + this.h;
      const ballCenter = ball.getX();
      const paddleLeft = this.x;
      const paddleRight = this.x + this.w;

      if (//跳ね返りを修正
        ballBottom > paddleTop &&
        ballTop < paddleBottom &&
        ballCenter > paddleLeft &&
        ballCenter < paddleRight
      ) {
        ball.bounce();
        ball.reposition(paddleTop);
        this.game.addScore();
      }

      const rect = this.canvas.getBoundingClientRect();//canvas要素の位置を取得する
      this.x = this.mouseX - rect.left - (this.w / 2);
      //マウスの座標がパドルの中心にくる

      if (this.x < 0) {
        this.x = 0;
      }
      if (this.x + this.w > this.canvas.width) {
        this.x = this.canvas.width - this.w;
        //パドルの右端がcanvasの幅を超えたら,wの分だけ押し戻した位置に留める
      }
    }
    

    draw() {//パドルを描写
      this.ctx.fillStyle = '#fdfdfd';
      this.ctx.fillRect(this.x, this.y, this.w, this.h);

    }
  }

  class Game {//ゲームのループ処理や描画、ゲームオーバーの判定など
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');//描画コンテキストを設定
      this.ball = new Ball(this.canvas);
      this.paddle = new Paddle(this.canvas, this);
      this.loop();
      this.isGameOver = false;
      this.score = 0;
    }

    addScore() {
      this.score++;
    }
    
    loop() {
      if (this.isGameOver) {
        return;//ゲームオーバーになったら処理を止める
      }

      this.update();//ゲーム内の情報を更新
      this.draw();//描画する

      requestAnimationFrame(() => {//ブラウザにアニメーションを描画する
        this.loop();
      });
    }

    update() {
      this.ball.update();
      this.paddle.update(this.ball);

      if (this.ball.getMissedStatus()) {//ゲームオーバーの判定
        this.isGameOver = true;
      }
    }

    draw() {
      if (this.isGameOver) {//ゲームオーバーの画面を描画
        this.drawGameOver();
        return;
      }

       this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
       //ゲームの画面全体をクリアする //左上から右下まで
       this.ball.draw();
       this.paddle.draw();
       this.drawScore();
    }

    drawGameOver() {
      this.ctx.font = '28px "Arial Black"';
      this.ctx.fillStyle = 'tomato';
      this.ctx.fillText('GAME OVER', 50, 150);

    }

    drawScore() {
      this.ctx.font = '20px Arial';
      this.ctx.fillStyle = '#fdfdfd';
      this.ctx.fillText(this.score, 10, 25);//this.scoreの値を左上に表示する
    }
  }

  const canvas = document.querySelector('canvas');
  //HTML内の最初のcanvas要素を取得する
  if (typeof canvas.getContext === 'undefined') {
    return;
    //canvas要素が存在しない場合や、描画コンテキストを取得できない場合には、中断
  }

  new Game(canvas);
})();