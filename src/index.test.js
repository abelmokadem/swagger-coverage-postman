'use strict';
var chai = require('chai');
var expect = chai.expect;

var busdata = require('.');

describe('should run test script', function() {
    it('should return all', function() {
        expect(isValidObj(busdata.all)).to.be.true
    })
    it('should return types', function() {
        expect(isIncludedProperty(busdata.all, 'types')).to.be.true
    })
    it('should return services', function() {
        expect(isIncludedProperty(busdata.all, 'services')).to.be.true
    })
})

function isValidObj(obj) {
    return obj != null;
}

function isIncludedProperty(obj,propName) {
    return obj[propName] != null;
}