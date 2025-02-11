import readlineSync from 'readline-sync';
import _ from 'lodash';

export const brainCalc = () => {
  const actions = ['+', '-', '*'];
  let counter = 3;
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nWhat is the result of the expression?`);
  while (counter > 0) {
    let num1 = _.random(1, 10);
    let num2 = _.random(1, 10);
    let randomAction = _.sample(actions);
    let correctAnswer = 0;
    switch (randomAction) {
      case '+':
        console.log(`Question: ${num1} + ${num2}`);
        correctAnswer = num1 + num2;
        break;
      case '-':
        console.log(`Question: ${num1} - ${num2}`);
        correctAnswer = num1 - num2;
        break;
      case '*':
        console.log(`Question: ${num1} * ${num2}`);
        correctAnswer = num1 * num2;
        break;
    }
    let answer = readlineSync.question('Your answer: ');
    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      counter -= 1;
    } else {
      console.log(
        `${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
