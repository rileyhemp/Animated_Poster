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
}
//# sourceMappingURL=main.js.map
