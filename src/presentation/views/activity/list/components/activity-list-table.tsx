"use client";

import { useActivity } from "@/presentation/providers/activity_provider";
import VerticalDotsIcon from "@assets/icons/vertical-dots.svg";
import Image from "next/image";
import { useEffect } from "react";

export default function ActivityListTable() {
  const { activities, loadActivities } = useActivity();

  useEffect(() => {
    loadActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="overflow-x-auto h-max">
      <table className="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" className="checkbox" />
            </th>
            <th>Actividad</th>
            <th>Descripción</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  {activity.images && activity.images[0] ? (
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
                  )}
                  <div className="font-bold">{activity.name}</div>
                </div>
              </td>
              <td className="max-w-xs">
                <span className="line-clamp-2 overflow-ellipsis">
                  {activity.description}
                </span>
              </td>
              <td>
                <span className="bg-green-300 px-2 rounded-md">Activo</span>
              </td>
              <th>Opciones</th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
