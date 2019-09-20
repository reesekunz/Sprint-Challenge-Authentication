const request = require("supertest");
const server = require("../api/server");
// const express = require("express");
// const router = express.Router();

// TESTING POST TO REGISTER
describe("POST to /register", () => {
  it("returns 201 status", () => {
    // make a GET request to the / endpoint on the server
    // method 1 - returning
    // need to return so JEST knows its a promise (needs to wait for result) - otherwise test would return false positive
    return request(server)
      .post("api/auth/register")
      .then(response => {
        // assert (check) that we get an http status code 200
        //   expect(response.status).toBe(500);
        expect(response.status).toBe(201);
      });
  });

  it("should return { api: 'it is alive!' }", async () => {
    // method 2 - async and await

    const response = await request(server).get("/");
    // expect(response.body.api).toBe("it is dead");
    // expect(response.body).toEqual({ api: "it is dead" });
    expect(response.body.api).toBe("it is alive!");
    // same as
    expect(response.body).toEqual({ api: "it is alive!" });
  });
});
