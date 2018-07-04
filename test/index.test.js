"use strict";

const path = require("path");
const coverage = require("../src");
const expect = require("chai").expect;
const refParser = require("json-schema-ref-parser");

it("should generate a coverage summary", async () => {
  const apiFile = path.join(__dirname, "fixtures/api-paths.yaml");
  const api = await refParser.dereference(apiFile);

  const integrationTestsFile = path.join(
    __dirname,
    "fixtures/integration-tests.json"
  );
  const integrationTests = require(integrationTestsFile);

  const result = await coverage.summary(api, integrationTests);

  expect(result.paths).to.be.equal(0.75);
  expect(result.methods).to.be.equal(0);
  expect(result.parameters).to.be.equal(0);
});
