var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    changed = require('gulp-changed');

gulp.task('styles', function() {
    var cssSrc = './scss/**/*.scss',
        cssDest = './app';

    gulp.src(cssSrc)
        .pipe(changed(cssDest))
        .pipe(sass({
            // outputStyle: 'compressed',
            // sourceComments: 'map'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(cssDest))
        .pipe(reload({
            stream:true
        }));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', ['styles']);
    gulp.watch('./**/*.html', ['bs-reload']);
    gulp.watch('./app/**/*.js', ['bs-reload']);
});

gulp.task('default', ['styles', 'browser-sync', 'watch']);