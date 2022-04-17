const revert = require('../exercise1');

test('reverts array', () => {
  expect(revert([1,2,3,4])).toEqual([4,3,2,1]);
});
