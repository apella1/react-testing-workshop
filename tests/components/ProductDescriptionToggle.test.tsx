import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductDescriptionToggle from "../../src/components/ProductDescriptionToggle";

describe("ProductDescriptionToggle", () => {
  const limit = 150;
  const longDescription = "d".repeat(limit + 2);
  const truncatedDescription = longDescription.substring(0, limit) + "...";

  it("should render the given text if its length is equal to or less than the limit", () => {
    const description = "sample text";
    render(<ProductDescriptionToggle description={description} />);
    const paragraph = screen.getByText(description);
    expect(paragraph).toBeInTheDocument();
  });

  it("should truncate text if longer than 150 characters", () => {
    render(<ProductDescriptionToggle description={longDescription} />);
    const paragraph = screen.getByText(truncatedDescription);
    expect(paragraph).toBeInTheDocument();
    const showOptBtn = screen.getByRole("button");
    expect(showOptBtn).toBeInTheDocument();
    expect(showOptBtn).toHaveTextContent(/more/i);
  });

  it("should expand text when 'Read More' button is clicked", async () => {
    render(<ProductDescriptionToggle description={longDescription} />);

    const readMoreBtn = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(readMoreBtn);

    expect(screen.getByText(longDescription)).toBeInTheDocument();

    expect(readMoreBtn).toHaveTextContent(/less/i);
  });

  it("should collapse text when 'Read Less' button is clicked", async () => {
    render(<ProductDescriptionToggle description={longDescription} />);

    const readMoreBtn = screen.getByRole("button", { name: /more/i });
    const user = userEvent.setup();

    await user.click(readMoreBtn);

    const readLessBtn = screen.getByRole("button", { name: /less/i });
    await user.click(readLessBtn);

    expect(screen.getByText(truncatedDescription)).toBeInTheDocument();

    expect(readMoreBtn).toHaveTextContent(/more/i);
  });
});
