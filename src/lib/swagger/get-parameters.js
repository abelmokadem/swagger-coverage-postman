module.exports = api =>
  api
    .getPaths()
    .reduce((result, path) => result.concat(path.getOperations()), [])
    .reduce(
      (result, operation) => result.concat(operation.getParameters()),
      []
    );
