var gulp = require('gulp');
var path = require('path');
var paths = require('./config').paths;
var bowerDir = require('./config').bowerDir;
var environments = require('gulp-environments');
var development = environments.development;
var runSequence = require('run-sequence');
var gulpFilter = require('gulp-filter');
var hash = require('gulp-hash');


gulp.task('indejct', function(callback) {
    runSequence('hashFiles',callback);
});


gulp.task('hashFiles', function() {
  var f = gulpFilter('**/**.js');
  var dirPath = development() ? paths.tmp : paths.dist;
    return gulp.src([path.join(dirPath,'**','*.js'),path.join(dirPath,'**','*.css')])
        .pipe(f)
        .pipe(hash())
        .pipe(gulp.dest('public'));
});
