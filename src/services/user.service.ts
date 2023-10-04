import axios, { Axios, AxiosError } from "axios";

export default function UserService() {
  // Configure axios for this service
  axios.defaults.baseURL = "http://localhost:3000/api/users"; // Set default URL for all requests to this service to the API URL

  /**
   * Get all users
   *
   * @returns {Promise} Promise object represents the response
   * @returns res or err depending on the response
   */
  const getAllUsers = async () => {
    let res;
    let err;
    try {
      const response = await axios.get("http://localhost:3000/api/users");

      res = response.data;
    } catch (error: any) {
      err = error;
    } finally {
      return { res, err };
    }
  };

  const getUserById = async (id: number | string) => {
    let res;
    let err;
    try {
      const response = await axios.get(`/${id}`);

      res = response;
    } catch (error) {
      err = error;
    } finally {
      return { res, err };
    }
  };

  return {
    getAllUsers,
    getUserById,
  };
}
