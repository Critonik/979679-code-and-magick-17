'use strict';

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var COLORS = {
    rgb: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    hex: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    default: ['red', 'black', 'blue', 'yellow', 'green']
  };

  return {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    colorize: function (el, elInput, colorType) {
      el.addEventListener('click', function () {
        if (el.tagName.toLowerCase() === 'use') {
          elInput.value = COLORS[colorType][window.util.getRandomInt(0, colorType.length)];
          el.style.fill = elInput.value;
        } else {
          elInput.value = COLORS[colorType][window.util.getRandomInt(0, colorType.length)];
          el.style.backgroundColor = elInput.value;
        }
      });
    }
  };
})();
