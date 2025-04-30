// 1. Array of month names
const monthNames = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

/**
 * Returns the name of the month immediately before the given date's month.
 * @param {Date} [date=new Date()] — the date whose previous month you want
 * @returns {string} e.g. "March" if today is in April
 */
function getPreviousMonthName(date = new Date()) {
  const currentMonthIndex = date.getMonth();       // 0 = January … 11 = December
  const prevMonthIndex = (currentMonthIndex + 11) % 12; // subtract 1, wrap around
  return monthNames[prevMonthIndex];
}

// 2. Write it into the span
const span = document.getElementById("prev-month");
if (span) {
  span.textContent = getPreviousMonthName();
}

