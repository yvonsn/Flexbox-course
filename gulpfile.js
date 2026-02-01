const gulp = require("gulp");
const browserSync = require("browser-sync").create();

// Tarea para servir y recargar
function serve() {
  browserSync.init({
    server: {
      baseDir: "./", // Carpeta raíz
    },
  });

  // Vigilar cambios en HTML, CSS y recargar
  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("*.css").on("change", browserSync.reload);
}

exports.default = serve;
