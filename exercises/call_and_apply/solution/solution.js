var callAndApply = {
  caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
    return method.call(object, nameArg, ageArg, tShirtSizeArg)
  },
  applier: function (object, method, argumentsArr) {
    return method.apply(object, argumentsArr);
  }
};
module.exports = callAndApply;
