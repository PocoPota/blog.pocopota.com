const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Sassをコンパイルする
const compileSass = () =>
    src("assets/custom.scss")
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(dest("layouts/partials"));

// Sassファイルを監視
const watchSassFiles = () =>
    watch("assets/custom.scss", compileSass);

// npx gulpで実行される関数
exports.default = () =>
    watchSassFiles();