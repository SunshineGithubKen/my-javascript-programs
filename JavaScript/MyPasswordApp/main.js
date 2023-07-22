'use strict';

{
  //パスワードを生成する関数
  function showPassword() {
    const result = document.getElementById('result');
    const numbersCheckbox = document.getElementById('numbers-checkbox');
    const symbolsCheckbox = document.getElementById('symbols-checkbox');

    //使用する文字列の定義
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!#$%&()'
    let password = ''; //パスワードとなる文字列を初期化
    let seed = letters + letters.toUpperCase(); //文字列のシードとなる文字列を初期化

    //数字にチェックが入っていれば、seedへランダムに1つの数字を入れる機能を追加 ★
    if (numbersCheckbox.checked) {
      seed += numbers;
      password += numbers[Math.floor(Math.random() * numbers.length)];
    }

    // 記号にチェックが入っていれば、seedへランダムに1文字の記号を入れる機能を追加 ★
    if (symbolsCheckbox.checked) {
      seed += symbols;
      password += symbols[Math.floor(Math.random() * symbols.length)];
    }
    
    // パスワードの長さがスライダーの値になるまで、seedから文字を選び続けてパスワードを生成
    for (let i = password.length; i < slider.value; i++) {
      password += seed[Math.floor(Math.random() * seed.length)];
    }

    result.textContent = password;  // 生成されたパスワードを表示
  }
  const slider = document.getElementById('slider');
  const btn = document.getElementById('btn');

  // スライダーの値が変更されたら、パスワードの長さ表示を更新
  slider.addEventListener('input', () => {
    const passwordLength = document.getElementById('password-length');
    passwordLength.textContent = slider.value;
  });

  // ボタンをクリックしたら、パスワード生成関数を呼び出す
  btn.addEventListener('click', () => {
      showPassword();
  });

  // 初期表示時にパスワードを生成して表示
  showPassword();
}