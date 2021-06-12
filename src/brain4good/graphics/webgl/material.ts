export class ShaderProgram {
  gl: WebGLRenderingContext;
  position: number;
  normal: number;
  uv: number;
  model: WebGLUniformLocation;
  view: WebGLUniformLocation;
  projection: WebGLUniformLocation;
  ambientLight: WebGLUniformLocation;
  lightDirection: WebGLUniformLocation;
  diffuse: WebGLUniformLocation;
  vert: WebGLShader;
  frag: WebGLShader;
  program: WebGLProgram;
  constructor(gl: WebGLRenderingContext, vertSrc: string, fragSrc: string) {
    const vert = gl.createShader(gl.VERTEX_SHADER);
    if (vert === null) {
      throw Error("WebGLShader created is null");
    }
    gl.shaderSource(vert, vertSrc)
    gl.compileShader(vert)
    if (!gl.getShaderParameter(vert, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(vert))
      throw new Error('Failed to compile shader')
    }

    const frag = gl.createShader(gl.FRAGMENT_SHADER);
    if (frag === null) {
      throw Error("WebGLShader created is null");
    }
    gl.shaderSource(frag, fragSrc)
    gl.compileShader(frag)
    if (!gl.getShaderParameter(frag, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(frag))
      throw new Error('Failed to compile shader')
    }

    const program = gl.createProgram();
    if (program === null) {
      throw Error("WebGLProgram created is null");
    }
    gl.attachShader(program, vert)
    gl.attachShader(program, frag)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program))
      throw new Error('Failed to link program')
    }

    this.gl = gl
    this.position = gl.getAttribLocation(program, 'position')
    this.normal = gl.getAttribLocation(program, 'normal')
    this.uv = gl.getAttribLocation(program, 'uv')
    const model = gl.getUniformLocation(program, 'model');
    if (model === null) {
      throw Error("WebGLUniformLocation created is null");
    }
    this.model = model;
    const view = gl.getUniformLocation(program, 'view')
    if (view === null) {
      throw Error("WebGLUniformLocation created is null");
    }
    this.view = view;
    const projection = gl.getUniformLocation(program, 'projection')
    if (projection === null) {
      throw Error("WebGLUniformLocation created is null");
    }
    this.projection = projection;
    const ambientLight = gl.getUniformLocation(program, 'ambientLight')
    if (ambientLight === null) {
      throw Error("WebGLUniformLocation created is null");
    }
    this.ambientLight = ambientLight;
    const lightDirection = gl.getUniformLocation(program, 'lightDirection')
    if (lightDirection === null) {
      throw Error("WebGLUniformLocation created is null");
    }
    this.lightDirection = lightDirection;
    const diffuse = gl.getUniformLocation(program, 'diffuse')
    if (diffuse === null) {
      throw Error("WebGLUniformLocation created is null");
    }
    this.diffuse = diffuse;
    this.vert = vert
    this.frag = frag
    this.program = program
  }

  use = (): void => {
    this.gl.useProgram(this.program)
  }

  // Loads shader files from the given URLs, and returns a program as a promise
  static load = (gl: WebGLRenderingContext, vertUrl: string, fragUrl: string): Promise<ShaderProgram> => {
    const loadFile = (url: string): Promise<string> => {
      return new Promise(function (resolve) {
        const xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
          if (xhr.readyState == XMLHttpRequest.DONE) {
            resolve(xhr.responseText)
          }
        }
        xhr.open('GET', url, true)
        xhr.send(null)
      });
    };
    return Promise.all([loadFile(vertUrl), loadFile(fragUrl)]).then(function (files) {
      return new ShaderProgram(gl, files[0] as string, files[1] as string)
    });
  }
}