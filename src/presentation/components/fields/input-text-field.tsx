"use client";

import { useState } from "react";

interface InputTextFieldProps {
  label?: string;
  name: string;
  placeholder?: string;
}

export default function InputTextField({
  props,
}: {
  props: InputTextFieldProps;
}) {
  const [value, setValue] = useState<string>();
  return (
    <div className="w-full">
      <label
        className="py-2 transition-all pointer-events-none text-gray-500"
        htmlFor="input-field"
      >
        {props.label}
      </label>
      <div className="w-full rounded dark:border-white border border-gray-700">
        <input
          id="input-field"
          className="w-full p-2 bg-transparent focus:outline-none"
          type="text"
          name={props.name}
          placeholder={props.placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}
