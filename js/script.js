let infoMessage = document.getElementById("circle0");
let magicText = document.getElementById("crystalball");

function infoButtonClick() {
  console.log("info button was clicked");
  magicText.textContent =
    "Click each labeled bubble to see holiday wishes from that ITP student";
}
circle0.addEventListener("click", infoButtonClick);
//andy
//andy
let andyMessage = document.getElementById("circle1");
let andyMagicText = document.getElementById("crystalball");

function andyButtonClick() {
  console.log("andy's button was clicked");
  andyMagicText.textContent =
    "Thank you so much for teaching us this year! I can't even put into words how much it means to me.";
}
circle1.addEventListener("click", andyButtonClick);

//yaya
let yayaMessage = document.getElementById("circle1");
let yayaMagicText = document.getElementById("crystalball");

function yayaButtonClick() {
  console.log("yaya's button was clicked");
  yayaMagicText.textContent =
    "You wield your laptop like a wizard's wand, casting codes, creating neural pathways strong. With every click, new worlds unfold,In your classroom, bloodlines turn gold!💚 - Yaya";
}
circle2.addEventListener("click", yayaButtonClick);

//cassy
let cassyMessage = document.getElementById("circle1");
let cassyMagicText = document.getElementById("crystalball");

function cassyButtonClick() {
  console.log("cassy's button was clicked");
  cassyMagicText.textContent =
    "A good education can chance anyone. A good teacher can change everything! -Cassy";
}
circle3.addEventListener("click", cassyButtonClick);

//tiamoa
let tiamoaMessage = document.getElementById("circle1");
let tiamoaMagicText = document.getElementById("crystalball");

function tiamoaButtonClick() {
  console.log("tiamoa's button was clicked");
  tiamoaMagicText.textContent =
    "✨ Merry X-MAS 🎄 and Happy New Years 🪴 #BLESSINGS ✨ - Tia";
}
circle4.addEventListener("click", tiamoaButtonClick);

//makeba
let makebaMessage = document.getElementById("circle1");
let makebaMagicText = document.getElementById("crystalball");

function makebaButtonClick() {
  console.log("makeba's button was clicked");
  makebaMagicText.textContent =
    "May your holidays be as enriching as the knowledge you shared with me. -Makeba";
}
circle5.addEventListener("click", makebaButtonClick);

//dharshina
let dharshinaMessage = document.getElementById("circle1");
let dharshinaMagicText = document.getElementById("crystalball");

function dharshinaButtonClick() {
  console.log("dharshina's button was clicked");
  dharshinaMagicText.textContent =
    "Thank you ladies for the hard work and patience with me. It's forever appreciated. -Dharshina";
}
circle6.addEventListener("click", dharshinaButtonClick);
//nina
let ninaMessage = document.getElementById("circle1");
let ninaMagicText = document.getElementById("crystalball");

function ninaButtonClick() {
  console.log("nina's button was clicked");
  ninaMagicText.textContent =
    "It must take a lot of courage to sign up to teach some of the most undervalued members of society. Thanks for being brave and standing with us. - NINA";
}
circle7.addEventListener("click", ninaButtonClick);

//jolaine
let jolaineMessage = document.getElementById("circle1");
let jolaineMagicText = document.getElementById("crystalball");

function jolaineButtonClick() {
  console.log("jolaine's button was clicked");
  jolaineMagicText.textContent =
    "Happy Holidays and wishing you the best year yet! - Jolaine";
}
circle8.addEventListener("click", jolaineButtonClick);

//hunter
let hunterMessage = document.getElementById("circle1");
let hunterMagicText = document.getElementById("crystalball");

function hunterButtonClick() {
  console.log("hunter's button was clicked");
  hunterMagicText.textContent = "hunter's message";
}
circle9.addEventListener("click", hunterButtonClick);

//ally
let allyMessage = document.getElementById("circle1");
let allyMagicText = document.getElementById("crystalball");

function allyButtonClick() {
  console.log("ally's button was clicked");
  allyMagicText.textContent =
    "I hope you realize how impactful your teaching is! It’s life changing :) thank you for being so patient with me and for really taking the time to help me understand me and the material. You are both AMAZING and I will miss you both sooo much - Ally";
}
circle11.addEventListener("click", allyButtonClick);

(function () {
  var c1 = document.getElementById("c1");
  var c2 = document.getElementById("c2");
  var ctx1 = c1.getContext("2d");
  var ctx2 = c2.getContext("2d");
  c1.height = 300;
  c1.width = 300;
  c2.height = 300;
  c2.width = 300;

  ctx1.fillStyle = "white";
  ctx2.fillStyle = "white";
  var c1Flakes = [];
  var c2Flakes = [];

  function Flake(r) {
    this.x = Math.random() * 300;
    this.y = Math.random() * 250;
    this.r = r;
  }

  for (var i = 0; i <= 80; i++) {
    var flake = new Flake(2);
    c1Flakes.push(flake);
  }

  for (var i = 0; i <= 80; i++) {
    var flake = new Flake(3);
    c2Flakes.push(flake);
  }

  function render() {
    ctx1.clearRect(0, 0, 300, 300);
    ctx2.clearRect(0, 0, 300, 300);
    ctx1.globalAlpha = 0.4; // Adjust this value between 0 and 1
    ctx2.globalAlpha = 0.3; // Adjust this value between 0 and 1
    for (var i = 0; i < c1Flakes.length; i++) {
      ctx1.beginPath();
      ctx1.arc(c1Flakes[i].x, c1Flakes[i].y, c1Flakes[i].r, 0, Math.PI * 2);
      ctx1.fill();
      if (c1Flakes[i].y <= 245) {
        c1Flakes[i].y += 0.3;
      } else {
        c1Flakes[i].y = 0;
      }
    }

    for (var i = 0; i < c2Flakes.length; i++) {
      ctx2.beginPath();
      ctx2.arc(c2Flakes[i].x, c2Flakes[i].y, c2Flakes[i].r, 0, Math.PI * 2);
      ctx2.fill();
      if (c2Flakes[i].y <= 245) {
        c2Flakes[i].y += 0.6;
      } else {
        c2Flakes[i].y = 0;
      }
    }
    requestAnimationFrame(render);
  }
  render();
})();
