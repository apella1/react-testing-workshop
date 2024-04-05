import { useState } from "react";
import Button from "./ui/Button";

export default function UserAgreement() {
  const [hasAgreed, setHasAgreed] = useState(false);

  const handleAgreementChange = () => {
    setHasAgreed(!hasAgreed);
  };

  return (
    <div className="flex flex-col space-y-5">
      <h1 className="self-center text-3xl font-medium text-black">
        User Agreement
      </h1>
      <p className="text-base text-blue-700 self-center">
        Please review the following agreement before proceeding. This agreement
        outlines the terms and conditions for using our service.
      </p>
      <div className="pb-3 self-center">
        <label htmlFor="agree">
          <input
            type="checkbox"
            id="agree"
            checked={hasAgreed}
            onChange={handleAgreementChange}
            className="mr-1"
          />
          I agree to the terms and conditions.
        </label>
      </div>
      <Button button={{ text: "Continue", disabled: !hasAgreed }} />
    </div>
  );
}
