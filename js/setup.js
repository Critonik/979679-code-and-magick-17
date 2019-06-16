'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Пупа', 'Топольницкая', 'Вашингтон'];
var secondName = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' и Лупа', ' Нионго', ' Ирвинг'];
var color = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColor = ['red', 'black', 'blue', 'yellow', 'green'];
var fireballValue = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSimilar = document.querySelector('.setup-similar');
var userNameInput = setup.querySelector('.setup-user-name');

var wizardSetup = document.querySelector('.setup-wizard');
var wizardCoat = wizardSetup.querySelector('.wizard-coat');
var wizardCoatInput = document.getElementById('coat-color');
var wizardEyes = wizardSetup.querySelector('.wizard-eyes');
var wizardEyesInput = document.getElementById('eyes-color');
var fireball = document.querySelector('.setup-fireball-wrap');
var fireballInput = fireball.querySelector('input');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var onPopupEscPress = function (evt) {
  if (document.activeElement === userNameInput) {
    return;
  } else {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var createName = function (name, surName) {
  return name[getRandomInt(0, name.length)] + '' + surName[getRandomInt(0, name.length)];
};

var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards.push({
    name: createName(firstName, secondName),
    coatColor: color[getRandomInt(0, color.length)],
    eyesColor: eyeColor[getRandomInt(0, eyeColor.length)]
  });
}

for (i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = color[getRandomInt(0, color.length)];
  wizardCoatInput.value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = eyeColor[getRandomInt(0, eyeColor.length)];
  wizardEyesInput.value = wizardCoat.style.fill;
});

fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = fireballValue[getRandomInt(0, fireballValue.length)];
  fireballInput.value = fireball.style.backgroundColor;
});
