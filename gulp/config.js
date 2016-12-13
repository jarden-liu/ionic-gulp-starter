//这个是配置脚本的使用到的一些  变量
var gutil = require('gulp-util');
var gulp = require('gulp');
var path = require('path');
var environments = require('gulp-environments');
var development = environments.development;
var production = environments.production;
var gulpNgConfig = require('gulp-ng-config');
var rename = require('gulp-rename');

var paths = {
    src: 'app', //开发工程项目文件夹
    dist: 'www', //发布项目工程文件夹
    tmp: '.dev', //发布项目工程文件夹
    lib: 'lib', //项目的额外包文件夹
    img: 'img' //项目的图片文件夹
};

exports.paths = paths;


exports.dependencyDir = 'node_modules';
exports.bowerDir = 'bower_components';

exports.errorHandler = function(msg) {
    return function(err) {
        gutil.log(gutil.colors.red('[' + msg + ']'), err.toString());
        this.emit('end');
    };
};


gulp.task('setEnvConfig', function() {
    var envConfigPath = production() ? path.join(paths.src, '**', 'envConfig.pro.json') : path.join(paths.src, '**', 'envConfig.dev.json');
    return gulp.src(envConfigPath)
        .pipe(gulpNgConfig('envConfig'))
        .pipe(rename({
            basename: 'envConfig'
        }))
        .pipe(gulp.dest(paths.src))
});
