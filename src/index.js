"use strict";

const sway = require("sway");
const Collection = require("postman-collection").Collection;

const getPathsCoverage = require("./paths");
const getMethodsCoverage = require("./methods");
const getParametersCoverage = require("./parameters");

exports.summary = async (api, tests) => {
  const swaggerApi = await sway.create({ definition: api });
  const postmanCollection = new Collection(tests);

  return {
    paths: getPathsCoverage(swaggerApi, postmanCollection),
    methods: getMethodsCoverage(swaggerApi, postmanCollection),
    parameters: getParametersCoverage(swaggerApi, postmanCollection)
  };
};
