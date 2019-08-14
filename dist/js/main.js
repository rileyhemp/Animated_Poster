"use strict";

var stripesContainer = document.querySelector('.stripes');
var horizontalLinesContainer = document.querySelector('.horizontal-lines');
var verticalLinesContainer = document.querySelector('.vertical-lines');
var comet = document.querySelector('.comet');
comet.addEventListener('animationiteration', function () {
  var random = Math.random() * 30;
  comet.style["animation-duration"] = random + 's';
});

for (var i = 0; i < 19; i++) {
  var stripeOuter = document.createElement('div');
  var stripeInner = document.createElement('div');
  stripeOuter.classList.add("stripe", "stripe-".concat(i));
  stripeOuter.appendChild(stripeInner);
  stripesContainer.appendChild(stripeOuter);
}

for (var _i = 0; _i < 26; _i++) {
  var lineOuter = document.createElement('div');
  var lineInner = document.createElement('div');
  lineOuter.classList.add("h-line", "h-line-".concat(_i));
  lineOuter.appendChild(lineInner);
  horizontalLinesContainer.appendChild(lineOuter);
}

for (var _i2 = 0; _i2 < 8; _i2++) {
  var _lineOuter = document.createElement('div');

  var _lineInner = document.createElement('div');

  _lineOuter.classList.add("v-line", "v-line-".concat(_i2));

  _lineOuter.appendChild(_lineInner);

  verticalLinesContainer.appendChild(_lineOuter);
} //Changes color when you click on the sun


var index1 = 0;
var index2 = 0;
var sunClickable = document.querySelector('.sun-clickable');
sunClickable.addEventListener('click', function () {
  var sun = document.querySelector('.sun');
  var gradient1 = document.querySelector('.back-gradient-down');
  var gradient2 = document.querySelector('.front-gradient-down');
  var gradient3 = document.querySelector('.front-gradient-up');
  var car = document.querySelector('.car');
  var hues1 = [0, 45, 90, 135, 180, 225, 270, 315];
  var hues2 = [0, 90, 180, 270];

  if (index2 < hues2.length - 1) {
    index2++;
  } else {
    index2 = 0;
  }

  if (index1 < hues1.length - 1) {
    index1++;
  } else {
    index1 = 0;
  }

  sun.style.filter = "hue-rotate(".concat(hues2[index2], "deg)");
  gradient1.style.filter = "hue-rotate(".concat(hues1[index1], "deg)");
  gradient2.style.filter = "hue-rotate(".concat(hues1[index1], "deg)");
  gradient3.style.filter = "hue-rotate(".concat(hues1[index1], "deg)");
  car.style.filter = "hue-rotate(".concat(hues1[index1], "deg)");
}); //Lights up the Chrysler building 

var building = document.querySelector('.city-building-clickable');
var buildingIsLit = false;
building.addEventListener('click', function () {
  var chryslerBuilding = document.querySelector('.city-building');

  if (!buildingIsLit) {
    buildingIsLit = true;
    chryslerBuilding.style.filter = "brightness(1)";
  } else {
    buildingIsLit = false;
    chryslerBuilding.style.filter = "brightness(0)";
  }
}); //Makes the road go faster 

var index3 = 0;
var grid = document.querySelector('.grid-clickable');
grid.addEventListener('click', function () {
  console.log('clicked');
  var lines = document.querySelector('.horizontal-lines');
  var speed = [.8, .5, .3, .1, .075];

  if (index3 < speed.length - 1) {
    index3++; //Waits for the end of animation to speed up. 

    lines.addEventListener('animationiteration', function () {
      lines.style.animationDuration = speed[index3] + "s";
    });
  } else {
    index3 = 0;
    lines.addEventListener('animationiteration', function () {
      lines.style.animationDuration = speed[index3] + "s";
    });
  }
});
var lights = document.querySelectorAll('.light');
console.log(lights);

for (var _i3 = 0; _i3 < lights.length; _i3++) {
  lights[_i3].addEventListener('click', function () {
    if (this.classList.contains('main-headlights')) {
      this.classList.toggle('light-off');

      if (this.classList.contains('light1')) {
        document.querySelector('.headlight-left').classList.toggle('hidden');
      } else if (this.classList.contains('light2')) {
        document.querySelector('.headlight-right').classList.toggle('hidden');
      } else return;
    } else {
      this.classList.toggle('blinkers');

      if (this.classList.contains('left-blinker')) {
        document.querySelector('.right-blinker').classList.remove('blinkers');
      } else {
        document.querySelector('.left-blinker').classList.remove('blinkers');
      }
    }
  });
}

var logo = document.querySelector('.logo-clickable');
logo.addEventListener('click', function () {
  console.log('hi');
  var allDivs = document.querySelectorAll('.main');

  for (var _i4 = 0; _i4 < allDivs.length; _i4++) {
    allDivs[_i4].classList.toggle('desaturated');
  }
});
//# sourceMappingURL=main.js.map
