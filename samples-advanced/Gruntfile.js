module.exports = function (grunt) {
    'use strict';

    // load all required Grunt plugins listed in package.json
    require('load-grunt-tasks')(grunt);

    // display the elapsed execution time of all tasks
    require('time-grunt')(grunt);

    // Task configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Project paths
        scaffold: {
            sourceDir: './05-app-build-process-with-grunt/',
            bowerDir: './bower_components/',
            buildRoot: './05-build-result/',
            tmpDir: './05-build-result/.tmp/',
            assetDir: './05-build-result/.tmp/asset/',
            concatDir: './05-build-result/.tmp/concat/',
            htmlDir: './05-build-result/.tmp/html/',
            distDir: './05-build-result/dist/'
        },

        clean: {
            tmp: ['<%= scaffold.tmpDir %>'],
            fonts: ['<%= scaffold.sourceDir %>asset/']
        },

        useminPrepare: {
            html: '<%= scaffold.sourceDir %>index.html',
            options: {
                staging: '<%= scaffold.tmpDir %>',
                dest: '<%= scaffold.distDir %>'
            }
        },

        usemin: {
            html: '<%= scaffold.htmlDir %>index.html'
        },

        ngAnnotate: {
            app: {
                files: {
                    '<%= scaffold.concatDir %>js/app.js': ['<%= scaffold.concatDir %>js/app.js']
                }
            }
        },

        uglify: {
            options: {
                mangle: true,
                compress: true,
                sourceMap: true,
                sourceMapIncludeSources: true
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0
            }
        },

        html2js: {
            app: {
                options: {
                    base: '<%= scaffold.sourceDir %>',
                    module: 'templates',
                    useStrict: true,
                    quoteChar: '\'',
                    indentString: '    ',
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                },
                src: ['<%= scaffold.sourceDir %>**/*.tpl.html'],
                dest: '<%= scaffold.sourceDir %>modules/templates/templates.app.js'
            }
        },

        copy: {
            fonts: {
                // Bower fonts
                cwd: '<%= scaffold.bowerDir %>bootstrap/dist/',
                src : ['fonts/*.*'],
                dest: '<%= scaffold.sourceDir %>asset/',
                expand: true
            },
            tmp: {
                files: [{
                    // HTML index
                    cwd: '<%= scaffold.sourceDir %>',
                    src: ['index.html'],
                    dest: '<%= scaffold.htmlDir %>',
                    expand: true
                }, {
                    // Assets (fonts, img, ico)
                    cwd: '<%= scaffold.sourceDir %>',
                    src : ['asset/**/*.*'],
                    dest: '<%= scaffold.tmpDir %>',
                    expand: true
                }]
            },

            dist: {
                files: [{
                    // HTML index
                    cwd: '<%= scaffold.htmlDir %>',
                    src : ['index.html'],
                    dest: '<%= scaffold.distDir %>',
                    expand: true
                }, {
                    // Fonts and images
                    cwd: '<%= scaffold.assetDir %>',
                    src : ['**'],
                    dest: '<%= scaffold.distDir %>',
                    expand: true
                }]
            },

            unmin: {
                files: [{
                    cwd: '<%= scaffold.concatDir %>',
                    src : ['**'],
                    dest: '<%= scaffold.distDir %>',
                    expand: true
                }]
            }
        }
    });

    // Task registration
    grunt.registerTask('default', ['build']);

    grunt.registerTask('prepare', [
        'clean',
        'copy:fonts',
        'html2js',
        'useminPrepare',
        'copy:tmp',
        'concat'
    ]);

    grunt.registerTask('build', [
        'prepare',
        'usemin',
        'copy:dist',
        'copy:unmin',
        'clean:fonts'
    ]);

    grunt.registerTask('release', [
        'prepare',
        'ngAnnotate',
        'uglify',
        'cssmin',
        'usemin',
        'copy:dist',
        'clean:fonts',
        'clean:tmp'
    ]);
};
