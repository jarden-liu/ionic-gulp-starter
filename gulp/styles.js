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
var clean = require('gulp-clean');
var hash = require('gulp-hash');

var scssPaths = path.join(paths.src, '**', '*.scss');
module.exports = {
    scssPaths: scssPaths
};

gulp.task('styles', function(callback) {
    runSequence('scss', callback);
});


gulp.task('scss', function(done) {
    return gulp.src(scssPaths)
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(development(sourcemaps.init()))
        .pipe(concat('app.css'))
        .pipe(production(hash()))
        .pipe(development(sourcemaps.write('.')))
        .pipe(development(gulp.dest(path.join(paths.tmp, 'css'))))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(production(gulp.dest(path.join(paths.dist, 'css'))));
});
