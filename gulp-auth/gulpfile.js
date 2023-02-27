const gulp = require("gulp");
const ts = require("gulp-typescript");
const createProject = ts.createProject("./src/scripts/tsconfig.json");
const browsers = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const path = {
  html: {
    src: "./src/html/*.html",
    dest: "../client-state/auth"
  },
  scripts: {
    src: "./src/scripts/*.ts",
    dest: "../client-state/auth"
  },

  maps: "../auth/map"
}

function html() {
  return gulp.src(path.html.src)
    .pipe(gulp.dest(path.html.dest))
    .pipe(browsers.stream())
}

function scripts() {
  return createProject.src()
    .pipe(sourcemaps.init())
    .pipe(createProject())

    .pipe(sourcemaps.write("./")) // path.maps


    .pipe(gulp.dest(path.scripts.dest))
    .pipe(browsers.stream())

}

function watch() {
  browsers.init({
    server: {
      baseDir: "../client-state/auth"
    }
  })

  gulp.watch(path.scripts.dest).on("change", browsers.reload)
  gulp.watch(path.html.src, html)
  gulp.watch(path.scripts.src, scripts)
}

exports.html = html;
exports.scripts = scripts;
exports.watch = watch;

exports.default = gulp.series(html, gulp.parallel(scripts), watch)