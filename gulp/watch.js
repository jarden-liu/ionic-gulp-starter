var gulp = require('gulp');
var runSequence = require('run-sequence');
var resource = require('./resource');
var scirpts = require('./scirpts');
var styles = require('./styles');
var template = require('./template');


gulp.task('watch', function() {
    gulp.watch(resource.indexHtmlPath, function() {
        runSequence('moveIndexHtml');
    });
    gulp.watch(resource.libPath, function() {
        runSequence('moveLib');
    });
    gulp.watch(resource.imagePath, function() {
        runSequence('moveImage');
    });
    gulp.watch(resource.fontPath, function() {
        runSequence('moveFonts');
    });

    gulp.watch(scirpts.bowerLibPath, function() {
        runSequence('bowerMerge');
    });
    gulp.watch(scirpts.scirptPath, function() {
        runSequence('scirptsMerge');
    });

    gulp.watch(styles.scssPaths, function() {
        runSequence('scss');
    });
    gulp.watch(template.templatePath, function() {
        runSequence('templatecache');
    });


});
