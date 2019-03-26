(function (){   //ページの初期化を行えば、初期化終了後には一時変数
  'usestrict';

  var price = document.getElementById("price");
  var num = document.getElementById("num");
  var unit = document.getElementById("unit");
  var btn = document.getElementById("btn");
  var result = document.getElementById("result");
  var reset = document.getElementById("reset");

  function checkInput(){
    if( price.value.match(/^[1-9][0-9]*$/) && num.value.match(/^[1-9][0-9]*$/) ){  //MDNで正規表現について調べる
      btn.classList.remove("disabeled");
    }
    else {
      btn.classList.add("disabeled");
    }
  }

  btn.addEventListener("click", function(){
    var payLess;
    var short;
    var payMore;
    var over;
    var str;

    if(this.classList.contains("disabeled") === true){
      return;
    }
    //A. 300(payLess) => 100(short)不足
    //B. 400(payMore) => 200(over)超過
    //payLess = 1000 / 3 = 333.33333...
    //        => 333.33333... / 100 = 3

    // payLess = Math.floor(1000 / 3 / 100) * 100; //floor...小数点以下切り捨て
    // short = 1000 - (300 * 3);
    // payMore = Math.ceil(1000 / 3 / 100) * 100; //ceil...小数点以下切り上げ
    // over = Math.abs(1000 - (400 * 3));  //abs...絶対値

    payLess = Math.floor(price.value / num.value / unit.value) * unit.value;  //一人300円
    short = price.value - (payLess * num.value);
    payMore = Math.ceil(price.value / num.value / unit.value) * unit.value;  //一人400円
    over = Math.abs(price.value - (payMore * num.value));
    if(over === 0 && short === 0){
      str = "一人 " + (price.value / num.value) + " 円ちょうどです！"
    }else{
      str = "一人 " + payLess + " 円だと" + short + " 円足りません" +
      "一人 " + payMore + " 円だと" + over + "円足りません";
    }

    result.textContent = str;
    reset.classList.remove("hidden");
  });

  price.addEventListener("keyup", checkInput);
  num.addEventListener("keyup", checkInput);

  reset.addEventListener("click", function(){
    result.textContent = "ここに結果を表示します";
    price.value = "";
    num.value = "";
    unit.value = 100;
    btn.classList.add("disabeled");
    this.classList.add("hidden");
    price.focus();
  });

  price.focus();

}());
