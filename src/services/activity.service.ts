import axios from "axios";

export default function ActivityService() {
  axios.defaults.baseURL = "http://localhost:3001/activities";

  const getAll = async () => {
    let res;
    let err;

    try {
      const response = await axios.get("http://localhost:3001/activities");

      res = response.data;
    } catch (error: any) {
      err = error;
    } finally {
      return { res, err };
    }
  };

  return {
    getAll,
  };
}
