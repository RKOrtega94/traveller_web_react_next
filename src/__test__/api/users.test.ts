import { createMocks } from "node-mocks-http";
import { GET, POST } from "../../app/api/users/route";

describe("API Users Route", () => {
  test("GET /api/users", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    await GET(req);

    expect(res._getStatusCode()).toBe(200);
  });

  test("POST /api/users", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        name: "John Doe",
        email: "janedoe@email.com",
      },
    });

    await POST(req);

    expect(res._getStatusCode()).toBe(200);
  });
});
