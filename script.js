document.addEventListener('DOMContentLoaded', function() {
  const display = document.getElementById('display');
  const buttons = Array.from(document.querySelectorAll('button'));

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const buttonTexto = this.textContent;
          if (buttonTexto === '=') {
              try {
                  display.value = eval(display.value);
              } catch (error) {
                  display.value = 'Error';
              }
          } else if (buttonTexto === 'C') {
              display.value = '';
          } else {
              display.value += buttonTexto;
          }
      });
  });
});
