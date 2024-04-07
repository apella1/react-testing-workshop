import { useState } from "react";
import Button from "./ui/Button";

export default function ProductDescriptionToggle({
  description,
}: {
  description: string;
}) {
  const [isFullDescriptionVisible, setIsFullDescriptionVisible] =
    useState(false);

  const toggleDescription = () => {
    setIsFullDescriptionVisible(!isFullDescriptionVisible);
  };

  return (
    <div className="flex flex-col space-y-4">
      <h4 className="text-3xl font-medium self-center">Product Description</h4>
      <div className="text-base flex flex-col space-y-5 text-center">
        {description.length <= 150 ? (
          <p>{description}</p>
        ) : isFullDescriptionVisible ? (
          <p>{description}</p>
        ) : (
          <div>
            <p>{description.substring(0, 150)}...</p>
          </div>
        )}
        <Button
          button={{
            text: isFullDescriptionVisible ? "Read Less" : "Read More",
            onClick: toggleDescription,
          }}
        />
      </div>
    </div>
  );
}
