var gulp = require('gulp');
var concat = require('gulp-concat');
var react = require('gulp-react');
var sass = require('gulp-sass');

var concatenate = function() {
  gulp.src('js_temp/**/*.js')
    .pipe(concat('javascript.js'))
    .pipe(gulp.dest('./'))
}
var jsxToJs = function() {
  gulp.src('src/**/*.js')
    .pipe(react())
    .pipe(gulp.dest('./js_temp/'));
}
var scssToCss = function() {
  gulp.src('src/style.scss')
    .pipe(sass('style.css').on('error', sass.logError))
    .pipe(gulp.dest('./'));
}

gulp.task('jsxToJs', jsxToJs);
gulp.task('styles', scssToCss);
gulp.task('concat', concatenate);
gulp.task('js', ['jsxToJs', 'concat']);
gulp.task('build', ['js', 'styles']);
