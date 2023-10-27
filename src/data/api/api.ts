export default function Api() {
  const baseUrl: string = process.env.API_URL || "http://localhost:3001";

  const get = async (path: string, id?: any) => {};

  const post = async (path: string, body: any) => {};

  const put = async (path: string, id: any, body: any) => {};

  const del = async (path: string, id: any) => {};
}
