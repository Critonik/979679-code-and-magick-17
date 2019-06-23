'use strict';
(function () {
  var wizardSetup = document.querySelector('.setup-wizard');
  var wizardCoat = wizardSetup.querySelector('.wizard-coat');
  var wizardCoatInput = document.getElementById('coat-color');
  var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
  var wizardEyesInput = document.getElementById('eyes-color');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballInput = fireball.querySelector('input');

  window.util.colorize(wizardCoat, wizardCoatInput, 'rgb');
  window.util.colorize(wizardEyes, wizardEyesInput, 'default');
  window.util.colorize(fireball, fireballInput, 'hex');
})();
