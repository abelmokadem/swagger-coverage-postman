const getOperations = require("../lib/swagger/get-operations");
const getPathAndMethods = require("../lib/postman/get-paths-and-methods");

/**
 *
 * @param {SwaggerApi} api
 * @param {Collection} tests
 */
module.exports = (api, tests) => {
  const pathAndMethodsCoveredInTests = getPathAndMethods(tests)
  const apiOperations = getOperations(api)

  return apiOperations
    .map(apiOperation => !!pathAndMethodsCoveredInTests.find(({path, method}) => {
      return !!apiOperation.pathObject.regexp.test(path) && method.toLowerCase() === apiOperation.method.toLowerCase()
    }))
    .reduce(
      (total, result, index, results) =>
        result ? total + 1 / results.length : total,
      0
    );
};
