import { ButtonProps } from "../../types/components";

export default function Button({ button }: { button: ButtonProps }) {
  const { onClick, text, type, disabled } = button;
  return (
    <button
      disabled={disabled ?? false}
      type={type}
      onClick={onClick}
      className="bg-purple-600 disabled:bg-gray-400 px-36 py-2 text-sm lg:text-lg font-medium text-white rounded-xl w-fit self-center"
    >
      {text}
    </button>
  );
}
