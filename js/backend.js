'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  window.save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    var submitButton = document.querySelector('.setup-submit');
    submitButton.setAttribute('disabled', true);


    xhr.addEventListener('error', function () {
      onError('Произошла ошибка загрузки');
    });

    xhr.open('POST', URL);
    xhr.send(data);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
        submitButton.removeAttribute('disabled');
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

  };
})();

(function () {
  var URL = 'https://js.dump.academy/code-and-magick/data';

  window.load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000; // 10s

    xhr.open('GET', URL);
    xhr.send();
  };
})();
