var gulp = require('gulp');
var path = require('path');
var paths = require('./config').paths;
var environments = require('gulp-environments');
var development = environments.development;
var runSequence = require('run-sequence');
var production = environments.production;

module.exports = 'res';

gulp.task('res', function() {
    runSequence('moveIndexHtml', 'moveLib','moveImage');
});


gulp.task('moveIndexHtml', function() {
    gulp.src(path.join(paths.src, 'index.html'))
        .pipe(development(gulp.dest(path.join(paths.tmp))))
        .pipe(production(gulp.dest(path.join(paths.dist))));
});

gulp.task('moveLib', function() {
    gulp.src(path.join(paths.src, paths.lib, '**', '*'))
        .pipe(development(gulp.dest(path.join(paths.tmp, paths.lib))))
        .pipe(production(gulp.dest(path.join(paths.dist, paths.lib))));
});


gulp.task('moveImage', function() {
    gulp.src(path.join(paths.src, paths.img, '**', '*'))
        .pipe(development(gulp.dest(path.join(paths.tmp, paths.img))))
        .pipe(production(gulp.dest(path.join(paths.dist, paths.img))));
});
