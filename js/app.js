// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d')

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = '01000001 01101100 01101100 00100000 01110100 01101000'
 + '01100001 01110100 00100000 01101001 01110011 00100000'
 + '01100111 01101111 01101100 01100100 00100000'
 + '01100100 01101111 01100101 01110011 00100000 01101110'
 + '01101111 01110100 00100000 01100111 01101100 01101001'
 + '01110100 01110100 01100101 01110010 00101100 00001010'
 + '01001110 01101111 01110100 00100000 01100001 01101100'
 + '01101100 00100000 01110100 01101000 01101111 01110011'
 + '01100101 00100000 01110111 01101000 01101111 00100000'
 + '01110111 01100001 01101110 01100100 01100101 01110010'
 + '00100000 01100001 01110010 01100101 00100000 01101100'
 + '01101111 01110011 01110100 00111011 00001010 01010100'
 + '01101000 01100101 00100000 01101111 01101100 01100100'
 + '00100000 01110100 01101000 01100001 01110100 00100000'
 + '01101001 01110011 00100000 01110011 01110100 01110010'
 + '01101111 01101110 01100111 00100000 01100100 01101111'
 + '01100101 01110011 00100000 01101110 01101111 01110100'
 + '00100000 01110111 01101001 01110100 01101000 01100101'
 + '01110010 00101100 00001010 01000100 01100101 01100101'
 + '01110000 00100000 01110010 01101111 01101111 01110100'
 + '01110011 00100000 01100001 01110010 01100101 00100000'
 + '01101110 01101111 01110100 00100000 01110010 01100101'
 + '01100001 01100011 01101000 01100101 01100100 00100000'
 + '01100010 01111001 00100000 01110100 01101000 01100101'
 + '00100000 01100110 01110010 01101111 01110011 01110100'
 + '00101110 00001010 00001010 01000110 01110010 01101111'
 + '01101101 00100000 01110100 01101000 01100101 00100000'
 + '01100001 01110011 01101000 01100101 01110011 00100000'
 + '01100001 00100000 01100110 01101001 01110010 01100101'
 + '00100000 01110011 01101000 01100001 01101100 01101100'
 + '00100000 01100010 01100101 00100000 01110111 01101111'
 + '01101011 01100101 01101110 00101100 00001010 01000001'
 + '00100000 01101100 01101001 01100111 01101000 01110100'
 + '00100000 01100110 01110010 01101111 01101101 00100000'
 + '01110100 01101000 01100101 00100000 01110011 01101000'
 + '01100001 01100100 01101111 01110111 01110011 00100000'
 + '01110011 01101000 01100001 01101100 01101100 00100000'
 + '01110011 01110000 01110010 01101001 01101110 01100111'
 + '00111011 00001010 01010010 01100101 01101110 01100101'
 + '01110111 01100101 01100100 00100000 01110011 01101000'
 + '01100001 01101100 01101100 00100000 01100010 01100101'
 + '00100000 01100010 01101100 01100001 01100100 01100101'
 + '00100000 01110100 01101000 01100001 01110100 00100000'
 + '01110111 01100001 01110011 00100000 01100010 01110010'
 + '01101111 01101011 01100101 01101110 00101100 00001010'
 + '01010100 01101000 01100101 00100000 01100011 01110010'
 + '01101111 01110111 01101110 01101100 01100101 01110011'
 + '01110011 00100000 01100001 01100111 01100001 01101001'
 + '01101110 00100000 01110011 01101000 01100001 01101100'
 + '01101100 00100000 01100010 01100101 00100000 01101011'
 + '01101001 01101110 01100111 00101110';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .075)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = ' #0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 30);