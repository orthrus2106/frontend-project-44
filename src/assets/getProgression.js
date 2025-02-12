import _ from 'lodash';

export const getProgression = () => {
  const ary = [];
  const start = _.random(5, 15);
  const step = _.random(2, 7);
  const end = start + _.random(20, 35);
  for (let i = 0; start + i * step < end; i += 1) {
    ary.push(start + i * step);
  }
  return ary;
};
