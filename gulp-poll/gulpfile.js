const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('./src/scripts/tsconfig.json');
// const projects = ts.createProject();

const browsers = require('browser-sync');

const path = {
    html: {
        src: "./src/html/*.html",
        dest: '../async-requests/poll'
    },
    scripts: {
        src: "./src/scripts/*.ts",
        dest: "../async-requests/poll"
    }
}

function html() {
    return gulp.src(path.html.src)
        .pipe(gulp.dest(path.html.dest))
        .pipe(browsers.stream())
}

function scripts() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest(path.scripts.dest))
        .pipe(browsers.stream())
}

function watch() {
    browsers.init({
        server: {
            baseDir: '../async-requests/poll'
        }
    })
    gulp.watch(path.html.dest).on('change', browsers.reload)
    gulp.watch(path.html.src, html)
    gulp.watch(path.scripts.src, scripts)

}

exports.html = html
exports.scripts = scripts
exports.watch = watch

exports.default = gulp.series(html, gulp.parallel(scripts), watch)