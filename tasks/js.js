'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');
let uglify = require('gulp-uglify');
let notify = require('gulp-notify');


gulp.task('js', jsTask);

function jsTask() {
  return gulp
    .src(['src/js/**/*.js'])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(notify('JS nice!'));
};

gulp.task('css', cssTask);

function cssTask() {
  return gulp
    .src(['src/css/**/*.css'])
    .pipe(plumber())
    .pipe(gulp.dest('build/css'))
    .pipe(notify('CSS nice!'));
};
