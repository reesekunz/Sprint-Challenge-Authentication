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
    const user = { username: "Reese", password: "password" };
    const response = await request(authRouter)
      .post("/api/auth/register")
      .send(user);
    // assert (check) that we get an http status code 201
    //   expect(response.status).toBe(500);
    expect(response.status).toBe(201);
  });
  it("should return post body as expected", async () => {
    // method 2 - async and await

    const user = { username: "Reese", password: "password" };
    const response = await Users.add(user);

    expect(response).toEqual({
      id: 1,
      username: user.username,
      password: user.password
    });
  });
});

// TESTING POST to /login

describe("POST to /login", () => {
  // beforeEach cleans up the table, resets the database with truncate()
  beforeEach(async () => {
    await db("users").truncate();
  });
  it("returns 200 status to show successful post", async () => {
    // make a POST request to the /api/auth/login endpoint on the server
    // method 2 - async and await
    const user = { username: "Reese", password: "password" };
    const response = await request(authRouter)
      .post("/api/auth/login")
      .send(user);
    // assert (check) that we get an http status code 200
    //   expect(response.status).toBe(500);
    expect(response.status).toBe(200);
  });
  it("returns JSON", done => {
    // method 3 - using done()
    request(authRouter)
      .post("/api/auth/login")
      .then(response => {
        expect(response.type).toMatch(/json/i);
        done();
      });
  });
});

// TESTING GET to /users
describe("GET to /users", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  it("returns 200 status to show get users request success", () => {
    return request(authRouter)
      .get("/api/auth/users")
      .then(response => {
        expect(response.status).toBe(200);
      });
  });

  it("should return a list of users", async () => {
    const users = await db("users");
    return request(authRouter)
      .get("/api/auth/users")
      .then(response => {
        expect(response.body).toBe(users);
      });
  });
});
