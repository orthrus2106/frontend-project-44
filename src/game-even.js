import readlineSync from 'readline-sync';
import _ from 'lodash';

const getRandomNumber = () => {
  const min = Math.ceil(1);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const isEven = () => {
  let counter = 3;
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (counter > 0) {
    let randomNumber = _.random(0, 100);
    let answer = readlineSync.question(
      `Question: ${randomNumber}\nYour answer: `
    );
    if (
      (randomNumber % 2 === 0 && answer === 'yes') ||
      (randomNumber % 2 !== 0 && answer === 'no')
    ) {
      console.log('Correct!');
      counter -= 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${
          randomNumber % 2 === 0 ? 'yes' : 'no'
        }'.`
      );
      return;
    }
    randomNumber = getRandomNumber();
  }

  console.log(`Congratulations, ${userName}!`);
};
