'use strict';
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Пупа', 'Топольницкая', 'Вашингтон'];
var secondName = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' и Лупа', ' Нионго', ' Ирвинг'];
var color = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColor = ['red', 'black', 'blue', 'yellow', 'green'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var createName = function (name, surName) {
  return name[getRandomInt(0, name.length)] + '' + surName[getRandomInt(0, name.length)];
};

var wizards = [];

for (var i = 0; i < 4; i++) {
  var name = createName(firstName, secondName);
  wizards.push({
    name: name,
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
