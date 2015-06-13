'use strict';

var path = require('path');
var mockApi = require('../index');

module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          keepalive: true,
          middleware: [
            mockApi({
                  yamlPath: path.join(__dirname, './test.json')
              })
          ],
        },
      },
    },
  });


  grunt.file.expand('../node_modules/grunt-*/tasks').forEach(grunt.loadTasks);

  grunt.registerTask('default', ['connect']);
};
