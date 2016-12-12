//这个是配置脚本的使用到的一些  变量


var gutil = require('gulp-util');


exports.paths = {
    src: 'app', //开发工程项目文件夹
    dist: 'www', //发布项目工程文件夹
    tmp: '.dev', //发布项目工程文件夹
    lib: 'lib', //项目的额外包文件夹
    img: 'img' //项目的图片文件夹
};


exports.dependencyDir = ['node_modules'];
exports.bowerDir = ['bower_components'];

exports.errorHandler = function(msg) {
    return function(err) {
        gutil.log(gutil.colors.red('[' + msg + ']'), err.toString());
        this.emit('end');
    };
};
