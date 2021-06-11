import { VBO } from "./vbo";
import { Transformation } from "./transformation";
import { Geometry } from "./geometry";
import { Texture } from "./texture";

export class Mesh {
  positions: VBO;
  normals: VBO;
  uvs: VBO;
  texture: any;
  vertexCount: number;
  position: Transformation;
  gl: any;

  constructor(gl: any, geometry: any, texture: any) {
    const vertexCount = geometry.vertexCount()
    this.positions = new VBO(gl, geometry.positions(), vertexCount)
    this.normals = new VBO(gl, geometry.normals(), vertexCount)
    this.uvs = new VBO(gl, geometry.uvs(), vertexCount)
    this.texture = texture
    this.vertexCount = vertexCount
    this.position = new Transformation()
    this.gl = gl
  }

  destroy() {
    this.positions.destroy()
    this.normals.destroy()
    this.uvs.destroy()
  }

  draw(shaderProgram: any) {
    this.positions.bindToAttribute(shaderProgram.position)
    this.normals.bindToAttribute(shaderProgram.normal)
    this.uvs.bindToAttribute(shaderProgram.uv)
    this.position.sendToGpu(this.gl, shaderProgram.model)
    this.texture.use(shaderProgram.diffuse, 0)
    this.gl.drawArrays(this.gl.TRIANGLES, 0, this.vertexCount)
  }

  static load(gl: any, modelUrl: string, textureUrl: string) {
    const geometry = Geometry.loadOBJ(modelUrl)
    const texture = Texture.load(gl, textureUrl)
    return Promise.all([geometry, texture]).then(function (params) {
      return new Mesh(gl, params[0], params[1])
    })
  }
}