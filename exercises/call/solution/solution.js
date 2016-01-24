var caller = function (object, method, nameArg, ageArg, tShirtSizeArg) {
  return method.call(object, nameArg, ageArg, tShirtSizeArg)
}
module.exports = caller;
