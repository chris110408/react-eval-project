const request = require("supertest");
const app = require("../app");
var assert = require("assert");

describe("Test Call API", () => {
  it("/api/events should work", done => {
    request(app)
      .get("/api/events")
      .expect(200)
      .end(function(err, res) {
        assert.equal(res.body.length, 100);
        done();
      });
  });

  it("/api/repos should work", done => {
    request(app)
      .get("/api/repos")
      .expect(200)
      .end(function(err, res) {
        assert.equal(res.body.length, 9);
        done();
      });
  });

  it("/api/users should work", done => {
    request(app)
      .get("/api/users")
      .expect(200)
      .end(function(err, res) {
        assert.equal(res.body.login, 'jdalton');
        assert.equal(res.body.id, '4303');
        done();
      });
  });
});
