'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSimilar = document.querySelector('.setup-similar');
var userNameInput = setup.querySelector('.setup-user-name');

var setDefaultPosition = function () {
  setup.style.top = '80px';
  setup.style.left = '50%';
};

var createWizard = function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Пупа', 'Топольницкая', 'Вашингтон'];
  var secondName = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' и Лупа', ' Нионго', ' Ирвинг'];
  var color = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyeColor = ['red', 'black', 'blue', 'yellow', 'green'];

  var createName = function (name, surName) {
    return name[window.util.randomNumber(0, name.length)] + '' + surName[window.util.randomNumber(0, name.length)];
  };

  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: createName(firstName, secondName),
      coatColor: color[window.util.randomNumber(0, color.length)],
      eyesColor: eyeColor[window.util.randomNumber(0, eyeColor.length)]
    });
  }


  for (i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    similarListElement.appendChild(wizardElement);
  }
};

createWizard();

var onPopupEscPress = function (evt) {
  window.util.isEscEvent(evt, closePopup);
};

var openPopup = function () {
  setup.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  if (document.activeElement === userNameInput) {
    return;
  } else {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setDefaultPosition();
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  window.util.isEnterEvent(evt, openPopup);
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  window.util.isEnterEvent(evt, closePopup);
});


var dialogHandler = setup.querySelector('.upload');
dialogHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;
    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };
    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    setup.style.top = (setup.offsetTop - shift.y) + 'px';
    setup.style.left = (setup.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    if (dragged) {
      var onClickPreventDefault = function (evnt) {
        evnt.preventDefault();
        dialogHandler.removeEventListener('click', onClickPreventDefault);
      };
      dialogHandler.addEventListener('click', onClickPreventDefault);
    }
  };
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
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
