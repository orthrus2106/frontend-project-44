import _ from 'lodash';
import runGame from '../index.js';
import getGCD from '../assets/getgcd.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const generateBrainGCD = () => {
  const num1 = _.random(0, 10);
  const num2 = _.random(0, 10);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2).toString();
  return [question, answer];
};

export default () => runGame(generateBrainGCD, gameRule);
