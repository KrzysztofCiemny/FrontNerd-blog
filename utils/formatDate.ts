
const formatDate = (date: any) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('pl-PL', options);
}

export default formatDate