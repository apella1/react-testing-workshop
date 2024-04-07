import { render, screen } from "@testing-library/react";
import BasicList from "../../src/components/BasicList";

describe("BasicList", () => {
  it("should render the right message when no items are provided", () => {
    render(<BasicList items={[]} />);
    expect(screen.getByText(/no items/i)).toBeInTheDocument();
  });

  it("should render the provided items", () => {
    const items = ["Java", "PHP", "Python"];
    render(<BasicList items={items} />);
    expect(screen.queryByText(/no items/i)).not.toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(items.length);

    listItems.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});
