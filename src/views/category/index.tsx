import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CategoryView() {
  return (
    <div className="w-full">
      <div className="card bg-base-100 shadow-xl p-4">
        <div className="w-full flex justify-between mb-4">
          <h2 className="card-title">Categorías</h2>
          <div className="flex space-x-2">
            <input
              name="search"
              type="search"
              placeholder="Search…"
              autoComplete="off"
              spellCheck="false"
              id="typeahead-0.j0yk5lffcq"
              aria-autocomplete="list"
              aria-controls="typeahead-0.j0yk5lffcq-listbox"
              aria-labelledby="typeahead-0.j0yk5lffcq-label"
              className="svelte-wqugyy"
            ></input>
            <button className="btn btn-primary btn-sm">
              <FontAwesomeIcon icon={faCirclePlus} height={16} />
              <span>Add Category</span>
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:space-x-2">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <td>Categoría</td>
                  <td>Descripción</td>
                  <td>Estado</td>
                  <td>Fecha de registro</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Categoría</td>
                  <td>Descripción de la categoría</td>
                  <td>Estado de la categoría</td>
                  <td>Fecha creación</td>
                  <td>Opciones</td>
                </tr>
                <tr>
                  <td>Categoría</td>
                  <td>Descripción de la categoría</td>
                  <td>Estado de la categoría</td>
                  <td>Fecha creación</td>
                  <td>Opciones</td>
                </tr>
                <tr>
                  <td>Categoría</td>
                  <td>Descripción de la categoría</td>
                  <td>Estado de la categoría</td>
                  <td>Fecha creación</td>
                  <td>Opciones</td>
                </tr>
                <tr>
                  <td>Categoría</td>
                  <td>Descripción de la categoría</td>
                  <td>Estado de la categoría</td>
                  <td>Fecha creación</td>
                  <td>Opciones</td>
                </tr>
                <tr>
                  <td>Categoría</td>
                  <td>Descripción de la categoría</td>
                  <td>Estado de la categoría</td>
                  <td>Fecha creación</td>
                  <td>Opciones</td>
                </tr>
                <tr>
                  <td>Categoría</td>
                  <td>Descripción de la categoría</td>
                  <td>Estado de la categoría</td>
                  <td>Fecha creación</td>
                  <td>Opciones</td>
                </tr>
                <tr>
                  <td>Categoría</td>
                  <td>Descripción de la categoría</td>
                  <td>Estado de la categoría</td>
                  <td>Fecha creación</td>
                  <td>Opciones</td>
                </tr>
                <tr>
                  <td>Categoría</td>
                  <td>Descripción de la categoría</td>
                  <td>Estado de la categoría</td>
                  <td>Fecha creación</td>
                  <td>Opciones</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
