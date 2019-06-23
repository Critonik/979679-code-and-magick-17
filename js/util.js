'use strict';

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

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
    randomNumber: function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    colorize: function setColor(el, elInput, colorType) {
      el.addEventListener('click', function () {
        elInput.value = colorType[window.util.randomNumber(0, colorType.length)];
        el.style.fill = elInput.value;
      });
    },
    backgroundColorize: function setBackgroundColor(elem, elemInput, colorType) {
      elem.addEventListener('click', function () {
        elemInput.value = colorType[window.util.randomNumber(0, colorType.length)];
        elem.style.backgroundColor = elemInput.value;
      });
    }
  };
})();
