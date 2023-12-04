import formatDate from "@/utils/formatDate";

const mockedDate = '2023-01-01'

it('format date from 2023-01-01 to 1 stycznia 2023 format', () => {
  expect(formatDate(mockedDate)).toBe('1 stycznia 2023');
})