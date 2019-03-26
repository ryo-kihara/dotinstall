'use strict';
{
  /*#1 dom*/
  // document.body.textContent = "hello";
  // document.title = "changed!";


  /*#2*/
  // document.getElementById("target").textContent = "Changed!"



  /*#3 querySelector*/
  // document.querySelector("h1").textContent = "H1!!";
  // document.querySelectorAll("li:nth-child(odd)").forEach(li => {
  //   li.textContent = "li!";
  // })


  /*#4 親、子要素を指定してみよう*/
  // const ul = document.querySelector("ul");
  // console.log(ul.parentNode);
  // console.log(ul.children);
  //
  // console.log(ul.children[0]);
  // for(let i=0; i<ul.children.length; i++){
  //   console.log(ul.children[i]);
  // }



  /*#5 要素の属性を操作してみよう*/
  // const h1 = document.querySelector("h1");
  // h1.title = "Changed";
  // console.log(h1.title);
  //
  // h1.style.color = "gray";
  // h1.style.backgroundColor = "pink";




  /*#6 カスタムデータ属性を扱ってみよう(属性を使ったり、作ったりできる)*/
  // const h1 = document.querySelector("h1");
  //
  // console.log(h1.dataset.appId);
  // h1.dataset.messege = "this is custom message!";




  /*#7 クラス属性を操作してみよう*/
    // const div = document.querySelector("div");
    //
    // div.className = "box border-pink";




  /*#8 classListを使ってみよう*/
  // const div = document.querySelector("div");
  // // div.classList.add("border-pink");
  // // div.classList.remove("box");
  //
  // // if(div.classList.contains("border-pink")){
  // //   div.classList.remove("border-pink");
  // // }else {
  // //   div.classList.add("border-pink");
  // // }
  //
  // div.classList.toggle("border-pink");  //上の条件分岐と全く同じ意味




  /*#9 要素を生成してみよう*/
  // const h1 = document.createElement("h1");
  // h1.textContent = "Title";
  // document.body.appendChild(h1);  //bodyの最後の子要素として追加
  //
  // const p = document.createElement("p");
  // p.textContent = "Hello, hello, hello";
  // document.body.appendChild(p);  //bosyの一番最後
  //
  // const h2 = document.createElement("h2");
  // h2.textContent = "Sub Title";
  // document.body.insertBefore(h2, p);   //bodyのなかのpの前にh2を追加




  /*#10 要素のコピー、削除をしてみよう*/
  // const h1 = document.createElement("h1");
  // h1.textContent = "Title";
  // document.body.appendChild(h1);
  //
  // const p = document.createElement("p");
  // p.textContent = "hello";
  // document.body.appendChild(p);
  //
  // const h2 = document.createElement("h2");
  // h2.textContent = "Sub Title";
  // document.body.insertBefore(h2, p);
  //
  // const copy = p.cloneNode(true);
  // // const copy = p.cloneNode(false); //空のp要素を作る
  // document.body.insertBefore(copy, h2);
  //
  // document.body.removeChild(h2);





  /*#11 テキスト入力部品を操作してみよう*/
  // const text = document.querySelector("input[type=text]");
  // const textarea = document.querySelector("textarea");
  //
  // console.log(text.value);
  // console.log(textarea.value);

  // text.focus();
  // text.select();
  // text.disabled = true;





  /*#12 フォーム部品を操作してみよう*/
  // console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked);
  // console.log(document.querySelectorAll('input[type="checkbox"]')[1].checked);

  // document.querySelectorAll('input[type="checkbox"]')[0].checked = true;

  // console.log(document.querySelectorAll('input[type="radio"]')[0].checked);
  // console.log(document.querySelectorAll('input[type="radio"]')[1].checked);

  // document.querySelectorAll('input[type="radio"]')[1].checked = true;

  // document.querySelectorAll('select > option')[2].selected = true;





  /*#13 イベントリスナーを使ってみよう*/
  // const button = document.querySelector('button');
  // button.addEventListener('dblclick', () => {
  //   console.log('clicked!');
  // })





  /*#14 イベントオブジェクトを扱ってみよう*/
  // const div = document.querySelector('div');
  //
  // document.addEventListener('mousemove', e => {
  //   div.textContent = `${e.clientX}:${e.clientY}`;
  // });






  /*#15 prebentDefaultを使ってみよう*/
  const a = document.querySelector("a");
  const span = document.querySelector("span");

  a.addEventListener("click", e => {
    e.preventDefault();   //要素の規定の動作をキャンセルする href属性が空のため、どこにも飛ばないということをキャンセルする
    a.classList.add("hidden");
    span.classList.remove("hidden");
  })



}
