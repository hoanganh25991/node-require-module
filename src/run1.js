const {sharedTimeout} = require("./timeout")

const run1 = () => {
  sharedTimeout.store(3)
}

var exports = module.exports = run1