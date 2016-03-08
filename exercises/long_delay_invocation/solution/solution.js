var total = 0;
var delayInvoc = function (a) {
  if (a === undefined) {
    var result = total;
    total = null;
    return result;
  } else {
    total = total + a;
    return delayInvoc;
  }
};

module.exports = delayInvoc;
