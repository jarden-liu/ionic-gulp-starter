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



module.exports = 'server';

gulp.task('server', function(callback) {
    environments.current(development);
    runSequence('cleanTemp', 'res', 'scss','setEnvConfig','scirpts', 'templatecache', 'startServer','watch',callback);
});


gulp.task('cleanTemp', function() {
    return gulp.src(paths.tmp, {
            read: false
        })
        .pipe(clean());
});

gulp.task('startServer', function() {
    return gulp.src(paths.tmp)
        .pipe(webserver({
            host: ip.address(),
            port: 8080,
            livereload: true,
            directoryListing: {
                enable: false,
                path: paths.tmp
            },
            // fallback:'index.html',
            open: true
        }));
});
