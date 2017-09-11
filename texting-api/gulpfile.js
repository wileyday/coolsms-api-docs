const gulp = require('gulp');
const path = require('path');
const docbuild = require('docbuild');

gulp.task('docbuild', () => {
  docbuild(
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'content')
  );
});

gulp.task('watch', () => {
    gulp.watch(['./src/*'], ['docbuild']);
});
