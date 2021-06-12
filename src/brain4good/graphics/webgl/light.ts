import { Vector3 } from "./geometry";
import { ShaderProgram } from "./material";

export class Light {
  lightDirection: Vector3;
  ambientLight: number;

  constructor() {
    this.lightDirection = new Vector3(-1, -1, -1)
    this.ambientLight = 0.3
  }

  use = (shaderProgram: ShaderProgram): void => {
    const dir = this.lightDirection
    const gl = shaderProgram.gl
    gl.uniform3f(shaderProgram.lightDirection, dir.x, dir.y, dir.z)
    gl.uniform1f(shaderProgram.ambientLight, this.ambientLight)
  }
}