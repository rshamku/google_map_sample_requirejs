callbacks.displayTopPageSpeedSuggestions = function(result) {
  var results = [];
  var ruleResults = result.formattedResults.ruleResults;
  for (var i in ruleResults) {
    var ruleResult = ruleResults[i];
    // Don't display lower-impact suggestions.
    if (ruleResult.ruleImpact < 3.0) continue;
    results.push({name: ruleResult.localizedRuleName,
                  impact: ruleResult.ruleImpact});
  }
  results.sort(sortByImpact);
  var ul = document.createElement('ul');
  for (var i = 0, len = results.length; i < len; ++i) {
    var r = document.createElement('li');
    r.innerHTML = results[i].name;
    ul.insertBefore(r, null);
  }
  if (ul.hasChildNodes()) {
    document.body.insertBefore(ul, null);
  } else {
    var div = document.createElement('div');
    div.innerHTML = 'No high impact suggestions. Good job!';
    document.body.insertBefore(div, null);
  }
};

// Helper function that sorts results in order of impact.
function sortByImpact(a, b) { return b.impact - a.impact; }