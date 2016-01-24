var secondInvoc = function (a) {
  return function(b) {
    return a + b;
  }
}

module.exports = secondInvoc;
