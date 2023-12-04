import logosSet from "@/components/molecules/logosSlider/LogosSet";
import LogosSlider from "@/components/molecules/logosSlider/LogosSlider";
import { screen, render } from "@testing-library/react";

describe("LogosSlider component", () => {
  it('renders the correct number of logos', () => {
    render(<LogosSlider />)

    const logos = screen.getAllByRole('img');

    expect(logos).toHaveLength(logosSet.length * 3);
  })


})