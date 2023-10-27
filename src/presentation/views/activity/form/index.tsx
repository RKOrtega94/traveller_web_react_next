import InputTextField from "@components/fields/input-text-field";
import InputTextareaField from "@components/fields/input-textarea-field";
import ActivityFormComponent from "./components/form-component";
import BackButton from "@components/fields/back-button";

export default function ActivityForm() {
  return (
    <div className="w-full flex flex-col p-10">
      <BackButton />
      <h1 className="text-2xl font-bold">Registrar actividad</h1>
      <ActivityFormComponent />
    </div>
  );
}
