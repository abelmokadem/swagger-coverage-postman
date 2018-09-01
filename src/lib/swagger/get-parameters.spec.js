const sway = require("sway");
const expect = require("chai").expect;
const getParameters = require("./get-parameters");
const refParser = require("json-schema-ref-parser").YAML;

const fixture = `
paths:
  /echo/{firstName}:
    get:
      consumes:
        - application/json
      parameters:
        - name: firstName
          in: path
          required: true
          type: string       
      responses:
        '200':
          description: 200 response
          schema:
            type: string
`;

it("should get all parameters", async () => {
  const api = await sway.create({ definition: await refParser.parse(fixture) });

  const result = getParameters(api);

  expect(result.length).to.be.equal(1, "Should find 1 parameter");
  expect(result[0].name).to.be.equal(
    "firstName",
    "Parameter 0 name is firstName"
  );
  expect(result[0].in).to.be.equal("path", "Parameter 0 is in path");
});
