var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var child = require('child_process');
var fs = require('fs');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('less', function () {
    return gulp.src('./client/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./client/css'));
});

gulp.task('watch', function () {
    return gulp.watch('./client/**/*.less', ['less']);
});

gulp.task('server', function() {
    var server = child.spawn('node', ['server/app.js']);
    var log = fs.createWriteStream('server.log', {flags: 'a'});
    server.stdout.pipe(log);
    server.stderr.pipe(log);
});

gulp.task('default', ['server', 'watch']);