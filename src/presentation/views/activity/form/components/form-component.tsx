"use client";

import InputTextField from "@components/fields/input-text-field";
import InputTextareaField from "@components/fields/input-textarea-field";
import Button from "@components/fields/button";
import ImagesPicker from "@components/fields/images-picker";
import { Activity } from "@domain/entities";
import { useState } from "react";
import { useActivity } from "@/presentation/providers/activity_provider";
import { useRouter } from "next/navigation";

export default function ActivityFormComponent() {
  const [activity, setActivity] = useState({} as Activity);
  const [previewUrls, setPreviewUrls] = useState([] as any[]);
  const { createActivity } = useActivity();
  const router = useRouter();

  const handleChange = (e: any) => {
    if (e.target.type === "file") {
      const files = e.target.files;
      const newImages = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = () => {
          newImages.push(reader.result);
          if (newImages.length === files.length) {
            activity[e.target.name] = [...previewUrls, ...newImages];
            setActivity(activity);
            setPreviewUrls([...previewUrls, ...newImages]);
          }
        };

        reader.readAsDataURL(file);
      }
    } else {
      activity[e.target.name] = e.target.value;
    }
    setActivity(activity);
    console.log(activity);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createActivity(activity).then(() => {
      router.back();
    });
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
      <InputTextareaField
        name="description"
        value={activity.description}
        onChange={handleChange}
        placeholder="Descripción de la actividad"
      />
      <ImagesPicker
        onChange={handleChange}
        images={previewUrls}
        setImages={setPreviewUrls}
      />
      <Button className="w-full">Guardar</Button>
    </form>
  );
}
