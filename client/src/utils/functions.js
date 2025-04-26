export function dateFormatter(date) {
  const rawDate = new Date(date);
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
  const formattedDate = formatter.format(rawDate);
  return formattedDate;
}
