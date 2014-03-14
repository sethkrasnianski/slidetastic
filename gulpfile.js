var gulp    = require('gulp'),
    util    = require('gulp-util'),
    uglify  = require('gulp-uglify');

var paths = {
	scripts: {
        src:  'src/*.js',
        dest: 'build/'
    }
};

gulp.task('compress', function() {
  gulp.src(paths.scripts.src)
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
});

gulp.task('watch', function () {
  gulp.watch(paths.scripts.src, ['compress']);
});

gulp.task('default', ['compress', 'watch']);
