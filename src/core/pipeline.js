export function Pipeline({description}) {
  return function(target) {
    return class Pipeline extends target {
      description = description;
      name = target.name
      chain = []
      listener = undefined
      addChain = (promise) => {
        this.chain.push(promise)
      }
      listen = () => {
        this.chain.reduce((promise, func) =>
          promise.then(result => func(result)),
          Promise.resolve(this)
        )
      }
    }
  }
}
