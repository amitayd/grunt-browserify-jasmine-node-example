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
        jasmine : {
            src : 'dist/app_bundle.js',
            options : {
                specs : 'dist/test_bundle.js',
                vendor : ['libs/jquery-1.9.1.js', 'libs/underscore.js']
            }
        },
        watch: {
            all: {
                files: ['src/**/*.*', 'test/**/*.*'],
                tasks: ['browserify', 'jasmine', 'shell:jasmine_node']
            },
        },
        browserify: {
            main: {
                src: ['src/common/**/*.js', 'src/browser/**/*.js'],
                dest: 'dist/app_bundle.js',
                options: {
                    alias: ["./src/browser/App.js:App"],
                    externalize: ['src/common/**/*.js', 'src/browser/**/*.js'],
                   
                }
            },
            test: {
                src: ['test/spec/common/**/*.js', 'test/spec/browser/**/*.js'],
                dest: 'dist/test_bundle.js',
                options: {
                    external: ['./src/**/*.js']
                }
            },
        },
        shell: {
            jasmine_node: {
                command: 'jasmine-node test/spec/node/ test/spec/common/',
                options: {
                    stdout: true,
                    stderr: true,
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-shell');


    // Default task.
    grunt.registerTask('default', ['browserify', 'jasmine', 'shell:jasmine_node']);
};
