var fs = require('fs');
var gulp = require('gulp');


//读取gulp目录下面的脚本文件
fs.readdirSync('./gulp').filter(function(file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
    require('./gulp/' + file);
});


//设置默认启动的堆栈
gulp.task('default', function() {
    gulp.start('server');
});
