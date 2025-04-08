// scripts/rotate.js
const rotateImage = document.getElementById('rotateImage');
let frame = 1;
const totalFrames = 36;
const imagePath = 'produkty/karabina01/';
const imageFormat = '.png';

function updateImage() {
  frame = frame % totalFrames + 1;
  const frameStr = String(frame).padStart(2, '0');
  rotateImage.src = `${imagePath}${frameStr}${imageFormat}`;
}

setInterval(updateImage, 100); // 100ms = cca 10fps
