//        var gulp = require('gulp');

//        gulp.task('hello', function () {
//            console.log("Hello, ");
//        });

//        gulp.task('world', function () {
//            console.log("world!");
//        });
//        gulp.task('default', ['hello', 'world']);

var gulp = require('gulp');

// Scripts
gulp.task('scripts', function () {
    return gulp.src('./client/app/**/*.js')
        .pipe(gulp.dest('./dist/js'));
});

// Stylesheets
gulp.task('styles', function () {
    return gulp.src('./client/assets/**/*.css')
        .pipe(gulp.dest('./dist/css'));
});

// Images
gulp.task('images', function () {
    return gulp.src(['./client/assets/**/*.png', './client/assets/**/*.ico'])
        .pipe(gulp.dest('./dist/img'));
});

// HTML
gulp.task('html', function () {
    return gulp.src('./client/**/*.html')
        .pipe(gulp.dest('./dist'));
});

// Default
gulp.task('default', ['html', 'scripts', 'styles', 'images']);