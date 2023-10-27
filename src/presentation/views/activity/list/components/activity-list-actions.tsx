import Button from "@components/fields/button";
import InputTextField from "@components/fields/input-text-field";

export default function ActivityListActions() {
  return (
    <section className="w-full flex flex-col sm:flex-row sm:justify-between items-end space-y-2 sm:space-y-0">
      <div className="w-full sm:max-w-sm">
        <InputTextField
          props={{
            label: "Search",
            placeholder: "Search",
            name: "search",
          }}
        />
      </div>
      <div className="max-w-sm">
        <Button>Agregar actividad</Button>
      </div>
    </section>
  );
}
