import _ from 'lodash';
import { runGame } from '../index.js';
import { getProgression } from '../assets/getProgression.js';

const gameRule = 'What number is missing in the progression?';

const generateBrainProgression = () => {
  const ary = getProgression();
  const randomIndex = _.random(1, ary.length - 1);
  const answer = ary[randomIndex].toString();
  ary[randomIndex] = '..';
  const question = ary.join(' ');
  return [question, answer];
};

export default () => runGame(generateBrainProgression, gameRule);
