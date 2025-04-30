 function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;              // the hour ‘0’ should be ‘12’
    const minutesPadded = minutes < 10
      ? '0' + minutes
      : minutes;
    const timeString = `${hours}:${minutesPadded}${ampm}`;
    const el = document.querySelector('.folio-nav__right');
    if (el) el.textContent = timeString;
  }

  // initial set
  updateTime();
  // then refresh every minute on the minute
  const now = new Date();
  const msToNextMinute = (60 - now.getSeconds()) * 1000 + 50;
  setTimeout(() => {
    updateTime();
    setInterval(updateTime, 60 * 1000);
  }, msToNextMinute);

