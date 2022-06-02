"use strict";

// Load plugins
const browsersync = require("browser-sync").create();
const gulp = require("gulp");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Watch files
function watchFiles() {
  gulp.watch(["./css/*", "./*.html"], browserSyncReload);
}

const watch = gulp.series(gulp.parallel(watchFiles, browserSync));

exports.watch = watch;
