「My Carousel」はスライドショーアプリです。左右のボタンでスライドを切り替え、下部にはドットナビゲーションもあります。ウィンドウのリサイズ時にスライドの位置を調整してスムーズな表示を実現しています。

＃DOM操作（Document Object Model）
DOM操作は、JavaScriptを使用してHTML文書の要素にアクセスし、変更するための方法です。
document.getElementById('next')やdocument.querySelector('ul')を使用して要素を選択し、イベントリスナーを追加します。

＃CSSのスタイル設定
CSSを使用して要素のスタイルを設定します。
ulやli、buttonなどの要素に対して幅、高さ、背景色などのスタイルが指定されています。

＃イベントリスナー（Event Listener）
イベントリスナーは、特定のイベント（クリックなど）が発生したときに実行される関数です。
next.addEventListener('click', () => {...})やprev.addEventListener('click', () => {...})で、ボタンがクリックされたときに実行される関数を登録しています。

これらの要素を使用して、カルーセルを作成しました。
カルーセルには複数の画像が表示され、前後のボタンをクリックすると画像がスライドします。
また、下部にはドット（ナビゲーションボタン）が表示され、クリックすると対応する画像に移動します。


＃Dotinstallより

"My Carousel" is a slideshow app that allows switching slides with left and right buttons. It also features dot navigation at the bottom. The app adjusts the slide positions smoothly upon window resizing.

DOM manipulation (Document Object Model)
DOM manipulation is the method of accessing and modifying HTML elements using JavaScript. It selects elements with document.getElementById('next') or document.querySelector('ul') and adds event listeners.

Setting CSS styles
CSS is used to define styles for elements such as ul, li, and button. Styles like width, height, and background color are specified.

Event listeners
Event listeners are functions executed when specific events (e.g., clicks) occur. For instance, next.addEventListener('click', () => {...}) and prev.addEventListener('click', () => {...}) register functions to be executed when the buttons are clicked.

Using these elements, a carousel is created. The carousel displays multiple images, and clicking the previous or next buttons slides the images accordingly. The dot navigation buttons at the bottom allow moving to the corresponding image when clicked.