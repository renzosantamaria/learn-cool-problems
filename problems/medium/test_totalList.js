import assert from 'assert'
import { totalList } from './totalList.js'

describe('totalList', function () {
  it('should return 15 when [1, 2, 3, 4, 5] is passed as arg', function () {
    assert.deepEqual(totalList([1, 2, 3, 4, 5]), 15)
  })
  it('should return 21 when [1, 2, 3, 4, 5, 6] is passed as arg', function () {
    assert.deepEqual(totalList([1, 2, 3, 4, 5, 6]), 21)
  })
  it('should return 1 when [1] is passed as arg', function () {
    assert.deepEqual(totalList([1]), 1)
  })
  it('should return 854 when [1, 3, 5, 123, 331, 391, 0] is passed as arg', function () {
    assert.deepEqual(totalList([1, 3, 5, 123, 331, 391, 0]), 854)
  })
})