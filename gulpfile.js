/* Modules */

var gulp     = require('gulp');
var stylus   = require('gulp-stylus');
var prefix   = require('gulp-autoprefixer');
var pixrem   = require('gulp-pixrem');
var minify   = require('gulp-minify-css');
var recess   = require('gulp-recess');
var rename   = require('gulp-rename');
var markdown = require('gulp-markdown');
var hljs     = require('highlight.js');

/* Tasks */

gulp.task('build', function() {
  return gulp
    .src('index.styl')
    .pipe(stylus())
    .pipe(recess({
      noUnderscores: false,
      noUniversalSelectors: false
    }))
    .pipe(pixrem())
    .pipe(prefix('last 2 versions'))
    .pipe(rename('loom.css'))
    .pipe(gulp.dest('_build/'));
});

gulp.task('compress', ['build'], function() {
  return gulp
    .src('_build/loom.css')
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('_build/'));
});

gulp.task('site:css', function() {
  return gulp
    .src('_site/style.css')
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('_site/'));
});

gulp.task('site:html', function () {
  return gulp
    .src('README.md')
    .pipe(markdown({
      smartypants: true,
      langPrefix: '',
      highlight: function(code, lang) {
        return hljs.highlight(lang, code).value;
      }
    }))
    .pipe(gulp.dest('_html/'));
});

gulp.task('site', [
  'site:html',
  'site:css'
]);

gulp.task('default', [
  'compress'
]);
