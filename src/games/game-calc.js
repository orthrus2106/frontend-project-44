import _ from 'lodash';
import { runGame } from '../index.js';

const gameRules = 'What is the result of the expression?';

const generateBrainCalc = () => {
  const actions = ['+', '-', '*'];
  let num1 = _.random(1, 10);
  let num2 = _.random(1, 10);
  let randomAction = _.sample(actions);
  let answer = 0;
  let question = '';
  switch (randomAction) {
    case '+':
      question = `${num1} + ${num2}`;
      answer = (num1 + num2).toString();
      break;
    case '-':
      question = `${num1} - ${num2}`;
      answer = (num1 - num2).toString();
      break;
    case '*':
      question = `${num1} * ${num2}`;
      answer = (num1 * num2).toString();
      break;
  }
  return [question, answer];
};

export default () => runGame(generateBrainCalc, gameRules);
