var callAndApply = {
  caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
    method.call(object, nameArg, ageArg, tShirtSizeArg)
  },
  applier: function (object, method, argumentsArr) {
    method.apply(object, argumentsArr);
  }
};
module.exports = callAndApply;
