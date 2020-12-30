const holder = document.querySelector(".holder");
let flag = 18;
let items = [
  [1, 0, "one"],
  [2, 0, "two"],
  [3, 0, "three"],
  [4, 0, "four"],
  [5, 0, "five"],
  [6, 0, "six"],
  [7, 0, "seven"],
  [8, 0, "eight"],
  [9, 0, "nine"],
  [10, 0, "ten"],
  [11, 0, "eleven"],
  [12, 0, "tweleve"],
  [13, 0, "thirteen"],
  [14, 0, "fourteen"],
  [15, 0, "fifteen"],
  [16, 0, "sixteen"],
  [17, 0, "seventeen"],
  [18, 0, "eighteen"],
];

for (let i = 0; i <= 35; i++) {
  const div = document.createElement("div");
  div.style.color = "coral";
  holder.appendChild(div);
}
