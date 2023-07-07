// The word "toggle" means turn on/off.
function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-togggled')) {

   // Before turning this button ON, check if there is 
   // already a button that is turned ON and turn it OFF.
    turnOffPreviousButton();
    
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

  function turnOffPreviousButton() {
    const previousButton = document.querySelector('.is-toggled');
    if (previousButton) {
      previousButton.classList.remove('is-toggled');
    }
  }
