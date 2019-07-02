'use strict';
(function () {
  var wizardSetup = document.querySelector('.setup-wizard');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');
  var wizardCoatInput = document.getElementById('coat-color');
  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var wizardEyesInput = document.getElementById('eyes-color');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = fireball.querySelector('input');
  var COLORS = {
    rgb: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    hex: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    default: ['red', 'black', 'blue', 'yellow', 'green']
  };

  wizardCoat.addEventListener('click', function () {
    var newColor = COLORS['rgb'][window.util.getRandomInt(0, 'rgb'.length)];
    wizardCoatInput.value = newColor;
    wizardCoat.style.fill = wizardCoatInput.value;
    window.wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = COLORS['default'][window.util.getRandomInt(0, 'default'.length)];
    wizardEyesInput.value = newColor;
    wizardEyes.style.fill = wizardEyesInput.value;
    window.wizard.onEyesChange(newColor);
  });

  fireball.addEventListener('click', function () {
    var newColor = COLORS['hex'][window.util.getRandomInt(0, 'hex'.length)];
    fireballInput.value = newColor;
    fireball.style.backgroundColor = newColor;
  });

})();
