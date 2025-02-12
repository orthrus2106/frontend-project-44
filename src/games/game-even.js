import _ from 'lodash';
import runGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateBrainEven = () => {
  const question = _.random(0, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(generateBrainEven, gameRules);
