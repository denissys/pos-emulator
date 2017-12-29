/* load yaml settings file */

'use strict'

var path = require('path'),
    config = require('yaml-config'), 
    configFile=path.resolve('./config/config.yml'),
    settings = config.readConfig(configFile, 'default');

exports.settings = settings;