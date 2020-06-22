var gulp = require("gulp");
var browserSync = require("browser-sync");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var htmlmin = require("gulp-htmlmin");
// var uglify = require("gulp-uglify");
// var watchOver = require("gulp-watch");
// var rigger = require("gulp-rigger");
// var reload = browserSync.reload;
// var sourcemaps = require('gulp-sourcemaps');

// var path = {
//   build: {
//     //Тут мы укажем куда складывать готовые после сборки файлы
//     js: "dist/js/",
//   },
//   src: {
//     //Пути откуда брать исходники
//     js: "src/js/main.js", //В стилях и скриптах нам понадобятся только main файлы
//   },
//   watch: {
//     //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
//     js: "src/js/**/*.js",
//   },
//   clean: "./build",
// };
// gulp.task("js:build", function () {
//   return gulp
//     .src(path.src.js) //Найдем наш main файл
//     .pipe(rigger()) //Прогоним через rigger
//     .pipe(sourcemaps.init()) //Инициализируем sourcemap
//     .pipe(uglify()) //Сожмем наш js
//     .pipe(sourcemaps.write()) //Пропишем карты
//     .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
//     .pipe(
//       reload({
//         stream: true,
//       })
//     ); //И перезагрузим сервер
// });

gulp.task("server", function () {
  browserSync({
    server: {
      baseDir: "dist",
    },
    browser: "firefox",
    notify: false,
  });

  gulp.watch("src/*.html").on("change", browserSync.reload);
  gulp.watch("src/js/*.js").on("change", browserSync.reload);
});

gulp.task("styles", function () {
  return gulp
    .src("src/sass/**/*.+(scss|sass)")
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(
      rename({
        suffix: ".min",
        prefix: "",
      })
    )
    .pipe(autoprefixer())
    .pipe(
      cleanCSS({
        compatibility: "ie8",
      })
    )
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel("styles"));
  gulp.watch("src/*.html").on("change", gulp.parallel("html"));
  gulp.watch("src/js/*.js").on("change", gulp.parallel("scripts"));
});

gulp.task("html", function () {
  return gulp
    .src("src/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest("dist/"));
});

gulp.task("scripts", function () {
  return gulp.src("src/js/**/*.js").pipe(gulp.dest("dist/js"));
});

gulp.task("fonts", function () {
  return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

gulp.task("icons", function () {
  return gulp.src("src/icons/**/*").pipe(gulp.dest("dist/icons"));
});

gulp.task("mailer", function () {
  return gulp.src("src/mailer/**/*").pipe(gulp.dest("dist/mailer"));
});

gulp.task("images", function () {
  return gulp.src("src/img/**/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));
});

gulp.task(
  "default",
  gulp.parallel(
    "watch",
    "server",
    "styles",
    "scripts",
    "fonts",
    "icons",
    "mailer",
    "html",
    "images"
    // "js:build"
  )
);

// сборка для минификации https://habr.com/ru/post/250569/