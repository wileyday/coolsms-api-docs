const path = require('path');
const gulp = require('gulp');
const docbuild = require('docbuild');

gulp.task('docbuild', () => {
  docbuild(
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'content')
  );
});

gulp.task('watch', () => {
    gulp.watch(['./src/**'], ['docbuild']);
});
