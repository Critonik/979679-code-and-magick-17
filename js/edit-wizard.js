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

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  wizardCoat.addEventListener('click', function () {
    wizardCoatInput.value = color[getRandomInt(0, color.length)];
    wizardCoat.style.fill = wizardCoatInput.value;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyesInput.value = eyeColor[getRandomInt(0, eyeColor.length)];
    wizardEyes.style.fill = wizardEyesInput.value;
  });

  fireball.addEventListener('click', function () {
    fireballInput.value = fireballValue[getRandomInt(0, fireballValue.length)];
    fireball.style.backgroundColor = fireballInput.value;
  });
})();
