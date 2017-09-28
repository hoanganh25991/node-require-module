const {sharedTimeout} = require("./timeout")

const run2 = () => {
  sharedTimeout.store(3)
}

var exports = module.exports = run2