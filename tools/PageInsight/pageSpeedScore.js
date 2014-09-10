callbacks.displayPageSpeedScore = function(result) {
  var score = result.score;
  // Construct the query to send to the Google Chart Tools.
  var query = [
    'chtt=Page+Speed+score:+' + score,
    'chs=180x100',
    'cht=gom',
    'chd=t:' + score,
    'chxt=x,y',
    'chxl=0:|' + score,
  ].join('&');
  var i = document.createElement('img');
  i.src = CHART_API_URL + query;
  document.body.insertBefore(i, null);
};