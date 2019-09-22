var gulp = require('gulp');
var concat = require('gulp-concat');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var watch = require('gulp-watch');

// таски для работы с файлами
gulp.task('less', function () {
  return gulp.src('src/less/*.less')
	.pipe(sourcemaps.init())
   .pipe(less({
      plugins: [autoprefix]
   }))
	.pipe(concat('main.css'))
	.pipe(sourcemaps.write())
   .pipe(gulp.dest('build/css'));
});

// ватчер
gulp.task('watch',function () {
	gulp.watch('src/less/*.less',gulp.series('less'));
});

// цепочка выполнения задач
gulp.task('default',gulp.series(gulp.parallel('less'),
	'watch'
));