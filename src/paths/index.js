const getPaths = require("../lib/postman/get-paths");
const getPathExpressions = require("../lib/swagger/get-path-expressions");

/**
 *
 * @param {SwaggerApi} api
 * @param {Collection} tests
 */
module.exports = (api, tests) => {
  const pathsCoveredInTests = getPaths(tests);
  const pathExpressions = getPathExpressions(api);

  return pathsCoveredInTests
    .map(path => !!pathExpressions.find(expression => expression.test(path)))
    .reduce(
      (total, result, index, results) =>
        result ? total + 1 / results.length : total,
      0
    );
};
