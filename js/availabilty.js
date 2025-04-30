document.addEventListener('DOMContentLoaded', () => {
  const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  function getPreviousMonthName(date = new Date()) {
    const currentMonthIndex = date.getMonth();
    const prevMonthIndex = (currentMonthIndex + 11) % 12;
    return monthNames[prevMonthIndex];
  }

  const span = document.getElementById("prev-month");
  if (span) {
    span.textContent = getPreviousMonthName();
  }
});
