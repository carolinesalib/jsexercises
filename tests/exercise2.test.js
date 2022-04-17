const revert = require('../exercise2');

test('reverts array', () => {
  expect(revert([['a'], ['b'], ['c']])).toEqual([['c'], ['b'], ['a']]);
});
