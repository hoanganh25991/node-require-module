const {sharedTimeout} = require("./src/timeout")
const run1 = require("./src/run1")
const run2 = require("./src/run2")

run1();
run2();

sharedTimeout.store(3)

sharedTimeout.log()