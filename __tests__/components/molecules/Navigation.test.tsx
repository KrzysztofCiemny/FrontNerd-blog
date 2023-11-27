import Navigation from "@/components/molecules/navigation/Navigation";
import { fireEvent, render, screen } from "@testing-library/react"

let isMenuOpen = false;
const setIsMenuOpen = () => {
  isMenuOpen = !isMenuOpen;
};

it('renders the component correctly', () => {
  render(<Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />)
  expect(screen.getByTestId('navigation')).toBeInTheDocument();
})

