"use client";

import InputTextField from "@components/fields/input-text-field";
import InputTextareaField from "@components/fields/input-textarea-field";
import Button from "@components/fields/button";
import ImagesPicker from "@components/fields/images-picker";

export default function ActivityFormComponent() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <form
      className="self-center w-full max-w-2xl flex-col space-y-2"
      onSubmit={(e) => handleSubmit(e)}
    >
      <InputTextField
        props={{
          label: "Nombre de la actividad",
          name: "activity-name",
          placeholder: "Ej: Ciclismo",
        }}
      />
      <InputTextareaField />
      <ImagesPicker />
      <Button className="w-full">Guardar</Button>
    </form>
  );
}
