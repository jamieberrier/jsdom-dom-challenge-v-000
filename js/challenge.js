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
  plus.addEventListener('click', increment);
  minus.addEventListener('click', decrement);

  function increment() {
    counter.innerText++;
  }

  function decrement() {
    counter.innerText--;
  }

  function updateCounter() {
    increment();
  }
  // pause button
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
