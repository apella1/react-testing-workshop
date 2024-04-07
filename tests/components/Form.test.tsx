import { render, screen } from "@testing-library/react";
import Form from "../../src/components/Form";
import userEvent from "@testing-library/user-event";

describe("Form", () => {
  it("should render the form correctly", () => {
    render(<Form />);
    const firstNameInputEl = screen.getByLabelText(/first name/i);
    const firstNameLabel = screen.getByText(/First Name/i);
    const submitBtn = screen.getByRole("button");
    expect(firstNameInputEl).toBeInTheDocument();
    expect(firstNameLabel).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(firstNameInputEl).toHaveAttribute("type", "text");
  });

  it("should handle user inputs", async () => {
    render(<Form />);
    const firstNameInputEl = screen.getByLabelText(/first name/i);
    expect(firstNameInputEl).toBeInTheDocument();

    const user = userEvent.setup();
    const name = "Peter";
    await user.type(firstNameInputEl, name);

    const updatedFirstNameValue = screen.getByDisplayValue(name);
    expect(updatedFirstNameValue).toBeInTheDocument();
  });
});
