import InputTextField from "@components/fields/input-text-field";
import InputTextareaField from "@components/fields/input-textarea-field";
import ActivityFormComponent from "./components/form-component";
import BackButton from "@components/fields/back-button";

export default function ActivityForm() {
  return (
    <div className="w-full flex flex-col px-10">
      <div className="flex items-center space-x-2">
        <BackButton />
        <h1 className="text-2xl font-bold">Registrar actividad</h1>
      </div>
      <ActivityFormComponent />
    </div>
  );
}
