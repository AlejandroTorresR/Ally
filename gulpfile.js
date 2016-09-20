/*
* Dependencias
*/
var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  uglifycss = require('gulp-uglifycss'),
  less = require('gulp-less'),
  path = require('path'),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

// Default task
gulp.task('default', ['browser-sync']);

// Static server
gulp.task('browser-sync', ['less', 'js'], function() {
    browserSync.init({
        server: {
            baseDir: ""/*,
            index: "LogIn.html"*/
        }
    });
    gulp.watch('css/source/*.less', ['less']);
    gulp.watch('js/source/*.js', ['js']);
    gulp.watch("*.html").on('change', browserSync.reload);
});


/*
* Configuración de la tarea 'CSS'
*/ 
gulp.task('less', function () {
   return gulp.src('css/source/styles.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('styles.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('css/build'))
    .pipe(browserSync.stream());
});

/*
* Configuración de la tarea 'javascript'
*/
gulp.task('js', function () {
  gulp.src('js/source/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(concat('script.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js/build/'))
  .pipe(browserSync.stream());
});