import UserService from "./../../services/user.service";

const _service = UserService();

interface FilterParams {
  query: string;
  page?: number | string;
  limit?: number | string;
  order?: string;
}

export default function UserController(params: FilterParams) {
  const getAllUsers = async () => await _service.getAllUsers();

  return {
    getAllUsers,
  };
}
