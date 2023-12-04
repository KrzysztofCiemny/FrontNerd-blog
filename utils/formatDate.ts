
const formatDate = (date: string) => {
  const parsedDate = new Date(date);

  const options = {
    year: 'numeric' as const,
    month: 'long' as const,
    day: 'numeric' as const
  };
  return parsedDate.toLocaleDateString('pl-PL', options);
}

export default formatDate