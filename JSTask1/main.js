let startTime;
let elapsedTime = 0;
let timerInterval;


$(document).ready(function() {
  $('#start').click(function() {
    $(this).prop("disabled", true);
    $('#stop').prop("disabled", false);
    $('#reset').prop("disabled", false);
    start();
  });

  function start() {
    clearInterval(timerInterval);
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;

      const h = String(Math.floor(elapsedTime / 3600000)).padStart(2, '0');
      const m = String(Math.floor((elapsedTime % 3600000) / 60000)).padStart(2, '0');
      const s = String(Math.floor((elapsedTime % 60000) / 1000)).padStart(2, '0');
      const ms = String(Math.floor((elapsedTime % 1000) / 10)).padStart(2, '0');

      document.getElementById('time').textContent = `${h}:${m}:${s}.${ms}`;
    }, 10);
    console.log("タイマーがスタートしました");
  }
});


$(document).ready(function() {
  $('#stop').click(function() {
    $(this).prop("disabled", true);
    $('#start').prop("disabled", false);
    $('#reset').prop("disabled", false);
    stop();
  });

  function stop() {
    clearInterval(timerInterval);
    console.log("タイマーがストップしました");
  }
});


$(document).ready(function() {
  $('#reset').click(function() {
    $(this).prop("disabled", true);
    $('#start').prop("disabled", false);
    $('#stop').prop("disabled", true);
    reset();
  });

  function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById('time').textContent = "00:00:00.00";
  console.log("タイマーがリセットされました");
  }
});
