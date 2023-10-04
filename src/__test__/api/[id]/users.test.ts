import { createMocks } from "node-mocks-http";
import { GET, POST } from "../../../app/api/users/[id]/route";

describe("API Users Route", () => {
  test("GET /api/users/:id", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        id: "1",
      },
    });

    await GET(req);

    expect(res._getStatusCode()).toBe(200);
  });

  test("POST /api/users/:id", async () => {
    const { req, res } = createMocks({
      method: "POST",
      query: {
        id: "1",
      },
      body: {
        name: "John Doe",
        email: "test@email.com",
      },
    });
  });
});
