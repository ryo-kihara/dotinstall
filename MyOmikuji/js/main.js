'use strict';
{
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    // const results = ["大吉", "中吉", "凶", "中吉"];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];

    const n = Math.random();
    if(n < 0.05){
      btn.textContent = "大吉";
    }
    else if(n < 0.2){
      btn.textContent = "中吉";
    }
    else {
      btn.textContent = "凶";
    }

    // btn.textContent = n;
    // switch (n) {
    //   case 0:
    //     btn.textContent = "大吉";
    //     break;
    //   case 1:
    //     btn.textContent = "中吉";
    //     break;
    //   case 2:
    //     btn.textContent = "吉";
    //     break;
    //   default:
    //     break;
    // }
  })

  btn.addEventListener("mousedown", () => {
    btn.classList.add("pressed");
  })

  btn.addEventListener("mouseup", () => {
    btn.classList.remove("pressed");
  })
}
