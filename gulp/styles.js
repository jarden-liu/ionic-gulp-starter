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

var scssPaths = path.join(paths.src, '**', '*.scss');
module.exports = {
    scssPaths: scssPaths
};

gulp.task('scss', function(done) {
    return gulp.src(scssPaths)
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
