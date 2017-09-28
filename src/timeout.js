/**
 * Definde as Object style
 * With GLOBAL variable <-- not good
 */
// let timeCount = 0;
//
// const sharedTimeout = {
//   store(time){
//     timeCount += time
//   },
//
//   log(){
//     console.log(`Curr timeCount: ${timeCount}`)
//   }
// }

/**
 * Define as function style, function create Object, which maintain SCOPE
 */
const _fSharedTimeout = function (){
  let timeCount = 0;
  return {
    store(time){
      timeCount += time
    },
    log(){
      console.log(`Curr timeCount: ${timeCount}`)
    }
  }
}
const sharedTimeout = _fSharedTimeout();

var exports = module.exports = {
  sharedTimeout,
}
