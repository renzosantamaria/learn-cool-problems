import assert from 'assert'
import { digits } from './digits.js'

[digits, [2342], [2,3,4,2]],
[digits, [123456], [1, 2, 3, 4, 5, 6]],
[digits, [1], [1]],
[digits, [981092830912], [9, 8, 1, 0, 9, 2, 8, 3, 0, 9, 1, 2]],

describe('digits', function () {
  it('should return [2,3,4,2] when [2342] is passed as arg', function () {
    assert.deepEqual(digits([2342]), [2,3,4,2])
  })
  it('should return [1, 2, 3, 4, 5, 6] when [123456] is passed as arg', function () {
    assert.deepEqual(digits([123456]), [1, 2, 3, 4, 5, 6])
  })
  it('should return [1] when [1] is passed as arg', function () {
    assert.deepEqual(digits([1]), [1])
  })
  it('should return [9, 8, 1, 0, 9, 2, 8, 3, 0, 9, 1, 2] when [981092830912] is passed as arg', function () {
    assert.deepEqual(digits([981092830912]), [9, 8, 1, 0, 9, 2, 8, 3, 0, 9, 1, 2])
  })
})