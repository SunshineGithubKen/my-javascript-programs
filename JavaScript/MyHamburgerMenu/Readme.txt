「My Site」は、レスポンシブ対応のWebサイトで、ヘッダーにはPC用のメニューとスマートフォン用のメニューがあります。スマートフォンで閲覧すると、メニューアイコンをクリックするとオーバーレイが表示され、メニューが表示されます。PCで閲覧すると、横並びのメニューが表示されます。CSSでメニューの切り替えとアニメーションを実装しました。

＃DOM操作（Document Object Model）
DOM操作は、JavaScriptを使用してHTML文書の要素にアクセスし、変更するための方法です。
document.getElementById('open')やdocument.querySelector('.overlay')を使用して要素を選択します。

＃CSSのスタイル設定
CSSを使用して要素のスタイルを設定します。
header h1や.sp-menu #openなどのセレクタを使用して、フォントサイズやマージンなどのスタイルが指定されています。

＃イベントリスナー（Event Listener）
イベントリスナーは、特定のイベント（クリックなど）が発生したときに実行される関数です。
open.addEventListener('click', () => {...})やclose.addEventListener('click', () => {...})で、クリックイベントが発生したときに実行される関数を登録しています。

これらの要素を使用して、ハンバーガーメニューを制作しました。
スマートフォン用のメニューアイコンをクリックすると、オーバーレイが表示され、メニューが表示されます。メニューが表示されている間は、メニューアイコンは非表示になります。
また、オーバーレイやメニューのスタイルもCSSで設定されています。
ハンバーガーメニューは、モバイルフレンドリーなウェブサイトデザインにおいて重要な要素で、ユーザビリティを向上させる効果が期待できます。


＃Dotinstallより

"My Site" is a responsive website featuring a header with different menus for PC and smartphones. When viewed on a smartphone, clicking the menu icon displays an overlay with the menu. On PC, the menus are displayed side by side. CSS is used to implement the menu switching and animations.

DOM manipulation (Document Object Model):
DOM manipulation allows JavaScript to access and modify HTML elements. Elements like document.getElementById('open') and document.querySelector('.overlay') are used to select specific elements.

CSS Styling:
CSS is used to set styles for various elements, such as header h1 and .sp-menu #open, defining font sizes, margins, and other styles.

Event Listeners:
Event listeners execute functions when specific events (e.g., clicks) occur. open.addEventListener('click', () => {...}) and close.addEventListener('click', () => {...}) register functions to be executed when click events are triggered.

Using these elements, a hamburger menu is created. Clicking the menu icon on smartphones displays an overlay with the menu, and the menu icon becomes hidden while the menu is visible. The overlay and menu styles are also set using CSS. The hamburger menu is an essential element in mobile-friendly web design, improving user experience.