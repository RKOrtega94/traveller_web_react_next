import InputTextField from "@components/fields/input-text-field";
import InputTextareaField from "@components/fields/input-textarea-field";

export default function ActivityForm() {
  return (
    <div className="w-full flex flex-col p-10">
      <h1 className="text-2xl font-bold">Registrar actividad</h1>
      <form className="self-center w-full max-w-2xl flex-col space-y-2">
        <InputTextField />
        <InputTextareaField />
      </form>
    </div>
  );
}
