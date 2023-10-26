import PlusIcon from "@assets/icons/plus.svg";
import RemoveImageIcon from "@assets/icons/remove-image.svg";
import Image from "next/image";

export default function ImagesPicker() {
  return (
    <div className="w-full sm:h-32 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 space-x-0">
      <button className="btn h-full bg-gray-200 w-32 rounded-md flex justify-center items-center border border-gray-400 border-dashed p-10">
        <Image src={PlusIcon} alt="Agregar imagen" />
      </button>
      <div
        className="w-auto grid grid-cols-2 gap-2 sm:h-32 sm:flex overflow-hidden"
        draggable="true"
        onDragStart={(e) => e.preventDefault()}
      >
        <ImagePickedContainer />
        <ImagePickedContainer />
        <ImagePickedContainer />
        <ImagePickedContainer />
      </div>
    </div>
  );
}

function ImagePickedContainer() {
  return (
    <div className="aspect-square w-full sm:w-auto sm:h-full max-h-32 bg-gray-500 rounded-md relative">
      <div className="w-full flex justify-end">
        <button className="btn btn-xs glass btn-error rounded-none rounded-tr-md rounded-bl-md">
          <Image src={RemoveImageIcon} alt="Eliminar imagen" width={15} />
        </button>
      </div>
    </div>
  );
}
