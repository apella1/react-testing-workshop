import { render, screen } from "@testing-library/react";
import ImagesList from "../../src/components/ImagesList";

describe("ImageList", () => {
  it("should render nothing for empty imageUrls", () => {
    const { container } = render(<ImagesList imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render a list of images when urls are provided", () => {
    const imageUrls = ["url1", "url2"];
    render(<ImagesList imageUrls={imageUrls} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(imageUrls.length);
    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
