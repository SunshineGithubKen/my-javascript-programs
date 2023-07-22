「おみくじアプリ」は簡単なおみくじが引けるWebアプリです。ボタンをクリックすると、ランダムに大吉、中吉、凶、小吉のいずれかが表示されます。ボタンをクリックした際にアニメーションをつけたことで、ユーザー体験を向上されています。

#イベントリスナー（Event Listener）
イベントリスナーは、特定のイベント（クリックなど）が発生したときに実行される関数です。
btn.addEventListener('click', () => {...})は、ボタンがクリックされたときに実行される関数を登録しています。

#ランダムな値の生成
Math.random()を使用して、0以上1未満のランダムな浮動小数点数を生成します。
Math.floor()を使用して、ランダムな値を整数に切り捨てます。
Math.floor(Math.random() * results.length)を使って、配列のインデックスをランダムに生成します。

#DOM操作（Document Object Model）
DOM操作は、JavaScriptを使用してHTML文書の要素にアクセスし、変更するための方法です。
document.getElementById('result')やresult.textContentを使用して、要素を選択し、テキストを変更します。

これらの要素を使用して、おみくじアプリを作成しました。
ボタンがクリックされると、ランダムな運勢が選択され、結果が表示されます。


＃Dotinstallより


The "Fortune Telling App" is a simple web application that allows users to draw random fortunes by clicking a button. Upon clicking the button, it displays one of the following fortunes: "Great Fortune," "Good Fortune," "Bad Fortune," or "Small Fortune." The addition of animation upon button click enhances the user experience.

Event Listener:
Event listeners are used to execute functions when specific events (such as clicks) occur. btn.addEventListener('click', () => {...}) registers a function to be executed when the button is clicked.

Generating Random Values:
Math.random() is used to generate a random floating-point number between 0 (inclusive) and 1 (exclusive). Math.floor() is used to round the random value down to an integer. Math.floor(Math.random() * results.length) is used to generate a random index for the array.

DOM Manipulation:
DOM manipulation is the method of using JavaScript to access and modify HTML elements in the document. document.getElementById('result') and result.textContent are used to select elements and change the displayed text.

Using these elements, the Fortune Telling App is created, allowing users to draw random fortunes and displaying the results upon button click.