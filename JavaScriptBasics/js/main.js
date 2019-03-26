'use strict';

/*-------parseInt-------*/
// console.log(parseInt('5', 10) + 9); //5という文字を１０進数の数値に変換




/*-------for,if-------*/
// for(let i=0; i<10; i++){
//   // if(i === 4){
//   if(i % 3 === 0){
//     continue;  //continue以降の処理が実行されずにループする
//   }
//   else if (i === 5) {   //５になったらbreakする
//     break;
//   }
//   console.log(i);
// }





/*-------関数-------*/
// function showAd(message = "AD"){
//   console.log("------");
//   console.log(`--${message}--`);
//   console.log("------");
// }
//
// console.log("a");
// showAd();
// console.log("b");
// showAd("AD");

// function sum(a, b, c){
//   console.log(a + b + c);
// }

// const sum = function(a, b, c){
//   return a + b + c;
// };

// const sum = (a, b, c) => {
//   return a + b + c;
// };
{




/*--------関数式----------*/
  // const sum = (a, b, c) => a + b + c;
  //
  // console.log(sum(1, 2, 3));
  // console.log(sum(3, 4, 5));

  // const scores = [80, 90, 40];
  // console.log(scores[1]);
  //
  // scores[2] = 100;  //配列の中身はconstでも変更できる
  // console.log(scores.length);





/*------------クラス-------------*/
  // class Player{
  //   constructor(name, score){  //メソッド
  //     this.name = name;
  //     this.score = score;
  //   }
  //
  //   showInfo(){
  //     console.log(`name: ${this.name} score: ${this.score}`);
  //   }
  //
  //   static showVersion(){
  //     console.log("Player class version1.0");
  //   }
  // }
  //
  // class SoccerPlayer extends Player{  //Playerクラスを継承している子クラス
  //   constructor(name, score, number){
  //     super(name, score);  //親クラスのコンストラクタを呼ぶ
  //     this.number = number;
  //   }
  //   kick(){
  //     console.log("Gooooooooal!!!");
  //   }
  // }
  //
  // const tsubasa = new SoccerPlayer("tsubasa", 7, 40);
  // console.log(tsubasa);
  // tsubasa.kick();

  // const kihara = new Player("kihara", 32);
  // const koji = new Player("koji", 23);
  //
  // kihara.showInfo();
  // koji.showInfo();
  // Player.showVersion();

  // console.log(kihara.name);






/*------------クラス-------------*/
  // const kihara = {
  //   name: "kihara",
  //   score: 32
  // };
  // const koji = {
  //   name: "kihara",
  //   score: 32
  // };
  // console.log(player.name);
  // console.log(player["name"]);
  // player.score = 100;
  // console.log(player.score);
  // player.email = "kihara@gmail.com"
  // console.log(player.email);
  // delete player.score;
  // console.log(player);





/*------------配列-------------*/
// const a = [1, 5, 10, 100];
  /*add*/
// a.unshift(100);
// a.push(200, 300);
//
// console.log(a);

 /*remoce*/
 // a.shift();
 // a.pop();
 // console.log(a);

 /*splice*/
 // a.splice(2, 0, 6, 7);  //splice(変化を始めたい１の添え字, 削除したい要素, 追加したい要素・・・)
 // // a.splice(1, 2);
 // const removed = a.splice(1, 2);
 // console.log(removed);  //除去した数を取り出せる

 /*length*/
 // for(let i=0; i<a.length; i++){
 //   console.log(a[i]);
 // }


 /*forEach*/
 // a.forEach(item => {
 //   console.log(item);
 // });

 // a.forEach(item => {  //itemに配列の値となるものが１つずつ代入されていく
 //   console.log(item);  //return
 // });

 // a.forEach((item, index) => {
 //   console.log(`${index} : ${item}`);
 // })

 // const b = [];
 // a.forEach((item) => {
 //   b.push(item * 2);
 // });
 // console.log(b);


 /*map*/
 // const b = a.map(item => item * 2);   //配列の全てに対して処理を行ってくれるメソッド

 // const b = a.filter(item => item % 2 === 0);  //真偽値を与えてtrueの時だけ返してもらうメソッド
 // console.log(b);







 /*Object*/
 // const o = {
 //   a: 1,
 //   b: 2,
 // }
 // // console.log(Object.keys(o));  // ["a", "b"]
 // // console.log(Object.values(o));  // [1, 2]
 // // console.log(Object.entries(o));  // [["a", 1], ["b", 2]]
 //
 // Object.keys(o).forEach(key => {
 //   console.log(`${key} : ${o[key]}`);
 // })





  /*スプレッド演算子*/
  // const a = [10, 20];
  // const b = [1, 2, ...a];   // [1, 2, 10, 20]
  // console.log(b);

  // const a = [10, 20];
  // const sum = (a, b) => a + b;
  // console.log(sum(...a));

  // const o1 = {a: 1};
  // const o2 = {...o1, b: 2};
  // console.log(o2);





  /*分割代入*/
  // const numbers = [1, 2, 3, 8];
  // const [a, b, ...rest] = numbers;  //  const a = numbers[0]; const b = numbers[1]; 分割代入
  // console.log(a);
  // console.log(b);
  // console.log(rest);

  // const player = {
  //   name: "kihara",
  //   score: 55,
  //   hp: 33,
  //   mp: 22,
  // }
  // const {name, score, ...points} = player;  //{}--->オブジェクト
  // console.log(name);
  // console.log(score);
  // console.log(points);






  /*文字列を操作しよう*/
  // const str = "hello";
  // // console.log(str.length);
  // // console.log(str.substring(2, 4));  //substring(start, end)
  // console.log(str[1]);





  /*Math*/
  // console.log(Math.PI);
  // console.log(Math.random());
  // console.log(Math.floor(Math.random() * 6 + 1));




  /*Date*/
  // const d = new Date();
  // console.log(d);
  // console.log(d.getFullYear());
  // console.log(d.getMonth());
  // console.log(d.getDate());  //0-11
  // console.log(d.getDay());  //曜日
  // console.log(d.getHours());
  // console.log(d.getMinutes());
  // console.log(d.getSeconds());
  // console.log(d.getMilliseconds());   //1000分の1秒単位




  /*Dateの操作*/
  // const d = new Date(2018, 11);  //2018/12/01 00:00:00
  // d.setHours(10, 20, 30);  //2018/12/01 10:20:30
  // d.setDate(32);  //2019/01/01 10:20:30
  // d.setDate(d.getDate() + 3);   //2019/01/04 10:20:30
  //
  // const d1 = new Date(2018, 11, 1);
  // const d2 = new Date(2018, 11, 10);
  // console.log(d2 - d1);




  /*alert,confirm*/
  // window.alert("hello");
  // const answer = confirm("ok?");
  // console.log(answer);




  /*setInterval   一定時間ごとに命令を実行する*/
  // let i = 0;
  //
  // const showTime  = () => {
  //   console.log(new Date);
  //   i++;
  //   if(i > 2){
  //     clearInterval(timerId);
  //   }
  // }
  //
  // let timerId = setInterval(showTime, 1000);



  /*setTimeout   一定時間後に命令を実行する*/
  // let i = 0;
  //
  // const showTime = () => {
  //   console.log(new Date());
  //   const timerId = setTimeout(showTime, 1000);
  //   i++;
  //   if(i > 2){
  //     clearTimeout(timerId);
  //   }
  // }
  // showTime();






  /*例外処理*/
  // const a = 5;
  //
  // try{
  //   console.log(a.toUpperCase());
  // }catch(e){
  //   console.log(e.message);
  // }
  // console.log("finish!");

}
