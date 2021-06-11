import React from "react";

import { Renderer } from "../../brain4good/graphics/webgl/renderer";
import { Mesh } from "../../brain4good/graphics/webgl/mesh";
import { ShaderProgram } from "../../brain4good/graphics/webgl/material";
import { Camera } from "../../brain4good/graphics/webgl/camera";
import { Light } from "../../brain4good/graphics/webgl/light";

const loadHandler = () => {
    const renderer = new Renderer(document.getElementById('webgl-canvas'));
    renderer.setClearColor(100, 149, 237);
    const gl = renderer.getContext();
    const objects: Mesh[] = [];
    Mesh.load(gl, '/assets/sphere.obj', '/assets/diffuse.png')
        .then(function (mesh: Mesh) {
            objects.push(mesh)
        });
    ShaderProgram.load(gl, '/shaders/basic.vert', '/shaders/basic.frag')
        .then(function (shader) {
            renderer.setShader(shader)
        });
    const camera = new Camera();
    camera.setOrthographic(16, 10, 10);
    const light = new Light();

    const loop = () => {
        renderer.render(camera, light, objects);
        camera.position = camera.position.rotateY(Math.PI / 120);
        requestAnimationFrame(loop);
    }

    loop();
};

const WebglExample: React.FC = () => {
    return (
        <canvas id="webgl-canvas" width="800" height="500" onLoad={loadHandler}></canvas>
    );
}

export default WebglExample;