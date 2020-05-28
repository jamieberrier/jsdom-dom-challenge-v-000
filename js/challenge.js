document.addEventListener('DOMContentLoaded', function() {
  let intervalId = setInterval(updateCounter, 1000);
  const counter = document.getElementById('counter');
  const pause = document.getElementById('pause');
  const plus = document.getElementById('plus');
  const minus = document.getElementById('minus');
  const heart = document.getElementById('heart');
  const submit = document.getElementById('submit');

  pause.addEventListener('click', paused);

  function increment() {
    counter.innerText++;
  }

  function updateCounter() {
    increment();
  }

  function paused() {
    //disable buttons
    if (pause.innerText == 'pause'){
      pause.innerText = 'resume';
      //stop counter
      clearInterval(intervalId);
    } else {
      pause.innerText = 'pause';
      //restart counter
      intervalId = setInterval(updateCounter, 1000);
    }

  }

  intervalId;
});
