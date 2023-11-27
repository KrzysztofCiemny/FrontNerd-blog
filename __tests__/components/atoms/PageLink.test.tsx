import PageLink from "@/components/atoms/pageLink/PageLink";
import { render, screen } from "@testing-library/react";

const props = {
  children: 'Example Link',
  to: '/example-page',
  dark: true,
};

describe('PageLink component', () => {
  it('correctly renders the component', () => {
    render(<PageLink {...props} />);
    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveTextContent('Example Link');

    expect(linkElement).toHaveClass('text-darkBlue');
  });

  it('directs to the right place', () => {
    render(<PageLink {...props} />);
    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', '/example-page');
  });
});