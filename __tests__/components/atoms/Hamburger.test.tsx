import Hamburger from "@/components/atoms/hamburger/Hamburger";
import { render, screen, fireEvent } from "@testing-library/react";

let isMenuOpen = false;
const setIsMenuOpen = () => {
  isMenuOpen = !isMenuOpen;
};

describe('Hamburger component', () => {
  it('renders the component correctly', () => {
    render(<Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />)
    expect(screen.getByTestId('hamburger')).toBeInTheDocument();
  })

  it('toggles isMenuOpen state on click', () => {
    render(<Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />)
    const hamburger = screen.getByTestId('hamburger');

    fireEvent.click(hamburger);

    expect(isMenuOpen).toBe(true);
  })

  it('changes appearance when menu is open', () => {
    render(<Hamburger isMenuOpen={true} setIsMenuOpen={setIsMenuOpen} />);

    const firstLine = screen.getByTestId('first-line');
    const secondLine = screen.getByTestId('second-line');

    expect(firstLine).toHaveClass('translate-y-[0.2rem] rotate-45');
    expect(secondLine).toHaveClass('-translate-y-[0.2rem] -rotate-45 w-full');
  });
});