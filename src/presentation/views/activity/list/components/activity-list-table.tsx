import VerticalDotsIcon from "@assets/icons/vertical-dots.svg";
import Image from "next/image";

export default function ActivityListTable() {
  return (
    <section className="overflow-x-auto h-max">
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
            <th>Opciones</th>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
