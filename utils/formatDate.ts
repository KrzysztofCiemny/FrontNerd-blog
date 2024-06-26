const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("pl-PL", options);
};

export default formatDate;
