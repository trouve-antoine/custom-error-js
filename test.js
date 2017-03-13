const chai = require('chai')
const CustomError = require('.')

const assert = chai.assert

describe('basic usage', function() {
  const CacaError = CustomError('CacaError')
  const Error1 = new CacaError('test1')
  
  it('Error.name is correct', function() {
    assert.equal(Error1.name, 'CacaError')
  })
  
  it('Error.message is correct', function() {
    assert.equal(Error1.message, 'test1')
  })
  
  it('CacaError is instance of Error', function() {
    assert.isOk( (Error1 instanceof Error) )
  })
  
  it('CacaError is instance of CacaError', function() {
    assert.isOk( (Error1 instanceof CacaError) )
  })
  
})