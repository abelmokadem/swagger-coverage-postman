const getPathsAndMethods = require("../lib/postman/get-paths-and-methods");
const getPaths = require("../lib/swagger/get-paths");

/**
 *
 * @param {SwaggerApi} api
 * @param {Collection} tests
 */
module.exports = (api, tests) => {
  const pathAndMethodsCoveredInTests = getPathsAndMethods(tests)
  const apiPaths = getPaths(api);

  return apiPaths
    .map(apiPath => !!pathAndMethodsCoveredInTests.find(({path}) => {
      return !!apiPath.regexp.test(path)
    }))
    .reduce(
      (total, result, index, results) =>
        result ? total + 1 / results.length : total,
      0
    );
};
