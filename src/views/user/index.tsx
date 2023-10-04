"use client";

import Image from "next/image";

export default function UsersView() {
  return (
    <div className="w-full">
      <div className="card bg-base-100 shadow-xl p-4">
        <div className="w-full flex justify-between mb-4">
          <h2 className="card-title">Users</h2>
          <button className="btn btn-primary btn-sm">Add User</button>
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <td>Usuario</td>
                  <td>Rol</td>
                  <td>Estado</td>
                  <td>Fecha de registro</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nombre de usuario</td>
                  <td>Rol</td>
                  <td>Estado</td>
                  <td>Fecha de registro</td>
                </tr>
                <tr>
                  <td>Nombre de usuario</td>
                  <td>Rol</td>
                  <td>Estado</td>
                  <td>Fecha de registro</td>
                </tr>
                <tr>
                  <td>Nombre de usuario</td>
                  <td>Rol</td>
                  <td>Estado</td>
                  <td>Fecha de registro</td>
                </tr>
                <tr>
                  <td>Nombre de usuario</td>
                  <td>Rol</td>
                  <td>Estado</td>
                  <td>Fecha de registro</td>
                </tr>
                <tr>
                  <td>Nombre de usuario</td>
                  <td>Rol</td>
                  <td>Estado</td>
                  <td>Fecha de registro</td>
                </tr>
                <tr>
                  <td>Nombre de usuario</td>
                  <td>Rol</td>
                  <td>Estado</td>
                  <td>Fecha de registro</td>
                </tr>
                <tr>
                  <td>Nombre de usuario</td>
                  <td>Rol</td>
                  <td>Estado</td>
                  <td>Fecha de registro</td>
                </tr>
                <tr>
                  <td>Nombre de usuario</td>
                  <td>Rol</td>
                  <td>Estado</td>
                  <td>Fecha de registro</td>
                </tr>
                <tr>
                  <td>Nombre de usuario</td>
                  <td>Rol</td>
                  <td>Estado</td>
                  <td>Fecha de registro</td>
                </tr>
                <tr>
                  <td>Nombre de usuario</td>
                  <td>Rol</td>
                  <td>Estado</td>
                  <td>Fecha de registro</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-96 card bg-primary shadow-xl p-4">
            <div className="flex justify-center w-full">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  {/* Avatar from url random */}
                  <Image
                    src="https://picsum.photos/200"
                    alt="Avatar"
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
