const img = new Image();
img.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png';
const CanvasXSize = 800;
const CanvasYSize = 200;
const speed = 30;
const scale = 1.05;
let y = 0;

let dx = 0.75;
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;
let ctx;

img.onload = () => {
  imgW = img.width * scale;
  imgH = img.height * scale;
  if (imgW > CanvasXSize) {
    x = CanvasXSize - imgW;
  }
  if (imgW > CanvasXSize) {
    clearX = imgW;
  } else {
    clearX = CanvasXSize;
  }
  if (imgH > CanvasYSize) {
    clearY = imgH;
  } else {
    clearY = CanvasYSize;
  }
  ctx = document.getElementById('canvas').getContext('2d');
  return setInterval(draw, speed);
};

function draw() {
  ctx.clearRect(0, 0, clearX, clearY);
  if (imgW <= CanvasXSize) {
    if (x > CanvasXSize) {
      x = -imgW + x;
    }
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }
    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  } else {
    if (x > (CanvasXSize)) {
      x = CanvasXSize - imgW;
    }
    if (x > (CanvasXSize - imgW)) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }
  ctx.drawImage(img, x, y, imgW, imgH);
  x += dx;
}
