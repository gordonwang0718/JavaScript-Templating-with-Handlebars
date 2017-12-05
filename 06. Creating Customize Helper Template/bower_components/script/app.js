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
      rendered = compiled({
        dogs: DogPack.dogs,
        language: window.language
      });
    $('#theDogs').html(rendered);
    attachDogButtons();
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
