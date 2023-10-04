"use strict";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import UserService from "../../services/user.service";

describe("UserService", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  test("GET /users", async () => {
    const response = await UserService().getAllUsers();

    console.log(response);
  });
});
