let name = '';
let count = 0;
const number = Math.floor(Math.random() * 100);

//Проверка загаданного числа
//console.log(number);

const output = document.getElementById('output'); //output
const prompt = document.getElementById('prompt'); //prompt
const input = document.querySelector('#prompt input');

prompt.addEventListener('submit', handleSubmit); //Вешаем событие на prompt

printMessage('Введите имя игрока: ');

input.focus(); //Делаем фокус на input

function handleSubmit(event) {
  event.preventDefault();
  processInput(input.value);
  input.value = '';
}

//Вывод сообщения
function printMessage(message) {
  let li = document.createElement('li');
  li.textContent = message;
  output.appendChild(li);
}

//Очиска output`a
function clear() {
  for (let i = 0; i < output.children.length; i++) {
    output.removeChild(output.children[i]);
  }
}

function processInput(input) {
  if (!input) return;
  if (!name) {
    name = input;
    clear();
    printMessage(
      `${name}, Загадайте число от 1 до 100 и попробуйте отгадать его за наименьшее количество попыток. После каждой попытки будет выводится сообщение - мало, много или верно.`,
    );
    return;
  }

  printMessage(input);
  let guess = Number.parseInt(input);
  if (Number.isNaN(guess)) return;
  count += 1;

  //Цикл проверки числа
  if (guess > number) {
    printMessage('Слишком много. Попробуй еще раз.');
  } else if (guess < number) {
    printMessage('Слишком мало. Попробуй еще раз');
  } else {
    printMessage(`Верно. Это число ${guess}`);
    printMessage(`Количество попыток ${count}.`);
    printMessage('Игра окончена');

    prompt.remove();
  }
}
