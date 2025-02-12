import _ from 'lodash';

export const getProgression = () => {
  const ary = [];
  const start = _.random(5, 15);
  const step = _.random(2, 7);
  const length = _.random(6, 15);
  for (let i = 0; i < length; i += 1) {
    ary.push(start + i * step);
  }
  return ary;
};
