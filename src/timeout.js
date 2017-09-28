let timeCount = 0;

const sharedTimeout = {
  store(time){
    timeCount += time
  },

  log(){
    console.log(`Curr timeCount: ${timeCount}`)
  }
}

var exports = module.exports = {
  sharedTimeout,
}
