var callAndApply = {
  caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
    console.log("========dfsssdfsdf=====================",object, nameArg, ageArg, tShirtSizeArg)
    method.call(object, nameArg, ageArg, tShirtSizeArg)
  },
  applier: function (object, method, argumentsArr) {
    console.log("========dfssdddddddddddsdfsdf=====================",object, argumentsArr)
    return method.apply(object, argumentsArr);
  }
};
module.exports = callAndApply;
