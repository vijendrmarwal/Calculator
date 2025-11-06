let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach(button => {
  button.addEventListener('click', (b) => {
    let value = b.target.innerText;

    if (value === '=') {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = 'Error';
        string = '';
      }
    } 
    else if (value === 'AC') {
      string = '';
      input.value = '0';
    } 
    else if (value === 'DEL') {
      string = string.slice(0, -1);
      input.value = string || '0';
    } 
    else if (b.target.id === 'plusminus') {
      if (string) {
        string = String(-eval(string));
        input.value = string;
      }
    } 
    else {
      if (input.value === '0' && value !== '.') {
        string = value;
      } else {
        string += value;
      }
      input.value = string;
    }
  });
});
