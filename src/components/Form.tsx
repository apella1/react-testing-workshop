import { ChangeEvent, useState } from "react";
import CustomInput from "./ui/Input";
import Button from "./ui/Button";

export default function Form() {
  const [firstName, setFirstName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFirstName(value);
  };

  return (
    <form action="" className="flex flex-col space-y-5">
      <div className="self-center flex flex-col space-y-5">
        <CustomInput
          input={{
            type: "text",
            name: "firstName",
            label: "First Name",
            inputId: "first-name",
            value: firstName,
            onChange: handleChange,
            placeholder: "Enter First Name",
          }}
        />
        <Button button={{ text: "Submit", type: "submit" }} />
      </div>
    </form>
  );
}
