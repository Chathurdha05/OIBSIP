// Selecting the display element
const display = document.getElementById('display');

// Adding event listeners to all buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      // Clear the display
      display.innerText = '0';
    } else if (value === '=') {
      // Compute the result of the expression
      try {
        const result = eval(display.innerText);
        display.innerText = result;
      } catch (error) {
        display.innerText = 'Error';
      }
    } else {
      // Append value to the display
      if (display.innerText === '0') {
        display.innerText = value;
      } else {
        display.innerText += value;
      }
    }
  });
});
