import { render, screen } from "@testing-library/react";
import HelloWorld from "../../src/components/HelloWorld";

describe("HelloWorld", () => {
  const text = "Hello world!";
  const renderComponent = () => {
    render(<HelloWorld text={text} />);
    const heading = screen.getByRole("heading");
    return {
      heading,
    };
  };

  it("should render the provided text", () => {
    const { heading } = renderComponent();
    expect(heading).toHaveTextContent(text);
  });

  it("should render alternate text if no value is provided", () => {
    render(<HelloWorld />);
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});
