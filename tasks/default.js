'use strict';

const gulp = require('gulp');
const defaultTasks = [
  'html',
  'css',
  'js',
  'scss',
  'copy',
  'server',
];

gulp.task('default', defaultTasks);
