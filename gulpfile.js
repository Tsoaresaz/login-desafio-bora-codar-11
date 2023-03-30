'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const pathSrc = './src/scss/**/*.scss';
const pathDest = './dist/css';
const pathDestDev = './src/css';

const pathJSSrc = './src/js/*.js';
const pathJSDest = './dist/js';
const fileNameJS = 'script.min.js';

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

function minifyScript() {
    return gulp.src(pathJSSrc)
        .pipe(uglify())
        .pipe(concat(fileNameJS))
        .pipe(gulp.dest(pathJSDest));
}

exports.buildStyle = buildStyle;
exports.buildStyleDev = buildStyleDev;
exports.minifyScript = minifyScript;

exports.watch = function() {
    gulp.watch(pathSrc, gulp.series(buildStyle))
    gulp.watch(pathSrc, gulp.series(buildStyleDev))
    gulp.watch(pathJSSrc, gulp.series(minifyScript))
}