import Api from "./../api/api";

export default function ActivityDataSource() {
  const get = async (search?: string): Promise<any> =>
    await Api().get("activities", search);

  return {
    get,
  };
}
