import PostPreviewCard from "@/components/molecules/postPreviewCard/PostPreviewCard";
import { PostMetadata } from "@/models/models";
import { screen, render } from "@testing-library/react";

const mockedPost: PostMetadata = {
  slug: 'example-slug',
  images: ['/image-url-1', '/image-url-2', '/image-url-3'],
  alt: 'Example Alt Text',
  title: 'Example Title',
  description: "xyz",
  date: "01.01.2023"
}

it('renders PostPreviewCard component correctly', () => {
  render(<PostPreviewCard {...mockedPost} />)
  const titleElement = screen.getByText('Example Title');
  expect(titleElement).toBeInTheDocument();

  const imageElement = screen.getByAltText('Example Alt Text');
  expect(imageElement).toBeInTheDocument();
})

it('directs to the correct url', () => {
  render(<PostPreviewCard {...mockedPost} />)
  const link = screen.getByRole('link')
})