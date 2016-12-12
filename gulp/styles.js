var gulp = require('gulp');
var path = require('path');
var paths = require('./config').paths;
var environments = require('gulp-environments');
var development = environments.development;
var production = environments.production;
var runSequence = require('run-sequence');

var gulpFilter = require('gulp-filter');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

module.exports = 'scss';

gulp.task('scss', function(done) {
    var filterCss = gulpFilter('app.css');
    return gulp.src(path.join(paths.src, '**', '*.scss'))
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.init())
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(development(gulp.dest(path.join(paths.tmp, 'css'))))
        .pipe(production(gulp.dest(path.join(paths.dist, 'css'))))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(development(gulp.dest(path.join(paths.tmp, 'css'))))
        .pipe(production(gulp.dest(path.join(paths.dist, 'css'))));
});
