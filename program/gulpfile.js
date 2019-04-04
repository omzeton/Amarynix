var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('./sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('serve', gulp.series('sass', function() {
	browserSync.init({
	        server: "./",
	        notify: false
	    });

	    gulp.watch("./sass/main.scss", gulp.series('sass'));
	    gulp.watch("./*.html").on('change', browserSync.reload);
	    gulp.watch("./js/*.js").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));