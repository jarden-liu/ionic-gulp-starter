var gulp = require('gulp');
var path = require('path');
var paths = require('./config').paths;
var environments = require('gulp-environments');
var development = environments.development;
var production = environments.production;
var runSequence = require('run-sequence');

var clean = require('gulp-clean');



module.exports = 'server';

gulp.task('server', function() {
    environments.current(development);
    runSequence('cleanTemp', 'res', 'scss','scirpts');
});


gulp.task('cleanTemp', function() {
    return gulp.src(paths.tmp, {
            read: false
        })
        .pipe(clean());
});
