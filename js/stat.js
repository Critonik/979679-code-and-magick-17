'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var DOUBLE_GAP = 20;
  var FONT_GAP = 60;
  var TEXT_WIDTH = 50;
  var BAR_WIDTH = 40;
  var barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH - FONT_GAP;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var getMaxElement = function (arr) {

    var maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
    ctx.font = '14px PT Mono';
    ctx.fillStyle = '#000';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', 130, 30);
    ctx.fillText('Список результатов', 130, 50);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'hsl(0, 100%, 50%)';
      } else {
        ctx.fillStyle = 'hsl(240,' + window.util.randomNumber(0, 100) + '%, 50%)';
      }
      ctx.fillText(names[i], CLOUD_X + TEXT_WIDTH + GAP + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - DOUBLE_GAP);
      ctx.fillRect(CLOUD_X + TEXT_WIDTH + (TEXT_WIDTH + BAR_WIDTH) * i, CLOUD_HEIGHT - ((barHeight * times[i]) / maxTime) - BAR_WIDTH, BAR_WIDTH, ((barHeight * times[i]) / maxTime));
    }
  };
})();
