const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = 0;

  function updateCounter() {
    const dataTarget = Number(counter.getAttribute('data-target'));
    const textNum = Number(counter.innerText);
    console.log(textNum);
    const numDivider = dataTarget / 200;

    console.log(numDivider)
  
    if(textNum < dataTarget) {
      counter.innerText = `${Math.ceil(textNum + numDivider)}`
      setTimeout(updateCounter, 5)
    }
    else {
      counter.innerText = dataTarget;
    }
  }


  updateCounter();
})