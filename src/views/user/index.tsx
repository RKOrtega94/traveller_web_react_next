"use client";

import {
  faComment,
  faMessage,
  faPhotoFilm,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

// Icons
import UsersIcon from "@assets/icons/users.png";

export default function UsersView() {
  return (
    <div className="w-full">
      <div className="card bg-base-100 shadow-xl p-4">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-4 gap-4">
          <div className="card p-2 shadow-xl flex flex-row justify-between items-start">
            <Image src={UsersIcon} alt="user icon" height={40} />
            <div className="flex flex-col items-end">
              <span className="text-2xl font-bold">Total de usuarios</span>
              <span className="text-3xl font-bold text-primary">1000</span>
            </div>
          </div>
          <div className="card p-2 shadow-xl flex flex-row justify-between items-start">
            <Image src={UsersIcon} alt="user icon" height={40} />
            <div className="flex flex-col items-end">
              <span className="text-2xl font-bold">Nuevos usuarios</span>
              <span className="text-3xl font-bold text-primary">1000</span>
            </div>
          </div>
          <div className="card p-2 shadow-xl flex flex-row justify-between items-start">
            <Image src={UsersIcon} alt="user icon" height={40} />
            <div className="flex flex-col items-end">
              <span className="text-2xl font-bold">Bloqueados</span>
              <span className="text-3xl font-bold text-primary">1000</span>
            </div>
          </div>
          <div className="card p-2 shadow-xl flex flex-row justify-between items-start">
            <Image src={UsersIcon} alt="user icon" height={40} />
            <div className="flex flex-col items-end">
              <span className="text-2xl font-bold">Eliminados</span>
              <span className="text-3xl font-bold text-primary">1000</span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between mb-4">
          <h2 className="card-title">Users</h2>
          <button className="btn btn-primary btn-sm">Add User</button>
        </div>
        <div className="w-full flex flex-col md:flex-row md:space-x-2">
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
          <div className="w-96 card bg-primary shadow-xl p-0 h-min flex-col space-y-4">
            <div className="flex justify-center w-full my-4">
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
            <div className="flex flex-col justify-center items-center text-white">
              <span className="text-2xl font-bold">Nombre del usuario</span>
              <span className="text-sm font-light">Email del usuario</span>
            </div>
            <div className="w-full flex flex-col justify-center items-center text-white">
              <span className="font-bold text-3xl">100</span>
              <span>puntos</span>
            </div>
            <div className="flex">
              <div className="w-full flex flex-col justify-center items-center text-white">
                <span>2</span>
                <FontAwesomeIcon icon={faPhotoFilm} />
              </div>
              <div className="w-full flex flex-col justify-center items-center text-white">
                <span>4</span>
                <FontAwesomeIcon icon={faRankingStar} />
              </div>
              <div className="w-full flex flex-col justify-center items-center text-white">
                <span>20</span>
                <FontAwesomeIcon icon={faComment} />
              </div>
            </div>
            <div className="w-full flex rounded-b-2xl items-end">
              <div className="w-full h-8 rounded-bl-2xl bg-white group flex flex-col space-y-1 border-y text-center group-hover:scale-105 transition-transform p-2 cursor-pointer">
                <FontAwesomeIcon
                  icon={faMessage}
                  className="text-sm group-hover:text-lg transition-transform"
                />
              </div>
              <div className="w-full h-8 bg-white group flex flex-col space-y-1 border-y text-center group-hover:scale-105 transition-transform p-2 cursor-pointer">
                <FontAwesomeIcon
                  icon={faMessage}
                  className="text-sm group-hover:text-lg transition-transform"
                />
              </div>
              <div className="w-full h-8 bg-white group flex flex-col space-y-1 border-y text-center group-hover:scale-105 transition-transform p-2 cursor-pointer">
                <FontAwesomeIcon
                  icon={faMessage}
                  className="text-sm group-hover:text-lg transition-transform"
                />
              </div>
              <div className="w-full rounded-br-2xl h-8 bg-white group flex flex-col space-y-1 border-y text-center group-hover:scale-105 transition-transform p-2 cursor-pointer">
                <FontAwesomeIcon
                  icon={faMessage}
                  className="text-sm group-hover:text-lg transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
