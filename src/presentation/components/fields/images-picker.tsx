"use client";

import PlusIcon from "@assets/icons/plus.svg";
import RemoveImageIcon from "@assets/icons/remove-image.svg";
import Image from "next/image";
import { useState } from "react";

export default function ImagesPicker() {
  const [images, setImages] = useState([]);

  const handleAddImage = () => {
    // Create a new input element of type file
    const input = document.createElement("input");
    input.type = "file";

    // Listen for the change event on the input element
    input.addEventListener("change", (e) => {
      // Get the selected file
      const file = URL.createObjectURL((e.target as HTMLInputElement).files[0]);

      // Update the images state variable with the selected file
      setImages([...images, file]);
    });

    // Click the input element to open the file selection dialog
    input.click();

    console.log(images);
  };

  const removeImage = (index: number) => {
    const newImages = [...images];

    newImages.splice(index, 1);

    setImages(newImages);
  };

  return (
    <div className="w-full sm:h-32 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 space-x-0">
      <button
        type="button"
        className="btn h-full bg-gray-200 w-32 rounded-md flex justify-center items-center border border-gray-400 border-dashed p-10"
        onClick={handleAddImage}
      >
        <Image src={PlusIcon} alt="Agregar imagen" />
      </button>
      <div
        className="w-auto grid grid-cols-2 gap-2 sm:h-32 sm:flex overflow-hidden"
        draggable="true"
        onDragStart={(e) => e.preventDefault()}
      >
        {images.map((image, index) => (
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
