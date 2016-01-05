var gulp = require('gulp'),
    concat = require('gulp-concat'),
    react = require('gulp-react'),
    sass = require('gulp-sass'),

    jsxToJs = function() {
      gulp.src('src/**/*.js')
        .pipe(react())
        .pipe(concat('javascript.js'))
        .pipe(gulp.dest('./'));
    },

    scssToCss = function() {
      gulp.src('src/style.scss')
        .pipe(sass('style.css').on('error', sass.logError))
        .pipe(gulp.dest('./'));
    };

gulp.task('jsxToJs', jsxToJs);
gulp.task('styles', scssToCss);
gulp.task('js', ['jsxToJs', 'concat']);
gulp.task('build', ['jsxToJs', 'styles']);
