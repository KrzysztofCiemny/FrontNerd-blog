import LogosSlider from "@/components/molecules/logosSlider/LogosSlider";
import logosSet from "@/components/molecules/logosSlider/LogosSet";
import { render, screen } from "@testing-library/react"

it("renders the component correctly", () => {
  render(<LogosSlider />)
  expect(screen.getByTestId('slider')).toBeInTheDocument();
})

it('renders correct number of logos', () => {
  render(<LogosSlider />)
  const logos = screen.getAllByRole('img')
  expect(logos).toHaveLength(logosSet.length * 3);
})