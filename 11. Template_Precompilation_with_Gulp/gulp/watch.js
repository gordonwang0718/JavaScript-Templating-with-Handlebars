var gulp = require('gulp'); // install gulp dependency

// AMD pattern
module.exports = function() {
  // watching
  gulp.watch('./templates/*.hbs', ['templates']);
};
