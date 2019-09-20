const request = require("supertest");
const Users = require("../helpers/usersModel");
const db = require("../database/dbConfig");
const authRouter = require("../auth/auth-router");

// TESTING POST to /register
describe("POST to /register", () => {
  // beforeEach cleans up the table, resets the database with truncate()
  beforeEach(async () => {
    await db("users").truncate();
  });
  it("returns 201 status to show successful post", async () => {
    // make a POST request to the /api/auth/register endpoint on the server
    // method 2 - async and await
    const user = { username: "testing", password: "testing" };
    const response = await request(authRouter)
      .post("/api/auth/register")
      .send(user);
    // assert (check) that we get an http status code 201
    //   expect(response.status).toBe(500);
    expect(response.status).toBe(201);
  });
  it("should return post body as expected", async () => {
    // method 2 - async and await

    const user = { username: "testing", password: "testing" };
    const response = await Users.add(user);

    expect(response).toEqual({
      id: 1,
      username: user.username,
      password: user.password
    });
  });
});
