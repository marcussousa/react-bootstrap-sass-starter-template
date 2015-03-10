'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    path = {
        "twitter_bs_dir": "node_modules/bootstrap-sass/vendor/assets/stylesheets",
        "app_sass": "./styles/app.scss",
        "app_css_dir_output": "./static/css/"
    };

gulp.task('build', ['sass']);

gulp.task('sass', function () {
    return buildSASS(path.app_sass, path.app_css_dir_output);
});

gulp.task('watch', ['sass'], function () {
    gulp.watch(path.app_sass, ['sass']);
});

function buildSASS(src, dest) {
    return sass(src, {
        trace: true,
        debug: false,
        loadPath: [
            path.twitter_bs_dir,
            path.app_sass
        ]
    }).on('error', function (err) {
        console.log(err.message);
    }).pipe(gulp.dest(dest));
}
