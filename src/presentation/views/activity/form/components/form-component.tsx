import InputTextField from "@components/fields/input-text-field";
import InputTextareaField from "@components/fields/input-textarea-field";

export default function ActivityFormComponent() {
  return (
    <form className="self-center w-full max-w-2xl flex-col space-y-2">
      <InputTextField
        props={{
          label: "Nombre de la actividad",
          name: "activity-name",
          placeholder: "Ej: Ciclismo",
          onChange(e) {
            console.log(e.target.value);
          },
        }}
      />
      <InputTextareaField />
    </form>
  );
}
