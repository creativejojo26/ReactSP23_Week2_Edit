const today = Date.now();
const arr = new Array(101).fill(0);
const map1 = arr.map((item, index) => index).filter((item) => item % 2 === 0);

const result = map1
  .map((index) => today - index * 2 * 24 * 60 * 60 * 1000)
  .map((DOMHighResTimeStamp) => new Date(DOMHighResTimeStamp));

const randomValues = result.map((date) => ({
  date,
  val: Math.floor(Math.random() * 51)
}));

const dotContainer = document.getElementById("dot-container");

randomValues.forEach((item, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  const dotWidth = 10;
  const dotSpace = 3;
  const xPos = index * (dotWidth + dotSpace);

  const yPos = item.val;

  dot.style.left = xPos + "px";
  dot.style.transform = `translateY(-50%) translateY(${yPos}px)`;

  dotContainer.appendChild(dot);
});
