"use client";

import PlusIcon from "@assets/icons/plus.svg";
import RemoveImageIcon from "@assets/icons/remove-image.svg";
import Image from "next/image";
import { useState } from "react";

export default function ImagesPicker({
  onChange,
  images,
  setImages,
}: {
  onChange?: (e: any) => void;
  images?: any[];
  setImages?: (images: any[]) => void;
}) {
  console.log(images);
  const handleAddImage = () => {
    const input = document.querySelector(
      "input[type=file]"
    ) as HTMLInputElement;
    input?.click();
  };

  const removeImage = (index: number) => {
    const newImages = images?.filter((image, i) => i !== index);
    setImages && setImages(newImages);
  };

  return (
    <div className="w-full sm:h-32 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 space-x-0">
      <input
        type="file"
        className="hidden"
        name="images"
        multiple
        accept="image/*"
        onChange={(e) => {
          onChange && onChange(e);
        }}
      />
      <button
        className="aspect-square w-full sm:w-auto sm:h-full max-h-32 bg-gray-200 rounded-md relative flex justify-center items-center"
        type="button"
        onClick={handleAddImage}
      >
        <Image
          className="object-cover rounded-md"
          src={PlusIcon}
          alt="Agregar imagen"
          width={50}
        />
      </button>
      <div
        className="w-auto grid grid-cols-2 gap-2 sm:h-32 sm:flex overflow-hidden"
        draggable="true"
        onDragStart={(e) => e.preventDefault()}
      >
        {images &&
          images.map((image, index) => (
            <ImagePickedContainer
              key={index}
              image={image}
              index={index}
              handleRemoveImage={() => removeImage(index)}
            />
          ))}
      </div>
    </div>
  );
}

function ImagePickedContainer({
  image,
  index,
  handleRemoveImage,
}: {
  image: any;
  index: number;
  handleRemoveImage: (index: number) => void;
}) {
  return (
    <div className="aspect-square w-full sm:w-auto sm:h-full max-h-32 bg-gray-500 rounded-md relative">
      <Image
        className="object-cover rounded-md"
        src={image}
        alt="Imagen seleccionada"
        layout="fill"
        objectFit="cover"
      />
      <div className="w-full flex justify-end">
        <button
          className="btn btn-xs glass btn-error rounded-none rounded-tr-md rounded-bl-md"
          type="button"
          onClick={() => handleRemoveImage(index)}
        >
          <Image src={RemoveImageIcon} alt="Eliminar imagen" width={15} />
        </button>
      </div>
    </div>
  );
}
