import Navigation from "@/components/molecules/navigation/Navigation";
import { render, screen } from "@testing-library/react"

let isMenuOpen = false;
const setIsMenuOpen = () => {
  isMenuOpen = !isMenuOpen;
};

it('renders the component correctly', () => {
  render(<Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />)
  expect(screen.getByTestId('navigation')).toBeInTheDocument();
})

it('renders navigation with correct links', () => {
  render(<Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />)

  expect(screen.getByText('Strona główna')).toHaveAttribute('href', '/');
  expect(screen.getByText('Artykuły')).toHaveAttribute('href', '/posts');
});