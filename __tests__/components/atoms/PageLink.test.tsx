import PageLink from "@/components/atoms/pageLink/PageLink";
import { render, screen } from "@testing-library/react";

it('Correctly renders the PageLink component', () => {
  render(<PageLink />);

  const logo = screen.getByText('Frontnerd');

  expect(logo).toBeInTheDocument()

});