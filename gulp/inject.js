var gulp = require('gulp');
var path = require('path');
var paths = require('./config').paths;
var bowerDir = require('./config').bowerDir;
var environments = require('gulp-environments');
var development = environments.development;
var production = environments.production;
var runSequence = require('run-sequence');
var gulpFilter = require('gulp-filter');
var hash = require('gulp-hash');
var replace = require('gulp-replace');
var inject = require('gulp-inject');

var clean = require('gulp-clean');
var cached = require('gulp-cached');
var remember = require('gulp-remember');
var sort = require('gulp-sort');

var injectTemplate = '<!-- inject:css -->\n<!-- endinject -->\n<!-- inject:js -->\n<!-- endinject -->'

gulp.task('inject', function(callback) {
    runSequence('addInjectTemplate', 'injectFiles', callback);
});


gulp.task('addInjectTemplate', function() {
    var dirPath = development() ? paths.tmp : paths.dist;
    return gulp.src(path.join(dirPath, 'index.html'))
        .pipe(replace('</head>', injectTemplate + '\n</head>'))
        .pipe(gulp.dest(dirPath));
})



gulp.task('injectFiles', function() {
    var fitler = function(file) {
        if (file.path.match(/.*.(css|js)$/)) {
            return file;
        }
    };
    var f = gulpFilter(fitler);
    var dirPath = development() ? paths.tmp : paths.dist;
    var sources = gulp.src([path.join(dirPath, '**', '*.js'), path.join(dirPath, '**', '*.css')])
        .pipe(f)
        .pipe(sort({
            comparator: function(file1, file2) {
                if (file1.path.indexOf('vendor') > -1) {
                    return -1;
                }
                if (file2.path.indexOf('vendor') > -1) {
                    return 1;
                }
                return 0;
            }
        }));

    var target = gulp.src(path.join(dirPath, 'index.html'));
    return target
        .pipe(inject(sources, {
            transform: function(filepath) {
                var type = path.extname(filepath).substring(1);
                var newFilePath = filepath.replace(path.join(dirPath, ' ').trim(), '');
                if (newFilePath[0] == path.join(' ',' ').trim()) {
                    newFilePath = newFilePath.replace(newFilePath[0], '');
                }
                return inject.transform.html[type](newFilePath);
            }
        }))
        .pipe(gulp.dest(dirPath));

});
