$("document").ready(() => {
  /**
   * The code for the countdown follows
   */
  var deadline = "January 18 2020 7:00 PM PST";

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClockTime(clock, timeData) {
    clock.innerHTML =
      timeData.days +
      " days " +
      timeData.hours +
      " hours " +
      timeData.minutes +
      " minutes " +
      timeData.seconds +
      " seconds";
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    setClockTime(clock, getTimeRemaining(endtime));
    var timeinterval = setInterval(function () {
      var t = getTimeRemaining(endtime);
      setClockTime(clock, t);
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }, 1000);
  }

  initializeClock("clockdiv", deadline);
});
