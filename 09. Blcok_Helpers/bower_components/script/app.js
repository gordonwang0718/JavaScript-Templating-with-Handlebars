(function() {
  'use strict';

  registerPartials();
  renderPage();
  renderDogs();

  function registerPartials() {
    Handlebars.registerPartial('dog', $('#dog-template').html());
  }

  function renderPage() {
    var template = $('#index-template').html(),
      compiled = Handlebars.compile(template),
      rendered = compiled(window.language);

    $('#main').html(rendered);
    $('#languageSwitch').click(function() {
      DogPack.switchLanguage();
    });
  }

  function renderDogs() {
    var template = $('#dogs-template').html(),
      compiled = Handlebars.compile(template),
      filteredDogs = DogPack.getFilteredDogs(DogPack.dogs),
      rendered = compiled({
        dogs: DogPack.getPaginatedDogs(filteredDogs),
        language: window.language
      });
    $('#theDogs').html(rendered);
    attachDogButtons();
    renderPages(filteredDogs);
    renderScore();
  }

  function renderScore() {
    var template = $('#score-template').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled({
          dogs: DogPack.dogs,
          language: window.language
        });
    $('#score').html(rendered);
    // add event listener on reset btn
    $('#score').find('small').click(function() {
      DogPack.clearDogs();
      window.location.href = '?' + Handlebars.helpers.getLanguageFilter(window.language.langId);
    });
  }

  function renderPages(dogs) {
    var template = $('#page-template').html(),
        compiled = Handlebars.compile(template),
        rendered = compiled({ dogs: dogs });
    $('#pagination').html(rendered);
  }

  function attachDogButtons() {
    $('.dog-button').click(function() {
      var id = $(this).closest('.dog-card').data('dog-id');
      // The closest() method returns the first ancestor of the selected element.
      // An ancestor is a parent, grandparent, great-grandparent, and so on.
      DogPack.chooseDog(id);
      renderDogs();
    });

    $('.not-dog-button').click(function() {
      var id = $(this).closest('.dog-card').data('dog-id');
      // The closest() method returns the first ancestor of the selected element.
      // An ancestor is a parent, grandparent, great-grandparent, and so on.
      DogPack.chooseNotDog(id);
      renderDogs();
    });

  }
})();
