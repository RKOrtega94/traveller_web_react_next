export default function InputTextareaField({
  label,
  name,
  placeholder,
  value,
  onChange,
}: {
  label?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          className="py-2 transition-all pointer-events-none text-gray-500"
          htmlFor="input-field"
        >
          {label}
        </label>
      )}
      <div className="w-full rounded dark:border-white border border-gray-200">
        <textarea
          className="w-full p-2 bg-transparent outline-none"
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        >
          {value}
        </textarea>
      </div>
    </div>
  );
}
