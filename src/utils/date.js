/* Formats a date as a string in the format 'Month day, year'. */
export function getFormattedDate(date) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} ${date
    .getHours()
    .toString()
    .replace(/^(\d)$/, "0$1")}:${date
    .getMinutes()
    .toString()
    .replace(/^(\d)$/, "0$1")}`;
}
