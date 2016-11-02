function curry(fn) {
  var params = [];

  return function inner () {
    var args = Array.prototype.slice.call(arguments);
    Array.prototype.push.apply(params, args);

    return (params.length != fn.length)
      ? inner
      : fn.apply(this, params);
    }
}

module.exports = curry;
