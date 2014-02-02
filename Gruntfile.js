module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    haml: {
      options: {
        language: 'ruby'
      },
      compile: {
        files: {
          'index.html': 'haml/index.haml'
        }
      }
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    coffee: {
      compile: {
        files: {
          'js/app.js': 'coffee/app.coffee'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },

      coffee: {
        files: 'coffee/*.coffee',
        tasks: ['coffee']
      },

      haml: {
        files: 'haml/*.haml',
        tasks: ['haml']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-haml');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'coffee', 'haml']);
  grunt.registerTask('default', ['build','watch']);
}