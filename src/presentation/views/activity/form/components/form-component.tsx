"use client";

import InputTextField from "@components/fields/input-text-field";
import InputTextareaField from "@components/fields/input-textarea-field";
import Button from "@components/fields/button";
import ImagesPicker from "@components/fields/images-picker";
import { Activity } from "@domain/entities";
import { useState } from "react";

export default function ActivityFormComponent() {
  const [activity, setActivity] = useState({} as Activity);

  const handleChange = (e: any) => {
    activity[e.target.name] = e.target.value;
    setActivity(activity);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(activity);
  };

  return (
    <form
      className="self-center w-full max-w-2xl flex-col space-y-2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <InputTextField
        label="Nombre de la actividad"
        name="name"
        placeholder="Ej: Ciclismo"
        value={activity.name}
        onChange={(e) => handleChange(e)}
      />
      <InputTextareaField />
      <ImagesPicker />
      <Button className="w-full">Guardar</Button>
    </form>
  );
}
