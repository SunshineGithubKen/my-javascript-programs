「TypingMasterGame」は、偉人の名言を使ったタイピングゲーム。名言をランダムに表示し、正確に入力するゲーム。ミスすると効果音が鳴り、タイマーで制限時間内に入力しよう。英語力向上にも役立ちます！楽しさと学びを兼ね備えたプログラムです。

forEach メソッド:
forEach メソッドは、配列の各要素に対して指定した関数を実行します。
タイピングゲームのプログラムでは、sentence.forEach((characterSpan, index) => {...}) 
のように使用されています。これにより、ランダムな文章の各文字を1文字ずつ取得し、入力されたテキストと比較して正誤を判定しています。

fetch 関数:
fetch 関数は、非同期でネットワークリクエストを行うために使用されます。
タイピングゲームのプログラムでは、fetch(RANDOM_SENTENCE_URL_API) によってランダムな名言を取得しています。
その後、取得したデータをJSON形式に変換して処理しています。

Audio クラス:
Audio クラスは、音声を再生するためのオブジェクトです。タイピングゲームのプログラムでは、typeSound, wrongSound, correctSound という3つのオーディオオブジェクトを使用して、タイピングの音、ミスした時の効果音、正解した時の効果音を再生しています。これにより、よりリッチなユーザーエクスペリエンスを提供しています。


＃日商簿記三鷹福祉専門学校の演習問題より

"TypingMasterGame" is a typing game that uses quotes from famous people. It displays a random quote and challenges the player to type it accurately within a time limit. If there are any typing mistakes, the game plays sound effects, adding to the interactive experience. The game not only brings enjoyment but also helps improve English skills by typing famous quotes.

forEach Method:
The forEach method is used to execute a specified function for each element in an array. In the program of the typing game, it is used like sentence.forEach((characterSpan, index) => {...}). This allows the program to retrieve each character of a random sentence one by one and compare it with the input text to determine correctness.

fetch Function:
The fetch function is used to make asynchronous network requests. In the typing game program, fetch(RANDOM_SENTENCE_URL_API) is used to fetch a random quote. The data obtained from the request is then processed after converting it to JSON format.

Audio Class:
The Audio class is an object used to play audio sounds. In the typing game program, three audio objects named typeSound, wrongSound, and correctSound are used to play typing sounds, error sound effects when a mistake is made, and a sound effect when the input is correct, respectively. This enhances the user experience, providing a richer and more engaging interface.

With these functionalities, the program creates an enjoyable and educational typing game experience with random quotes from famous people. It utilizes the forEach method to handle characters of the quote, uses fetch to fetch random quotes, and employs Audio class to add sound effects for a more immersive user experience.
