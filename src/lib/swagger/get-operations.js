module.exports = api =>
  api
    .getPaths()
    .reduce((result, path) => result.concat(path.getOperations()), []);
