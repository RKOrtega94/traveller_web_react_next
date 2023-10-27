import Api from "./../api/api";

export default function ActivityDataSource() {
  const get = async (search?: string): Promise<any> =>
    await Api().get("activities", search);

  const post = async (activity: any): Promise<any> =>
    await Api().post("activities", activity);

  return {
    get,
    post,
  };
}
