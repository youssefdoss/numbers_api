const app = require("../../app");
const request = require("supertest");

describe("app.js", function () {
  beforeAll((done) => {
    done();
  });

  describe("GET /", function () {
    test("it should respond with a 200 status code", async function (done) {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  afterAll((done) => {
    app.close();
    done();
  });
});
