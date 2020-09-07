const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const atImport = require('postcss-import');

// 指定postcss任务
gulp.task('postcss', function () {
  var postcss = require('gulp-postcss');
  // 读取css文件，通过pipe管道流给到postcss插件
  return gulp
    .src('src/02-plugins-main.css')
    .pipe(
      postcss([
        // postcss内部也使用了部分插件
        atImport,
        autoprefixer({
          browsers: ['last 2 versions'],
        }),
        cssnano,
      ])
    )
    .pipe(gulp.dest('build/')); // 输出位置
});
