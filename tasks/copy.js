'use strict';

let gulp = require('gulp');
let plumber = require('gulp-plumber');
let notify = require('gulp-notify');

function copyFonts() {
  return gulp
    .src('src/fonts/**')
    .pipe(plumber())
    .pipe(gulp.dest('build/fonts'))
    .pipe(notify('Copy fonts nice!'));
}

function copyImages() {
  return gulp
    .src('src/images/**')
    .pipe(plumber())
    .pipe(gulp.dest('build/images'))
    .pipe(notify('Copy images nice!'));
}

function copyVendorsCss() {
  return gulp
    .src('src/vendors/css/**')
    .pipe(plumber())
    .pipe(gulp.dest('build/css'))
    .pipe(notify('Copy vendors nice!'));
}

function copyVendorsJs() {
  return gulp
    .src('src/vendors/js/**')
    .pipe(plumber())
    .pipe(gulp.dest('build/js'))
    .pipe(notify('Copy vendors nice!'));
}

gulp.task('copyFonts', copyFonts);
gulp.task('copyImages', copyImages);
gulp.task('copyVendorsJs', copyVendorsCss);
gulp.task('copyVendorsCss', copyVendorsJs);

gulp.task('copy', ['copyFonts', 'copyImages', 'copyVendorsCss', 'copyVendorsJs']);
