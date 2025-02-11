import readlineSync from 'readline-sync';
import _ from 'lodash';

export const brainEven = () => {
  let counter = 3;
  const userName = readlineSync.question('May I have your name? ');
  console.log(
    `Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`
  );

  while (counter > 0) {
    let randomNumber = _.random(0, 100);
    let answer = readlineSync.question(
      `Question: ${randomNumber}\nYour answer: `
    );
    let correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
      counter -= 1;
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      return;
    }
    randomNumber = _.random(0, 100);
  }

  console.log(`Congratulations, ${userName}!`);
};
