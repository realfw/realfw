export function Application({description, pipelines}) {
  return function(target) {
    return class Application extends target {
      description = description
      pipelines = pipelines
      name = target.name

      start = () => {
        this.pipelines.forEach((pipeline) => pipeline.listen())
      }
    }
  }
}
