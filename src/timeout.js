class Timeout {
  constructor(){
    this.timeCount = 0;
    this.store.bind(this)
    this.log.bind(this)
  }

  store(time){
    this.timeCount += time
  }

  log(){
    console.log(`Curr Timeout: ${this.timeCount}`)
  }
}

const sharedTimeout = new Timeout()

var exports = module.exports = {
  sharedTimeout,
  Timeout
}
