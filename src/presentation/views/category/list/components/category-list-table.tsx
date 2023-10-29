import { Image } from "next/image";

export default function CategoryListTable() {
  return (
    <section className="overflow-x-auto h-max">
      <table className="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" className="checkbox" />
            </th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" className="checkbox" />
            </td>
            <td>
              <div className="flex items-center space-x-3">
                {/*  {activity.images && activity.images[0] ? (
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={activity.images[0]}
                        alt={activity.name}
                        layout="fill"
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )} */}
                <div className="font-bold">Nombre de la categoría</div>
              </div>
            </td>
            <td> Descripción</td>
            <td>Estado</td>
            <td>Opciones</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
