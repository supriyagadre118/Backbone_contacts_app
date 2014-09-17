/**
 * Created by supriyag on 09-09-2014.
 */
'use strict';
module.exports = function(grunt) {
    // load grunt tasks with 'load-grunt-tasks' plugin
    require('load-grunt-tasks')(grunt);
    // configurable paths
    var yeomanConfig = {
        app : 'public',
        dist : 'dist',
        docs : 'docs'
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        yeoman : yeomanConfig,
        express : {
            options : {
                port : process.env.PORT || 9000
            },
            dev : {
                options :{
                    script : 'app.js'
                }
            },
            prod : {
                options :{
                    script : 'app.js'
                }
            }
        },
        watch : {
            files: [
                '<%= yeoman.app %>/{,*//*}*.html',
                '{.tmp,<%= yeoman.app %>}/stylesheets/{,*//*}*.css',
                '{.tmp,<%= yeoman.app %>}/{,*//*}*.js',
                '<%= yeoman.app %>/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}',
                'app.js'
            ],
            tasks: ['express:dev'],
            options: {
                livereload: true,
                nospawn: true //Without this option specified express won't be reloaded
            }
        },
        jshint: {
            all: {
                options: {
                    jshintrc: '.jshintrc'
                },
                files: {
                    src: [ 'app.js','public/**/*.js','Gruntfile.js', '!public/bower_components/**/*.js']
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    appDir: 'public',
                    dir: 'public/build',
                    mainConfigFile: 'public/main.js',
                    optimize: 'uglify',
                    optimizeCss: 'none',
                    modules:[],
                    logLevel: 0,
                    findNestedDependencies: true,
                    fileExclusionRegExp: /^bower_components$/,
                    inlineText: true
                }
            }
        },
        open : {
            all : {
                path : 'http://localhost:<%=express.options.port%>'
            }
        },
        yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                url: '<%= pkg.homepage %>',
                options: {
                    /* other options*/
                    linkNatives : 'true',
                    /*required options*/
                    paths: '<%= yeoman.app%>',
                    outdir: '<%= yeoman.app%>/<%= yeoman.docs%>',
                    themedir: ''
                }
            }
        }
    });

    grunt.registerTask('doc',['yuidoc']);
    grunt.registerTask('validate', ['jshint']);
    // TODO : need to work on this task to resolve file path related issues.
    grunt.registerTask('minify', ['requirejs']);
    grunt.registerTask('default', ['express:dev','open','watch']);


};