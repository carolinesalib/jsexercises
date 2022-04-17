const revert = require('../exercise3');

test('reverts array', () => {
  expect(revert([['a', 1], ['b', 2], ['c', 3]])).toEqual([['c', 3], ['b', 2], ['a', 1]]);
});
