var gulp = require('gulp');
var path = require('path');
var paths = require('./config').paths;
var environments = require('gulp-environments');
var development = environments.development;
var production = environments.production;
var runSequence = require('run-sequence');
var webserver = require('gulp-webserver');
var ip = require('ip');

var clean = require('gulp-clean');
var gulpNgConfig = require('gulp-ng-config');
var rename = require('gulp-rename');



module.exports = 'build';

gulp.task('build', function(callback) {
    environments.current(production);
    runSequence('cleanDist', 'res', 'scss','setEnvConfig','scirpts', 'templatecache',callback);
});


gulp.task('cleanDist', function() {
    return gulp.src(paths.dist, {
            read: false
        })
        .pipe(clean());
});
