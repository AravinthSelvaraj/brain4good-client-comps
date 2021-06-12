import { VBO } from "./vbo";
import { Transformation } from "./transformation";
import { Geometry } from "./geometry";
import { Texture } from "./texture";
import { ShaderProgram } from "./material";

export class Mesh {
  positions: VBO;
  normals: VBO;
  uvs: VBO;
  texture: Texture;
  vertexCount: number;
  position: Transformation;
  gl: WebGLRenderingContext;

  constructor(gl: WebGLRenderingContext, geometry: Geometry, texture: Texture) {
    const vertexCount = geometry.vertexCount()
    this.positions = new VBO(gl, geometry.positions(), vertexCount)
    this.normals = new VBO(gl, geometry.normals(), vertexCount)
    this.uvs = new VBO(gl, geometry.uvs(), vertexCount)
    this.texture = texture
    this.vertexCount = vertexCount
    this.position = new Transformation()
    this.gl = gl
  }

  destroy = (): void => {
    this.positions.destroy()
    this.normals.destroy()
    this.uvs.destroy()
  }

  draw = (shaderProgram: ShaderProgram): void => {
    this.positions.bindToAttribute(shaderProgram.position)
    this.normals.bindToAttribute(shaderProgram.normal)
    this.uvs.bindToAttribute(shaderProgram.uv)
    this.position.sendToGpu(this.gl, shaderProgram.model)
    this.texture.use(shaderProgram.diffuse, 0)
    this.gl.drawArrays(this.gl.TRIANGLES, 0, this.vertexCount)
  }

  static load = (gl: WebGLRenderingContext, modelUrl: string, textureUrl: string): Promise<Mesh> => {
    const geometry = Geometry.loadOBJ(modelUrl)
    const texture = Texture.load(gl, textureUrl)
    return Promise.all([geometry, texture]).then(function (params) {
      return new Mesh(gl, params[0] as Geometry, params[1])
    })
  }
}