'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const pathSrc = './src/scss/**/*.scss';
const pathDest = './dist/css';
const pathDestDev = './src/css';

function buildStyle() {
    return gulp.src(pathSrc)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(pathDest));
}

function buildStyleDev() {
    return gulp.src(pathSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(pathDestDev));
}

exports.buildStyle = buildStyle;
exports.buildStyleDev = buildStyleDev;

exports.watch = function() {
    gulp.watch(pathSrc, gulp.series(buildStyle))
    gulp.watch(pathSrc, gulp.series(buildStyleDev))
}