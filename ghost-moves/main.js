const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';
ctx.font = '18px serif';

const ghost = {
  x: 25,
  y: 25,
  moveUp() { this.y -= 25; },
  moveDown() { this.y += 25; },
  moveLeft() { this.x -= 25; },
  moveRight() { this.x += 25; },
  reset() {
    this.x = 50;
    this.y = 50;
  },
};

function draw(ghost) {
  const img = new Image();
  img.onload = function () {
    ctx.drawImage(img, ghost.x, ghost.y, 50, 50);
  };
  img.src = 'https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif';
}


document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38: ghost.moveUp(); console.log('up', ghost); break;
    case 40: ghost.moveDown(); console.log('down', ghost); break;
    case 37: ghost.moveLeft(); console.log('left', ghost); break;
    case 39: ghost.moveRight(); console.log('right', ghost); break;
//  case spacebar: ghost.reset(); console.log(reset, ghost); break;
  }
  updateCanvas();
};

function updateCanvas() {
  ctx.clearRect(0, 0, 1500, 1700);
  ctx.fillText(`Ghost_x: ${ghost.x}`, 580, 40);
  ctx.fillText(`Ghost_y: ${ghost.y}`, 580, 60);
  draw(ghost);
}

updateCanvas();
