/**
 * Created by Administrator on 2017/6/10.
 */
var webpackConfig = require('./webpack.config.js');
var gulp = require('gulp');
var webpack = require("webpack");
gulp.task("webpack", function(callback) {
    var myConfig = Object.create(webpackConfig);
    webpack(myConfig, function(err, stats) {
        callback();
    });
});

gulp.task('watchAngular',function(){
    gulp.watch(['src/js/**/*.js'], ['webpack']);
});

gulp.task('default',['webpack','watchAngular'],function(){
    console.log('gulp running')
});