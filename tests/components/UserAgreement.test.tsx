import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserAgreement from "../../src/components/UserAgreement";

describe("UserAgreement", () => {
  const renderComponent = () => {
    render(<UserAgreement />);
    const heading = screen.getByRole("heading");
    const checkbox = screen.getByRole("checkbox");
    const btn = screen.getByRole("button");
    return {
      heading,
      checkbox,
      btn,
    };
  };

  it("should render with correct text and initial state", () => {
    const { btn, heading, checkbox } = renderComponent();
    expect(heading).toHaveTextContent(/user agreement/i);
    expect(checkbox).not.toBeChecked();
    expect(btn).toHaveTextContent(/continue/i);
    expect(btn).toBeDisabled();
  });

  it("should enable the button when the checkbox is checked", async () => {
    const { checkbox, btn } = renderComponent();
    const user = userEvent.setup();
    await user.click(checkbox);
    expect(btn).toBeEnabled();
  });
});
