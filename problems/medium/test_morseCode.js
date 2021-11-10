import assert from 'assert'
import { morseCode } from './morseCode.js'

describe('morseCode', function () {
  it('should test capital and small letters', function () {
    assert.equal(morseCode('ABCdef'), '.- -... -.-. -.. . ..-.')
  })
  it('should test empty string', function () {
    assert.equal(morseCode(''), '')
  })
  it('should test a combination of letters and numbers', function () {
    assert.equal(morseCode('abc123'), '.- -... -.-. .---- ..--- ...--')
  })
  it('should test that spaces are handled correctly', function () {
    assert.equal(morseCode('the quick brown fox'), '- .... .  --.- ..- .. -.-. -.-  -... .-. --- .-- -.  ..-. --- -..-')
  })
  it('should test that punctuation is handled correctly', function () {
    assert.equal(morseCode('Hello World'), '.... . .-.. .-.. ---  .-- --- .-. .-.. -..')
  })
  it('should test numbers are converted to strings', function () {
    assert.equal(morseCode(123), '.---- ..--- ...--')
  })
})