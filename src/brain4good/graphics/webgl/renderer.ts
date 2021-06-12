import { Camera } from "./camera";
import { Light } from "./light";
import { ShaderProgram } from "./material";
import { Mesh } from "./mesh";

export class Renderer {
  gl: WebGLRenderingContext;
  shader?: ShaderProgram;

  constructor(canvas: HTMLCanvasElement) {
    const gl = canvas.getContext('webgl') as WebGLRenderingContext || canvas.getContext('experimental-webgl') as WebGLRenderingContext;
    gl.enable(gl.DEPTH_TEST);
    this.gl = gl;
    this.shader = undefined;
  }

  setClearColor = (red: number, green: number, blue: number): void => {
    this.gl.clearColor(red / 255, green / 255, blue / 255, 1)
  }

  getContext = (): WebGLRenderingContext => {
    return this.gl
  }

  setShader = (shader: ShaderProgram): void => {
    this.shader = shader
  }

  render = (camera: Camera, light: Light, objects: Mesh[]): void => {
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
    const shader = this.shader
    if (!shader) {
      return
    }
    shader.use()
    light.use(shader)
    camera.use(shader)
    objects.forEach(function (mesh: Mesh) {
      mesh.draw(shader)
    })
  }
}