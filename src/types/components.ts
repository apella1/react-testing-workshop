type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface InputProps {
  inputId: string;
  type: InputType;
  placeholder: string;
  value: string | number | undefined;
  label?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export interface ButtonProps {
  onClick?: () => void;
  text: string;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}
