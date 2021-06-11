export class Renderer {
  gl: any;
  shader: any;
  constructor(canvas: any) {
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    gl.enable(gl.DEPTH_TEST)
    this.gl = gl
    this.shader = null
  }

  setClearColor(red: number, green: number, blue: number) {
    this.gl.clearColor(red / 255, green / 255, blue / 255, 1)
  }

  getContext() {
    return this.gl
  }

  setShader(shader: any) {
    this.shader = shader
  }

  render(camera: any, light: any, objects: any) {
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
    const shader = this.shader
    if (!shader) {
      return
    }
    shader.use()
    light.use(shader)
    camera.use(shader)
    objects.forEach(function (mesh: any) {
      mesh.draw(shader)
    })
  }
}