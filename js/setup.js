'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupSimilar = document.querySelector('.setup-similar');
var userNameInput = setup.querySelector('.setup-user-name');
var form = document.querySelector('.setup-wizard-form');
var submitButton = document.querySelector('.setup-submit');
var setDefaultPosition = function () {
  setup.style.top = '80px';
  setup.style.left = '50%';
};

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);
})();

var onError = function (errorMessage) {
  var node = document.createElement('div');
  node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = '30px';

  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
};

form.addEventListener('submit', function (evt) {
  window.save(new FormData(form), function () {
    form.classList.add('hidden');
  }, onError, submitButton);
  evt.preventDefault();
});

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
