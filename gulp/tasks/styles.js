const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssVars = require("postcss-simple-vars");
const nested = require("postcss-nested");
const cssImport = require("postcss-import");

gulp.task("styles", function() {
    return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssVars, nested, autoprefixer]))
    .on("error", function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});

