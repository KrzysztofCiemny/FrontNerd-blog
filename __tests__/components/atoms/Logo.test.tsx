import Logo from "@/components/atoms/logo/Logo";
import { render, screen } from "@testing-library/react";

it('Correctly renders the Logo component', () => {
  render(<Logo />);

  const logo = screen.getByText('Frontnerd');

  expect(logo).toBeInTheDocument()

});

it('Leads to the correct url', () => {
  render(<Logo />);

  const logoLink = screen.getByText('Frontnerd');

  expect(logoLink).toHaveAttribute("href", "/");

});