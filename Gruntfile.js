module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-http-server');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
     
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['css/**/*.css'],
            },
            js: {
                files: ['js/**/*.js'],
            },
            html: {
                files: ['**/*.html'],
            }
        },
        connect: {
            server: {
                options: {
                    port: 8282,
                    base: '.',
                    hostname: '0.0.0.0',
                    protocol: 'http',
                    livereload: true,
                    open: true
                }
            }
        }
    });

    grunt.registerTask('default', ['connect', 'watch']);
};
