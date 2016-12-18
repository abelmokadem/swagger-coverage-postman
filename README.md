# npm-lib-boilerplate

[![Travis](https://img.shields.io/travis/mvashwinkumar/npm-lib-boilerplate.svg?style=flat-square)](https://travis-ci.org/mvashwinkumar/npm-lib-boilerplate)
[![Codecov](https://img.shields.io/codecov/c/github/mvashwinkumar/npm-lib-boilerplate.svg?style=flat-square)](https://codecov.io/gh/mvashwinkumar/npm-lib-boilerplate)
[![version](https://img.shields.io/npm/v/npm-lib-boilerplate.svg?style=flat-square)](http://npm.im/npm-lib-boilerplate)
[![downloads](https://img.shields.io/npm/dm/npm-lib-boilerplate.svg?style=flat-square)](http://npm-stat.com/charts.html?package=npm-lib-boilerplate&from=2016-01-01)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)


This project provides the boilerplate code needed for making an NPM module.

## Usage

1. Fork this repository to your git account
2. Change remote set URL to your own repository
3. Change package.json, readme.md and license with your project relevant information
4. Replace contents in src/data.json, src/index.js and src/index.test.js as per your requirements
5. Install dependencies
```
npm install
```

## Dependencies

### Modules for development

1. Transpiler: 
    * "babel-cli" -> Command Line Interface for Babel (Convert ES6 -> ES5) 
    * "babel-loader" -> Babel Module Loader for Webpack
    * "babel-plugin-istanbul" -> Babel plugin to add Istanbul Instrumentation to ES6
    * "babel-preset-es2015" -> Babel preset for all ES6 plugins
    * "babel-register" -> Babel require hook
2. Testing:
    * "chai" -> Test framework agnostic BDD/TDD assertion library
    * "mocha" -> Light-weight JS test framework
    * "nyc" -> Command Line Interface for Istanbul (Code coverage instrument) (Configuration : .nycrc)
    * "codecov" -> Upload code coverage report to [Codecov](https://codecov.io)
3. Linting:
    * "eslint" -> AST based pattern checker for JavaScript
4. Package Manager:
    * "webpack" -> pack commonJS/AMD modules for browser
    * "json-loader" -> JSON loader module for Webpack
5. Release Automation:
    * "ghooks" -> set Git hooks for automation
    * "commitizen" -> Git commit message with standard convention format
    * "cz-conventional-changelog" -> commitizen adapter for conventional changelog format
    * "validate-commit-msg" -> validate commit message as per conventional changelog standard
    * "semantic-release" -> automated NPM package publisher
6. Utilities:
    * "rimraf" -> deep deletion module platform-independent
    * "cross-env" -> set node environment variables platform-independent
    * "npm-run-all" -> Command Line Interface to run multiple npm-scripts in parallel or sequential
    
### Configuration Files

1. .travis.yml -> automation script for Travis CI
2. .babelrc -> options to configure Babel Transpiler
3. .nycrc -> options to configure Istabul Code Coverage Reporter
4. .eslintrc -> options for ES Lint checking tool
5. test/mocha.opts -> options for mocha test framework
6. webpack.config.babel.js -> options for Webpack module bundler
7. .gitattributes -> attributes to configure git
8. .gitignore -> ignore generated files and folders

### Generated Files

1. .nyc_output/ -> garbage output from istanbul instrumentation
2. node_modules/ -> npm modules installation directory
3. coverage/ -> lcov report for istanbul code coverage
4. dist/ -> output files for ditribution