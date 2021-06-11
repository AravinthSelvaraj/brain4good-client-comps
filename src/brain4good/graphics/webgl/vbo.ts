export class VBO {
  gl: any;
  data: [];
  count: number;
  size: number;
  constructor(gl: any, data: [], count: number) {
    // Creates buffer object in GPU RAM where we can store anything
    const bufferObject = gl.createBuffer()
    // Tell which buffer object we want to operate on as a VBO
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferObject)
    // Write the data, and set the flag to optimize
    // for rare changes to the data we're writing
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
    this.gl = gl
    this.data = bufferObject
    this.count = count
    this.size = data.length / count
  }

  destroy() {
    // Free memory that is occupied by our buffer object
    this.gl.deleteBuffer(this.data)
  }

  bindToAttribute(attribute: any) {
    const gl = this.gl
    // Tell which buffer object we want to operate on as a VBO
    gl.bindBuffer(gl.ARRAY_BUFFER, this.data)
    // Enable this attribute in the shader
    gl.enableVertexAttribArray(attribute)
    // Define format of the attribute array. Must match parameters in shader
    gl.vertexAttribPointer(attribute, this.size, gl.FLOAT, false, 0, 0)
  }
}