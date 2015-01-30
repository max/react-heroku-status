/* jshint node: true */

'use strict';

var browserify = require('gulp-browserify');
var gulp       = require('gulp');
var reactify   = require('reactify');
var rename     = require('gulp-rename');
var sync       = require('browser-sync');
var util       = require('gulp-util');

gulp.task('build', function build() {
  var b = browserify({transform: ['reactify']});

  b.on('error', handleError);

  return gulp.src('src/status.jsx')
    .pipe(b)
    .pipe(rename('heroku-status.js'))
    .pipe(gulp.dest('example/'));
});

gulp.task('dev', ['build'], function watch() {
  sync({
    server: { baseDir: './example' },
    open  : false
  });

  gulp.watch(['src/**/*'], ['build']);
  gulp.watch(['example/**/*'], sync.reload);
});

function handleError(err) {
  util.log(util.colors.red('Error'), err.message);
}
