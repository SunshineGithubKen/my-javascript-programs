「DynamicCirclePortfolio」は、JavaScriptを用いて魅力的なポートフォリオを作成できるウェブアプリケーションです。円形配置で特徴をアピールし、クリックで円が回転します。洗練されたデザインと動きが特長で、各特徴を目立たせるために円形配置と画像の回転を活用し、ユニークな見た目を実現します。


＃DOM操作
    circle.style.transform
    circle.style.transform = rotateSum;
circle の style プロパティを使って要素のスタイルを取得し、回転させるための transform プロパティを設定しています。
transform プロパティによって、要素の回転や移動、拡大縮小などの変換が行われます。


＃イベント処理
    upBtn.onclick = function () { ... };
    downBtn.onclick = function () { ... };
ボタン要素に対してクリックイベントをリスンするためのイベントハンドラを設定しています。
onclick プロパティに関数を代入することで、対応するボタンがクリックされた際に関数が実行されるようになります。

＃日付と時間の取得と計算
JavaScriptのDateオブジェクトを使って現在の日付と時間を取得し、誕生日との差分を計算しています。Dateオブジェクトを利用することで、日付や時間に関連する操作を行うことができます。
これはウェブアプリケーションで時刻や日付に関連した機能を実装する際に非常に重要な機能です。

これらの文法を組み合わせて、ボタンをクリックすると円が回転する動的なWebサイトが作られています。


#日商簿記三鷹福祉専門学校 (Javascript基礎演習より)


"DynamicCirclePortfolio" is a web application that allows you to create an attractive portfolio using JavaScript. It showcases features in a circular arrangement and the circles rotate when clicked. The application stands out with its sophisticated design and movement, utilizing circular placement and image rotation to highlight each feature and achieve a unique appearance.

DOM manipulation
    circle.style.transform
    circle.style.transform = rotateSum;
These lines of code use the style property of the "circle" element to get and set the transform property, enabling rotation. The transform property allows for various transformations such as rotation,translation, and scaling of elements.

Event handling
    upBtn.onclick = function () { ... };
    downBtn.onclick = function () { ... };
These lines set event handlers to listen for click events on button elements. By assigning functions to the onclick property, the corresponding functions will be executed when the respective buttons are clicked.

Getting and calculating dates and times
The JavaScript Date object is used to get the current date and time and calculate the difference with a birthday. By using the Date object, various operations related to dates and times can be performed. This is a crucial feature when implementing functionalities related to time and date in web applications.

Combining these syntax and features, a dynamic website is created where clicking buttons rotates the circles.