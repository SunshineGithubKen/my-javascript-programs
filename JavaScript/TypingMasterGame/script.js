//  偉人の名言をapiで取得
const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";
const typeDisplayElement = document.getElementById("typeDisplay");
const typeInputElement = document.getElementById("typeInput");
const timer = document.getElementById('timer');

const typeSound = new Audio("./audio/music_typing.mp3");
const wrongSound = new Audio("./audio/music_wrong.mp3");
const correctSound = new Audio("./audio/music_correct.mp3");


// inputテキスト入力。合っているかの判定
typeInputElement.addEventListener("input", () => {
    // タイプ音をつける
    typeSound.play();
    // 遅れて聞こえるのを避けるため以下を入力
    typeSound.currentTime = 0;

    // 文字と文字を比較するため、spanタグの全てを取得します。
    const sentence = typeDisplayElement.querySelectorAll("span");
    // console.log("a");
    // 自身で打ち込んだテキストボックスの文字を取得します。
    const arrayValue = typeInputElement.value.split("");
    console.log(arrayValue);
    // 1文字ずつ比較していきます。

    let correct = true;

    // １文字ずつ比較していきます。
    sentence.forEach((characterSpan, index) => {
        // 何も打ち込んでいなければ、correctクラスとincorrectクラスを削除する
        if((arrayValue[index]) == null) {
            characterSpan.classList.remove('correct');
            characterSpan.classList.remove('incorrect');
            correct = false;
        }
        //ランダムな文章の１文字１文字が自分で打ち込んだテキストが同じであれば
        else if(characterSpan.innerHTML == arrayValue[index]){
            characterSpan.classList.add('correct');
            characterSpan.classList.remove('incorrect');
        } else {
            characterSpan.classList.add('incorrect');
            characterSpan.classList.remove('correct');
            wrongSound.volume = 0.3;
            wrongSound.play();
            wrongSound.currenttime = 0;
            correct = false;
        }
    });

    // 上の変数のcorrectがtrueであれば次の文章へ
    if (correct) {
        correctSound.play();
        correctSound.currentTime = 0;
        RenderNextSentence();
    }
});

// 非同期でランダムな文章を取得する
function GetRandomSentence() {
    return fetch(RANDOM_SENTENCE_URL_API)
    .then((response) => response.json())
    .then(
        (data) =>
        // console.log(data.content));
        data.content);
}

// 次のランダムな文章を取得する
async function RenderNextSentence() {
    const sentence = await GetRandomSentence();
    console.log(sentence);

    typeDisplayElement.innerText = "";

    // 文章を１文字ずつ分解して、spanタグを生成する（クラス付与のため）
    sentence.split("").forEach((character) => {
        const characterSpan = document.createElement("span");
        characterSpan.innerText = character;
        typeDisplayElement.appendChild(characterSpan);
        // 確認
        console.log(characterSpan);
        // テキストボックスの中身を消す
        typeInputElement.value = null;
    });

    // タイマー開始
    StartTimer();
}
let startTime;
let originTime = 30;

function StartTimer() {
    timer.innerHTML = originTime;
    //現在の時刻を表示
    startTime = new Date();
    console.log(startTime);
    // 1秒ずれて呼びだされる
    setInterval(() => {
        timer.innerHTML = originTime - getTimerTime();
        if (timer.innerHTML <= 0) TimeUp();
    }, 1000);
}

    function getTimerTime() {
        return Math.floor(
            (new Date() - startTime) / 1000
        ); //現在の時刻 - 1秒前の時刻 = 1s
    }
    function Timeup() {
        console.log("next sentence");
        RenderNextSentence();
    }
RenderNextSentence();