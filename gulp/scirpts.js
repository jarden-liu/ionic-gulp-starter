var gulp = require('gulp');
var path = require('path');
var paths = require('./config').paths;
var environments = require('gulp-environments');
var development = environments.development;
var production = environments.production;
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var mainBowerFiles = require('gulp-main-bower-files');
var uglify = require('gulp-uglify');
var gulpFilter = require('gulp-filter');
var cached = require('gulp-cached');
var cached = require('gulp-cached');
var remember = require('gulp-remember');
var bowerConfig = require('../bower.confg.js');


module.exports = 'scirpts';


gulp.task('scirpts', function() {
    runSequence('bowerMerge', 'scirptsMerge');
});


gulp.task('scirptsMerge', function() {
var f = gulpFilter('*/*app*.js');

    return gulp.src(path.join(paths.src, "**", "*.js"))
        .pipe(f)
        // .pipe(cached('scirptsMerge'))
        // .pipe(remember('scirptsMerge'))
        .pipe(development(sourcemaps.init()))
        .pipe(concat('app.js'))
        .pipe(production(uglify()))
        .pipe(development(sourcemaps.write('.')))
        .pipe(development(gulp.dest(path.join(paths.tmp))))
        .pipe(production(gulp.dest(path.join(paths.dist))))
});


gulp.task('bowerMerge', function() {
    return gulp.src(bowerConfig.paths)
        .pipe(cached('bowerMerge'))
        .pipe(remember('bowerMerge'))
        .pipe(development(sourcemaps.init()))
        .pipe(concat('vendor.js'))
        .pipe(production(uglify()))
        .pipe(development(sourcemaps.write('.')))
        .pipe(development(gulp.dest(path.join(paths.tmp))))
        .pipe(production(gulp.dest(path.join(paths.dist))))
});
