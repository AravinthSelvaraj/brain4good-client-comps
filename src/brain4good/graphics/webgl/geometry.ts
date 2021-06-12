export class Geometry {
  faces: Face[];
  constructor(faces: Face[]) {
    this.faces = faces;
  }

  // Parses an OBJ file, passed as a string
  static parseOBJ = (src: string): Geometry => {
    const POSITION = /^v\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/;
    const NORMAL = /^vn\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/;
    const UV = /^vt\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/;
    const FACE = /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/;

    const lines = src.split('\n');
    const positions: Vector3[] = [];
    const uvs: Vector2[] = [];
    const normals: Vector3[] = [];
    const faces: Face[] = [];
    lines.forEach(function (line) {
      // Match each line of the file against various RegEx-es
      let result
      if ((result = POSITION.exec(line)) != null) {
        // Add new vertex position
        positions.push(new Vector3(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])))
      } else if ((result = NORMAL.exec(line)) != null) {
        // Add new vertex normal
        normals.push(new Vector3(parseFloat(result[1]), parseFloat(result[2]), parseFloat(result[3])))
      } else if ((result = UV.exec(line)) != null) {
        // Add new texture mapping point
        uvs.push(new Vector2(parseFloat(result[1]), 1 - parseFloat(result[2])))
      } else if ((result = FACE.exec(line)) != null) {
        // Add new face
        const vertices = []
        // Create three vertices from the passed one-indexed indices
        for (let i = 1; i < 10; i += 3) {
          const part = result.slice(i, i + 3)
          const position = positions[parseInt(part[0]) - 1]
          const uv = uvs[parseInt(part[1]) - 1]
          const normal = normals[parseInt(part[2]) - 1]
          vertices.push(new Vertex(position, normal, uv))
        }
        faces.push(new Face(vertices))
      }
    })

    return new Geometry(faces)
  }

  // Loads an OBJ file from the given URL, and returns it as a promise
  static loadOBJ = (url: string): Promise<Geometry> => {
    return new Promise(function (resolve) {
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          resolve(Geometry.parseOBJ(xhr.responseText))
        }
      }
      xhr.open('GET', url, true)
      xhr.send(null)
    })
  }

  vertexCount(): number {
    return this.faces.length * 3
  }

  positions = (): number[] => {
    const answer: number[] = []
    this.faces.forEach(function (face) {
      face.vertices.forEach(function (vertex) {
        const v = vertex.position
        answer.push(v.x, v.y, v.z)
      })
    })
    return answer
  }

  normals = (): number[] => {
    const answer: number[] = []
    this.faces.forEach(function (face) {
      face.vertices.forEach(function (vertex) {
        const v = vertex.normal
        answer.push(v.x, v.y, v.z)
      })
    })
    return answer
  }

  uvs = (): number[] => {
    const answer: number[] = []
    this.faces.forEach(function (face) {
      face.vertices.forEach(function (vertex) {
        const v = vertex.uv
        answer.push(v.x, v.y)
      })
    })
    return answer
  }
}

export class Face {
  vertices: Vertex[];
  constructor(vertices: Vertex[]) {
    this.vertices = vertices;
  }
}

export class Vertex {
  position: Vector3;
  normal: Vector3;
  uv: Vector2;
  constructor(position: Vector3, normal: Vector3, uv: Vector2) {
    this.position = position;
    this.normal = normal;
    this.uv = uv;
  }
}

export class Vector3 {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

export class Vector2 {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}