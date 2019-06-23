'use strict';
(function () {
  var wizardSetup = document.querySelector('.setup-wizard');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');
  var wizardCoatInput = document.getElementById('coat-color');
  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var wizardEyesInput = document.getElementById('eyes-color');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = fireball.querySelector('input');
  var color = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyeColor = ['red', 'black', 'blue', 'yellow', 'green'];
  var fireballValue = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.util.colorize(wizardCoat, wizardCoatInput, color);
  window.util.colorize(wizardEyes, wizardEyesInput, eyeColor);
  window.util.backgroundColorize(fireball, fireballInput, fireballValue);
})();
