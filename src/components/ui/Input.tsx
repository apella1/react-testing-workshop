import { InputProps } from "../../types/components";

export default function CustomInput({ input }: { input: InputProps }) {
  const {
    inputId,
    type,
    name,
    placeholder,
    value,
    label,
    onChange,
    disabled,
  } = input;
  return (
    <div className={`${label ? "flex flex-col space-y-3" : ""}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-onSurface text-base font-medium"
        >
          {label}
        </label>
      )}
      <input
        disabled={disabled ?? false}
        type={type}
        name={name}
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-surface py-3 px-4 xl:py-5 text-onSurface text-sm rounded-lg placeholder:text-onSurface-light placeholder:text-sm"
      />
    </div>
  );
}
