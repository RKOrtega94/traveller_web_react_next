"use client";

import { useState } from "react";

export default function InputTextField({
  label,
  name,
  placeholder,
  value,
  onChange,
  type,
}: {
  label?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  type?: string;
}) {
  const [val, setVal] = useState<string>(value || "");

  const handleChange = (e: any) => {
    setVal(e.target.value);
    onChange && onChange(e);
  };

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
        <input
          id="input-field"
          className="w-full p-2 bg-transparent focus:outline-none"
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          value={val}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
