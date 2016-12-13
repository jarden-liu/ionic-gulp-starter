var gulp = require('gulp');
var path = require('path');
var paths = require('./config').paths;
var bowerDir = require('./config').bowerDir;
var environments = require('gulp-environments');
var development = environments.development;
var runSequence = require('run-sequence');
var production = environments.production;
var rename = require('gulp-rename');

var indexHtmlPath = path.join(paths.src, 'index.html');
var libPath = path.join(paths.src, paths.lib, '**', '*');
var imagePath = path.join(paths.src, paths.img, '**', '*');
var fontPath = [
    path.join(bowerDir, '**', 'fonts', '*'),
    path.join(paths.src, '**', 'fonts', '*')
];

module.exports = {
    indexHtmlPath: indexHtmlPath,
    libPath: libPath,
    imagePath: imagePath,
    fontPath: fontPath
};

gulp.task('res', function() {
    runSequence('moveIndexHtml', 'moveLib', 'moveImage', 'moveFonts');
});


gulp.task('moveIndexHtml', function() {
    return gulp.src(indexHtmlPath)
        .pipe(development(gulp.dest(path.join(paths.tmp))))
        .pipe(production(gulp.dest(path.join(paths.dist))));
});

gulp.task('moveLib', function() {
    return gulp.src(libPath)
        .pipe(development(gulp.dest(path.join(paths.tmp, paths.lib))))
        .pipe(production(gulp.dest(path.join(paths.dist, paths.lib))));
});


gulp.task('moveImage', function() {
    return gulp.src(imagePath)
        .pipe(development(gulp.dest(path.join(paths.tmp, paths.img))))
        .pipe(production(gulp.dest(path.join(paths.dist, paths.img))));
});

gulp.task('moveFonts', function() {
    return gulp.src(fontPath)
        .pipe(rename(function(path) {
            path.dirname = "/";
        }))
        .pipe(development(gulp.dest(path.join(paths.tmp, 'fonts'))))
        .pipe(production(gulp.dest(path.join(paths.dist, 'fonts'))));
});
