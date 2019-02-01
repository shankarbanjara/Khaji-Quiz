const kanji = document.querySelector('.kanji');
const input = document.getElementById('input');
const check = document.getElementById('check');

const kanjiObj = {
  jin: '人',
  shin: '新',
  eki: '駅',
  den: '電'
}

const kanjiValue = Object.values(kanjiObj);
const kanjiKey = Object.keys(kanjiObj);


let nextKanji = 0;

let nowKanji = kanjiValue[nextKanji];
let nowRomaji = kanjiKey[nextKanji];

check.addEventListener('click', function(){

});

