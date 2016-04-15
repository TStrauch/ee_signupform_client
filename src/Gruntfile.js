// Generated on 2015-08-09 using generator-angular 0.12.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required Grunt tasks
  // load grunt config
  // require('load-grunt-tasks')(grunt);
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    configureProxies: 'grunt-connect-proxy'
  });

  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    // dist: '../server/dist'
    dist: 'dist'
  }

  grunt.initConfig({

    config: appConfig,

    //concat js and css files
    concat : {
      options : {
        sourceMap : true
      },
      js : {
        src: ['<%= config.app %>/js/**/*.js'],
        dest: '.tmp/main.js'
      },
      css : {
        src: ['<%= config.app %>/css/**/*.css'],
        dest: '.tmp/style.css'
      }
    },

    //javascript files
    uglify : {
      options : {
        // sourceMap : true,
        // sourceMapIncludeSources : true,
        // sourceMapIn : '.tmp/main.js.map'
      },
      dist : {
        src  : '<%= concat.js.dest %>',
        dest : '<%= config.dist %>/js/main.min.js'
      }
    },

    //css files
    cssmin: {
      options: {
        'processImport': false
      },
      dist: {
        src : '<%= concat.css.dest %>',
        dest : '<%= config.dist %>/css/style.min.css'
      }
    },

    //images
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/img',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= config.dist %>/img'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/img',
          src: '{,*/}*.svg',
          dest: '<%= config.dist %>/img'
        }]
      }
    },

    //copy other ressources
    processhtml: {
      dist: {
        files: {
          '<%= config.dist %>/index.html': ['<%= config.app %>/index.html']
        }
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            '*.html',
            '.htaccess',
            'img/{,*/}*.{webp}',
            'fonts/{,*/}*.*'
          ]
        }]
      }
    },


    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/{,*/}*',
            '!<%= config.dist %>/.git{,*/}*'
          ]
        }],
        options: {
          force: true
        }
      },
      server: '.tmp'
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= config.dist %>/js/{,*/}*.js',
          '<%= config.dist %>/css/{,*/}*.css',
          '<%= config.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= config.dist %>/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= config.app %>/index.html',
      options: {
        dest: '<%= config.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['concat', 'cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= config.dist %>/{,*/}*.html'],
      css: ['<%= config.dist %>/css/{,*/}*.css'],
      js: ['<%= config.dist %>/js/{,*/}*.js'],
      options: {
        assetsDirs: [
          '<%= config.dist %>',
          '<%= config.dist %>/img',
          '<%= config.dist %>/css'
        ],
        dirs: ['<%= config.dist %>'],
        basedir: '<%= config.dist %>',
        patterns: {
          js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']],
          css: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
        }
      }
    },

    wiredep : {
      app: {
        src: ['<%= config.app %>/index.html'],
        // ignorePath:  /\.\.\//,
        // ignorePath:  /\./,
        // ignorePath: /^(\/|\.+(?!\/[^\.]))+\.+/
      },
      options: {
        dependencies: true,
        devDependencies: true,

      }
    },

    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= config.app %>/js/{,*/}*.js'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      styles: {
        files: ['<%= config.app %>/css/{,*/}*.css']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/{,*/}*.html',
          '<%= config.app %>/css/{,*/}*.css',
          '.tmp/css/{,*/}*.css',
          '<%= config.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    open: {
      dev: {
          url: 'http://localhost:<%= connect.options.port %>',
          app: 'Google Chrome'
      }
    },


    connect: {
      // proxies: [{
      //   context: '/api',
      //   host: 'localhost',
      //   port: 3000,
      //   changeOrigin: true
      // }],
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        // hostname: '0.0.0.0',
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: false,
          middleware: function (connect) {
            // var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
            return [
              // proxySnippet,
              connect().use('/', function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
              }),
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect().use(
                '/app/css',
                connect.static('./app/css')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= config.dist %>'
        }
      }
    },


  });

  //create grunt tasks
  grunt.registerTask('build', [
    'clean',
    'wiredep',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'imagemin',
    'svgmin',
    'filerev',
    'copy',
    'usemin'
  ]);

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      // 'configureProxies',
      'connect:livereload',
      // 'open:dev', //open chrome instead of default browser
      'watch'
    ]);
  });

  grunt.registerTask('default', [
    'build'
  ]);

};
