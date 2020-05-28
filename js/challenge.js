document.addEventListener('DOMContentLoaded', function() {
  let intervalId = setInterval(updateCounter, 1000);
  const counter = document.getElementById('counter');
  // buttons
  const pause = document.getElementById('pause');
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  const heart = document.getElementById('heart');
  const submit = document.getElementById('submit');

  // event listeners
  pause.addEventListener('click', paused);

  function increment() {
    counter.innerText++;
  }

  function updateCounter() {
    increment();
  }

  function paused() {
    if (pause.innerText == 'pause'){
      // change button text
      pause.innerText = 'resume';
      // disable buttons
      plus.disable = true;
      minus.disable = true;
      heart.disable = true;
      submit.disable = true;
      //stop counter
      clearInterval(intervalId);
    } else {
      // change button text
      pause.innerText = 'pause';
      // enable buttons
      plus.disable = false;
      minus.disable = false;
      heart.disable = false;
      submit.disable = false;
      //restart counter
      intervalId = setInterval(updateCounter, 1000);
    }
  }

  intervalId;
});
