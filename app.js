const modal = document.querySelector(".modal-container");
const start = document.querySelector(".begin-button");
const blocker = document.querySelector(".blocker");
let allDivs = Array.from(holder.children);

start.addEventListener("click", () => {
  modal.style.display = "none";
  blocker.style.display = "none";
});

for (let i = 0; i < allDivs.length; i++) {
  let ran = Math.floor(Math.random() * flag);
  if (items[ran][1] < 2) {
    allDivs[i].textContent = items[ran][0];
    allDivs[i].setAttribute("class", items[ran][2] + items[ran][1]);
    items[ran][1]++;
    if (items[ran][1] === 2) {
      items.splice(items.indexOf(items[ran]), 1);
      flag--;
    }
  }
}

allDivs.forEach((e) => e.classList.add("aligner"));

let count = 0;
let map = new Map();
let obj = Object.create(null);

allDivs.forEach((ele) => {
  ele.addEventListener("click", () => {
    console.log(count);
    ele.style.transition = "all 0.4s";
    ele.style.transform = "rotateY(360deg)";
    ele.style.color = "black";

    map.set(ele.textContent, +ele.textContent);
    let hold = ele.classList.value.split(" ")[0];
    Object.defineProperty(obj, hold, {
      value: hold,
      writable: true,
      enumerable: true,
      configurable: true,
    });

    let keysOfObj = Object.keys(obj);
    let selectOut = document.querySelector(`.${keysOfObj[0]}`);
    selectOut.style.pointerEvents = "none";

    if (count >= 1) {
      selectOut.style.pointerEvents = "initial";
      console.log(map.size);
      if (map.size >= 2) {
        let keysOfObj = Object.keys(obj);
        let select1 = document.querySelector(`.${keysOfObj[0]}`);
        let select2 = document.querySelector(`.${keysOfObj[1]}`);
        setTimeout(() => {
          console.log(select1, select2);
          select1.style.transition = "all 0.4s";
          select1.style.transform = "rotateY(-360deg)";
          select2.style.transition = "all 0.4s";
          select2.style.transform = "rotateY(-360deg)";
          select1.style.color = "coral";
          select2.style.color = "coral";
          obj = {};
          map.clear();
        }, 500);
      } else {
        let keysOfObj = Object.keys(obj);
        let select1 = document.querySelector(`.${keysOfObj[0]}`);
        let select2 = document.querySelector(`.${keysOfObj[1]}`);
        select1.style.pointerEvents = "none";
        select2.style.pointerEvents = "none";
        obj = {};
        map.clear();
      }
      count = 0;
    } else {
      count++;
      console.log(count);
    }
    console.log(map);
  });
});
