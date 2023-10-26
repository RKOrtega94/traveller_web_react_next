import VerticalDotsIcon from "@assets/icons/vertical-dots.svg";
import Image from "next/image";

export default function ActivityListTable() {
  return (
    <div className="overflow-x-auto h-full">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Actividad</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <Image
                      src="https://i.pravatar.cc/500?img=32"
                      alt="Avatar"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
                <div className="font-bold">Hart Hagerty</div>
              </div>
            </td>
            <td>Zemlak, Daniel and Leannon</td>
            <td>
              <span className="bg-green-300 px-2 rounded-md">Activo</span>
            </td>
            <th>
              <div className="dropdown dropdown-end relative">
                <label tabIndex={0} className="btn btn-xs m-1">
                  <Image
                    src={VerticalDotsIcon}
                    alt="Vertical Dots Icon"
                    height={20}
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="absolute top-full dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
