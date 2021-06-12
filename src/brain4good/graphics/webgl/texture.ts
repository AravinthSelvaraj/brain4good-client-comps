export class Texture {
  gl: WebGLRenderingContext;
  data: WebGLTexture;
  constructor(gl: WebGLRenderingContext, image: TexImageSource) {
    const texture = gl.createTexture()
    if (texture === null) {
      throw Error("WebGLTexture created is null");
    }
    // Set the newly created texture context as active texture
    gl.bindTexture(gl.TEXTURE_2D, texture)
    // Set texture parameters, and pass the image that the texture is based on
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)
    // Set filtering methods
    // Very often shaders will query the texture value between pixels,
    // and this is instructing how that value shall be calculated
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    this.data = texture
    this.gl = gl
  }

  use = (uniform: WebGLUniformLocation, binding: number): void => {
    binding = Number(binding) || 0
    const gl = this.gl
    // We can bind multiple textures, and here we pick which of the bindings
    // we're setting right now
    const texture = (gl as never)['TEXTURE' + binding];
    gl.activeTexture(texture);
    // After picking the binding, we set the texture
    gl.bindTexture(gl.TEXTURE_2D, this.data)
    // Finally, we pass to the uniform the binding ID we've used
    gl.uniform1i(uniform, binding)
    // The previous 3 lines are equivalent to:
    // texture[i] = this.data
    // uniform = i
  }

  static load = (gl: WebGLRenderingContext, url: string): Promise<Texture> => {
    return new Promise((resolve: (value: Texture) => void) => {
      const image = new Image()
      image.onload = function () {
        resolve(new Texture(gl, image))
      }
      image.src = url
    });
  }
}