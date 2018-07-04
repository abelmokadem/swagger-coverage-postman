# swagger-coverage-postman

[![Travis](https://img.shields.io/travis/abelmokadem/swagger-coverage-postman.svg?style=flat-square)](https://travis-ci.org/abelmokadem/swagger-coverage-postman)
[![Codecov](https://img.shields.io/codecov/c/github/abelmokadem/swagger-coverage-postman.svg?style=flat-square)](https://codecov.io/gh/abelmokadem/swagger-coverage-postman)
[![version](https://img.shields.io/npm/v/swagger-coverage-postman.svg?style=flat-square)](http://npm.im/swagger-coverage-postman)
[![downloads](https://img.shields.io/npm/dm/swagger-coverage-postman.svg?style=flat-square)](http://npm-stat.com/charts.html?package=swagger-coverage-postman&from=2016-01-01)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)


This project provides the boilerplate code needed for making an NPM module.

## Usage

```bash
npm install --save swagger-coverage-postman
```

```javascript
const coverage = require("swagger-coverage-postman")

const coverageSummary = coverage.getSummary(api, tests)

console.log(coverageSummary)
// { paths: 100.0, methods: 86.7, parameters: 15.0 }
```
