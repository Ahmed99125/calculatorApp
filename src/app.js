const btns = document.querySelectorAll('button');
const screen = document.querySelector('.screen');
const operators = ['+', '-', '/', '×'];
const toggleBtn = document.querySelector('.toggle');

const btnStatus = (btn) => {
  btn.classList.toggle('active');
}

toggleBtn.addEventListener('click', e => changeTheme(e))

const changeTheme = (e) => {
  const spans = document.querySelectorAll('.theme-shifter');
  const spanContainer = document.querySelector('.shift-container');
  const toggleBall = document.querySelector('.toggle-ball');

  spans.forEach(span => {
    span.style.width = `${spanContainer.clientWidth / 3}px`;
  });

  if (e.target.classList.contains('theme-1')) {
    toTheme1();
    toggleBall.style.left = '5px';
  } else if (e.target.classList.contains('theme-2')) {
    toTheme2();
    toggleBall.style.left = 'calc(50% - 10px)';
  } else if (e.target.classList.contains('theme-3')) {
    toTheme3();
    toggleBall.style.left = '70%';
  }
}

const toTheme1 = () => {
  const background = document.body, keypad = document.querySelector('.key-pad'), 
  numKey = document.querySelectorAll('.num'), equalBtn = document.querySelector('.equal'),
  del = document.querySelector('.del'), reset = document.querySelector('.reset'),
  toggle = document.querySelector('.toggle'), header = document.querySelector('header'),
  heading = header.firstElementChild, themeHeading = document.querySelector('.theme-heading'),
  themeNumber = document.querySelectorAll('.theme-number'),
  op = document.querySelectorAll('.operator'), dot = document.querySelectorAll('.dot'), toggleBall = document.querySelector('.toggle-ball');

  background.style.backgroundColor = 'var(--main-background-1)';
  heading.style.color = 'var(--white)';
  themeHeading.style.color = 'var(--white)';
  themeNumber.forEach(one => one.style.color = 'var(--white)');
  keypad.style.backgroundColor = 'var(--keypad-background-1)';
  toggle.style.backgroundColor = 'var(--keypad-background-1)';
  numKey.forEach(num => num.style.backgroundColor = 'var(--key-background-1)');
  numKey.forEach(num => num.style.boxShadow = '0 4px 0 0 var(--key-shadow-1)');
  numKey.forEach(num => num.style.color = 'var(--dark-blue-1)');
  dot.forEach(num => num.style.backgroundColor = 'var(--key-background-1)');
  dot.forEach(num => num.style.boxShadow = '0 4px 0 0 var(--key-shadow-1)');
  dot.forEach(num => num.style.color = 'var(--dark-blue-1)');
  op.forEach(num => num.style.backgroundColor = 'var(--key-background-1)');
  op.forEach(num => num.style.boxShadow = '0 4px 0 0 var(--key-shadow-1)');
  op.forEach(num => num.style.color = 'var(--dark-blue-1)');
  screen.style.backgroundColor = 'var(--screen-background-1)';
  screen.style.color = 'var(--white)';
  equalBtn.style.backgroundColor = 'var(--equal-background-1)';
  toggleBall.style.backgroundColor = 'var(--equal-background-1)';
  equalBtn.style.boxShadow = '0 4px 0 0 var(--equal-shadow-1)';
  equalBtn.style.color = 'var(--white)';
  del.style.backgroundColor = 'var(--del-background-1)';
  del.style.boxShadow = '0 4px 0 0 var(--del-shadow-1)';
  reset.style.backgroundColor = 'var(--del-background-1)';
  reset.style.boxShadow = '0 4px 0 0 var(--del-shadow-1)';
}

const toTheme2 = () => {
  const background = document.body, keypad = document.querySelector('.key-pad'), 
  numKey = document.querySelectorAll('.num'), equalBtn = document.querySelector('.equal'),
  del = document.querySelector('.del'), reset = document.querySelector('.reset'),
  toggle = document.querySelector('.toggle'), header = document.querySelector('header'),
  heading = header.firstElementChild, themeHeading = document.querySelector('.theme-heading'),
  themeNumber = document.querySelectorAll('.theme-number'),
  op = document.querySelectorAll('.operator'), dot = document.querySelectorAll('.dot'), toggleBall = document.querySelector('.toggle-ball');

  background.style.backgroundColor = 'var(--main-background-2)';
  heading.style.color = 'var(--dark-blue-2)';
  themeHeading.style.color = 'var(--dark-blue-2)';
  themeNumber.forEach(one => one.style.color = 'var(--dark-blue-2)');
  keypad.style.backgroundColor = 'var(--keypad-background-2)';
  toggle.style.backgroundColor = 'var(--keypad-background-2)';
  numKey.forEach(num => num.style.backgroundColor = 'var(--key-background-2)');
  numKey.forEach(num => num.style.boxShadow = '0 4px 0 0 var(--key-shadow-2)');
  numKey.forEach(num => num.style.color = 'var(--dark-blue-2)');
  dot.forEach(num => num.style.backgroundColor = 'var(--key-background-2)');
  dot.forEach(num => num.style.boxShadow = '0 4px 0 0 var(--key-shadow-2)');
  dot.forEach(num => num.style.color = 'var(--dark-blue-2)');
  op.forEach(num => num.style.backgroundColor = 'var(--key-background-2)');
  op.forEach(num => num.style.boxShadow = '0 4px 0 0 var(--key-shadow-2)');
  op.forEach(num => num.style.color = 'var(--dark-blue-2)');
  screen.style.backgroundColor = 'var(--screen-background-2)';
  screen.style.color = 'var(--dark-blue-2)';
  equalBtn.style.backgroundColor = 'var(--equal-background-2)';
  toggleBall.style.backgroundColor = 'var(--equal-background-2)';
  equalBtn.style.boxShadow = '0 4px 0 0 var(--equal-shadow-2)';
  equalBtn.style.color = 'var(--white)';
  del.style.color = 'var(--white)';
  del.style.backgroundColor = 'var(--del-background-2)';
  del.style.boxShadow = '0 4px 0 0 var(--del-shadow-2)';
  reset.style.color = 'var(--white)';
  reset.style.backgroundColor = 'var(--del-background-2)';
  reset.style.boxShadow = '0 4px 0 0 var(--del-shadow-2)';
}

const toTheme3 = () => {
  const background = document.body, keypad = document.querySelector('.key-pad'), 
  numKey = document.querySelectorAll('.num'), equalBtn = document.querySelector('.equal'),
  del = document.querySelector('.del'), reset = document.querySelector('.reset'),
  toggle = document.querySelector('.toggle'), header = document.querySelector('header'),
  heading = header.firstElementChild, themeHeading = document.querySelector('.theme-heading'),
  themeNumber = document.querySelectorAll('.theme-number'),
  op = document.querySelectorAll('.operator'), dot = document.querySelectorAll('.dot'), toggleBall = document.querySelector('.toggle-ball');

  background.style.backgroundColor = 'var(--main-background-3)';
  heading.style.color = 'var(--light-yellow)';
  themeHeading.style.color = 'var(--light-yellow)';
  themeNumber.forEach(one => one.style.color = 'var(--light-yellow)');
  keypad.style.backgroundColor = 'var(--keypad-background-3)';
  toggle.style.backgroundColor = 'var(--keypad-background-3)';
  numKey.forEach(num => num.style.backgroundColor = 'var(--key-background-3)');
  numKey.forEach(num => num.style.boxShadow = '0 4px 0 0 var(--key-shadow-3)');
  numKey.forEach(num => num.style.color = 'var(--light-yellow)');
  dot.forEach(num => num.style.backgroundColor = 'var(--key-background-3)');
  dot.forEach(num => num.style.boxShadow = '0 4px 0 0 var(--key-shadow-3)');
  dot.forEach(num => num.style.color = 'var(--light-yellow)');
  op.forEach(num => num.style.backgroundColor = 'var(--key-background-3)');
  op.forEach(num => num.style.boxShadow = '0 4px 0 0 var(--key-shadow-3)');
  op.forEach(num => num.style.color = 'var(--light-yellow)');
  screen.style.backgroundColor = 'var(--screen-background-3)';
  screen.style.color = 'var(--light-yellow)';
  equalBtn.style.color = 'var(--dark-blue-3)';
  equalBtn.style.backgroundColor = 'var(--equal-background-3)';
  toggleBall.style.backgroundColor = 'var(--equal-background-3)';
  equalBtn.style.boxShadow = '0 4px 0 0 var(--equal-shadow-3)';
  del.style.backgroundColor = 'var(--del-background-3)';
  del.style.boxShadow = '0 4px 0 0 var(--del-shadow-3)';
  del.style.color = 'var(--white)';
  reset.style.backgroundColor = 'var(--del-background-3)';
  reset.style.boxShadow = '0 4px 0 0 var(--del-shadow-3)';
  reset.style.color = 'var(--white)';
}

const organizeScreen = () => {
  // screen.addEventListener('keydown', e => isValid(e));
  screen.addEventListener('keyup', () => decorateNumbers());
}

const decorateNumbers = () => {
  const numbers = splitNumbers().numbers, res = [], operators = splitNumbers().operators;
  let curNum = numbers[numbers.length - 1], result = '';
  if (curNum.includes(',')) {
    const arr = curNum.split(',');
    curNum = '';
    arr.forEach(i => {
      curNum += i;
    });
  }

  if (curNum.length > 3) {
    curNum = curNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    numbers[numbers.length - 1] = curNum;

    for (let i = 0; i < numbers.length; i++) {
      res.push(numbers[i]);
      if (operators.length > i) {
        res.push(operators[i]);
      }
    }
    res.forEach(i => {
      result += i;
    });
    screen.textContent = result;
  }
}

const splitNumbers = () => {
  let numbers = [screen.textContent], op = [], text = screen.textContent.split('');

  text.forEach(ch => {
    if(operators.includes(ch)) {
      numbers = screen.textContent.split(/[\/\+\-\×]/);
      op.push(ch);
    }
  });

  return {
    numbers,
    operators: op
  };
}

const isOperator = (ch) => {
   if (operators.includes(ch) && (screen.textContent != '' && screen.textContent != '.')) {
    return true;
  }
   return false;
}

const operatorValidation = () => {
  if (!operators.includes(screen.textContent[screen.textContent.length - 1])) {
    return true;
  }

  return false;
}

const isDecimal = () => {
  const numbers = splitNumbers().numbers;
  let state = true;
  if (numbers[0].length > 0) {
    numbers.forEach(number => {
      if(number.includes('.')) {
        state = false;
      } else {
        state = true;
      }
    });
  }

  return state;
}

calcNumbers = () => {
  const data = splitNumbers(), numbers = [];
  console.log(data.numbers);
  let res = 0;
  
  if (data.numbers.length > 1) {
    data.numbers.forEach(number => {
      number = parseFloat(number.replace(/\,/g, ''));
      numbers.push(number);
    });
    
    for (let i = 0; i < numbers.length; i++) {
      if (data.operators.length > i) {
        res = calculate(data.operators[i], numbers[i], numbers[i+1]);
        numbers[i+1] = res;
        console.log(res);
      }
    }
  }
  return res;
}

calculate = (op, num1, num2) => {
  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '×':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}

// const isValid = (e) => {
//   const ch = String.fromCharCode(e.which);
//   if (!/[0-9]/.test(ch)) {
//     if (ch == '.') {
//       if (!isDecimal()) {
//         e.preventDefault();
//       }
//     } else if (isOperator(ch)) {
//         if(!operatorValidation()) {
//           e.preventDefault();
//         }
//     } else {
//       e.preventDefault();
//     }
//   }
// }

btns.forEach(btn => {
  btn.addEventListener('mousedown', e => {
    btnStatus(e.target);
    if (e.target.classList.contains('num')) {
      screen.textContent += e.target.textContent;
    } else if (e.target.classList.contains('del')) {
      let str = screen.textContent;
      str = str.slice(0, -1);
      screen.textContent = str;
    } else if (e.target.classList.contains('reset')) {
      screen.textContent = '';
    } else if (e.target.classList.contains('dot')) {
      if(isDecimal()) {
        screen.textContent += e.target.textContent;
      }
    } else if (e.target.classList.contains('operator') && (screen.textContent != '' && screen.textContent != '.')) {
      if (operatorValidation()) {
        screen.textContent += e.target.textContent;
      }
    } else if (e.target.classList.contains('equal')) {
      const res = calcNumbers();
      screen.textContent = res;
    }
  });
  btn.addEventListener('mouseup', e => {
    btnStatus(e.target);
    decorateNumbers();
  });
});

organizeScreen();