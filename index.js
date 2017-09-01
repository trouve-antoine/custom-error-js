module.exports = function(nameOfCustomError) {
  const CustomError = function(...args) {
    let tmpError = Error.apply(this, args);
    tmpError.name = this.name = nameOfCustomError;
    this.message = tmpError.message;
    
    if(Object.defineProperty) {
      Object.defineProperty(this, 'stack', { 
        get: function() { return tmpError.stack },
        configurable: true
      })
    } else {
      /* slow implementation for old browser */
      /* (the accessor is often implemented lazy) */
      this.stack = temp.stack
    }
  }

  CustomError.prototype = Object.create(Error.prototype, {
    constructor: {
      value: CustomError,
      writable: true,
      configurable: true
    }
  })
  
  return CustomError
}


