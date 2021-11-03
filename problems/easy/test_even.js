import assert from 'assert'
import { even } from './even.js'

describe('Array', function() {
    describe('#indexOf()', function() {
        it('Should return an array of even numbers', function() {
            const result = even([1, 2, 3, 4, 5])
            assert.deepEqual(result, [2, 4])
        })
    })
})