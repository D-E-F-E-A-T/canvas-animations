const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#EEEEE";
// speeds
let y1 = 0;
let y2 = 0;
let y3 = 0;

const clearCanvas = () => {
  ctx.clearRect(0, 0, 700, 450);
};

const updateCanvas = () => {
  y1 += 1;
  y2 += 2;
  y3 += 3;
  clearCanvas();
  ctx.fillRect(50, 450 - y1, 50, 50);
  ctx.fillRect(150, 450 - y2, 50, 50);
  ctx.fillRect(250, 450 - y3, 50, 50);
  window.requestAnimationFrame(updateCanvas);
};

window.requestAnimationFrame(updateCanvas);
