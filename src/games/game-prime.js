import _ from 'lodash';
import { runGame } from '../index.js';
import { getPrime } from '../assets/getPrime.js';

const gameRule = `Answer "yes" if given number is prime. Otherwise answer "no".`;

const generateBrainPrime = () => {
  const question = _.random(2, 30);
  const answer = getPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(generateBrainPrime, gameRule);
