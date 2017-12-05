
Handlebars.registerHelper('isChosen', function (type) {
  if (type === this.chosen) {
    return 'mdl-button--colored';
  }
});

Handlebars.registerHelper('getLanguageFilter', function(langId) {
  var queryParam = '';
  if (langId) {
    queryParam = '&language=' + Handlebars.escapeExpression(langId);
  }
  return new Handlebars.SafeString(queryParam);
});
