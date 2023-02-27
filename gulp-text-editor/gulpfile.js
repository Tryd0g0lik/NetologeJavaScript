const gulp = require('gulp');
const maps = require("gulp-sourcemaps");
const ts = require("gulp-typescript");
const createProject = ts.createProject("./src/scripts/tsconfig.json");
const browsers = require('browser-sync');


const path = {
  html: {
    src: "./src/html/*.html",
    dest: "../client-state/text-editor"
  },
  scripts: {
    src: "./src/scripts/*.ts",
    dest: "../client-state/text-editor"
  }
}

function html() {
  return gulp.src(path.html.src)
    .pipe(gulp.dest(path.html.dest))
    .pipe(browsers.stream())
}

function scripts() {
  return createProject.src()
    .pipe(maps.init())
    .pipe(createProject())
    .pipe(maps.write("./client-state/text-editor/map/index.js.map"))
    .pipe(gulp.dest(path.scripts.dest))
    .pipe(browsers.stream())
}

function watch() {
  browsers.init({
    server: {
      baseDir: "../client-state/text-editor"
    }
  })
  gulp.watch(path.html.dest).on("change", browsers.reload)
  gulp.watch(path.html.src, html)
  gulp.watch(path.scripts.src, scripts)
}

exports.html = html
exports.scripts = scripts
exports.watch = watch
exports.default = gulp.series(html, gulp.parallel(scripts), watch)