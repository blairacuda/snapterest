const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('default', () => browserify('./source/app.js')
  .transform(babelify, { plugins: ['@babel/plugin-transform-react-jsx'] })
  .bundle()
  .pipe(source('snapterest.js'))
  .pipe(gulp.dest('./build/')));
