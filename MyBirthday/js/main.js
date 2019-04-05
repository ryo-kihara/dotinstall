'use strict';

function getAge(){
  // 日付の取得
  var date = document.getElementById('date').value;
  var dateArray = date.split("-");
  var year = dateArray[0];
  var month = dateArray[1] - 1;
  var day = dateArray[2];

  // 日付の計算
  var d1 = new Date(year, month, day);
  var d2 = new Date();
  var diff = d2.getTime() - d1.getTime();
  var daysPast = Math.floor(diff / (1000 * 60 * 60 * 24));

  // p要素への設定
  document.getElementById('daysPast').textContent = daysPast;
  document.getElementById('age').textContent = Math.floor(daysPast / 365.25);


}
