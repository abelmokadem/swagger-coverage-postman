'use strict';

var data = require('./data.json');

const mainExport = {
    all : data,
    types : data.types,
    services : data.services
}

export default mainExport
module.exports = mainExport  // for CommonJS compatibility