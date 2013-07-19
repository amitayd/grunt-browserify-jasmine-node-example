'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        watch: {
            all: {
                files: ['src/**/*.*', 'test/**/*.*'],
                tasks: ['default']
            },
        },
        shell: {
            jasmine_node: {
                command: 'jasmine-node test/spec/node/ test/spec/common/',
                options: {
                    stdout: true,
                    stderr: true,
                    failOnError: true,
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
            }
        },
        browserify: {
            main: {
                src: ['./src/browser/App.coffee'],
                dest: 'dist/app_bundle_main.js',
                options: {
                    alias: ["./src/browser/App.coffee:SampleApp"],
                    ignore: ['src/node/**/*.coffee'],
                    transform: ['coffeeify', 'hbsfy', 'envify','brfs']
                },
            },
            src: {
                src: ['src/common/**/*.coffee', 'src/browser/**/*.coffee'],
                dest: 'dist/app_bundle.js',
                options: {
                    alias: ["./src/browser/App.coffee:SampleApp"],
                    externalize: ['src/common/**/*.coffee', 'src/browser/**/*.coffee'],
                    ignore: ['src/node/**/*.coffee'],
                    transform: ['coffeeify', 'hbsfy', 'envify', 'brfs']
                }
            },
            test: {
                src: ['test/spec/common/**/*.js', 'test/spec/browser/**/*.js'],
                dest: 'dist/test_bundle.js',
                options: {
                    external: ['./src/**/*.js'],
                    transform: ['coffeeify', 'hbsfy', 'envify', 'brfs']
                }
            },
        },
        jasmine : {
            src : 'dist/app_bundle.js',
            options : {
                specs : 'dist/test_bundle.js',
                vendor : ['vendor/jquery.js', 'vendor/underscore.js']
            }
        },
        uglify: {
            all: {
                files: {
                    'dist/app_bundle_min.js': ['dist/app_bundle.js']
                }
            },
            main: {
                files: {
                    'dist/app_bundle_main_min.js': ['dist/app_bundle_main.js']
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task.
    grunt.registerTask('default', ['jshint', 'browserify', 'jasmine', 'uglify']);
};
