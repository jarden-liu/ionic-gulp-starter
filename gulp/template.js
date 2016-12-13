var gulp = require('gulp');
var path = require('path');
var paths = require('./config').paths;
var environments = require('gulp-environments');
var development = environments.development;
var production = environments.production;
var runSequence = require('run-sequence');

var gulpFilter = require('gulp-filter');
var templateCache = require('gulp-angular-templatecache');

var templatePath = path.join(paths.src, '**', '*.html');
module.exports = {
    templatePath: templatePath
};

gulp.task('templatecache', function() {
    var f = gulpFilter(['**', '!**/index.html']);

    var options = {
        standalone: true,
        transformUrl: function(url) {
            var newUrl = url.replace(/.*modules[\/\\]/, '');
            newUrl = newUrl.replace(/.*components[\/\\].*[\/\\]/, '');
            return newUrl;
        }
    };

    return gulp.src(templatePath)
        .pipe(f)
        .pipe(templateCache(options))
        .pipe(development(gulp.dest(path.join(paths.tmp))))
        .pipe(production(gulp.dest(path.join(paths.dist))))
});
