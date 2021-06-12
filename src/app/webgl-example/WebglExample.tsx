import React, { useRef, useEffect } from "react"

import { Renderer } from "../../brain4good/graphics/webgl/renderer";
import { Mesh } from "../../brain4good/graphics/webgl/mesh";
import { ShaderProgram } from "../../brain4good/graphics/webgl/material";
import { Camera } from "../../brain4good/graphics/webgl/camera";
import { Light } from "../../brain4good/graphics/webgl/light";

import sphereObj from "./assets/sphere.obj";
import diffuseImg from "./assets/diffuse.png";
import basicVert from "./shaders/basic.vert";
import basicFrag from "./shaders/basic.frag";

const loadHandler = () => {
    const renderer = new Renderer(document.getElementById('webgl-canvas'));
    renderer.setClearColor(100, 149, 237);
    const gl = renderer.getContext();
    const objects: Mesh[] = [];
    Mesh.load(gl, sphereObj, diffuseImg)
        .then(function (mesh: Mesh) {
            objects.push(mesh)
        });
    ShaderProgram.load(gl, basicVert, basicFrag)
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
    useEffect(() => {
        loadHandler();
    }, [])
    return (
        <canvas id="webgl-canvas" width="800" height="500"></canvas>
    );
}

export default WebglExample;