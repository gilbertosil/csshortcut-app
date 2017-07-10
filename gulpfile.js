var gulp = require("gulp")
var stylus = require('gulp-stylus')

gulp.task('stylus',function(){
  gulp.src('style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('build'))
})
gulp.task('go', function(){
  console.log('Go task')
})

gulp.task('info', function(){
  console.log('Informacoes')
})

gulp.task('start', ['go','info'])

//Tarefa padrao do gulp
gulp.task('default', ['go','info'])
