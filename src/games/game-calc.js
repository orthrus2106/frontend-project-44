import _ from 'lodash';
import runGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const generateBrainCalc = () => {
  const actions = ['+', '-', '*'];
  const num1 = _.random(1, 10);
  const num2 = _.random(1, 10);
  const randomAction = _.sample(actions);
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
    default:
      throw new Error(`Unknown operation: ${randomAction}`);
  }
  return [question, answer];
};

export default () => runGame(generateBrainCalc, gameRules);
