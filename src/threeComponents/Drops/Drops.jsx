import React, { Component } from "react";
import * as THREE from "three";

import { ParallaxBarrierEffect } from "../libs/ParallaxBarrierEffect.js";

class Drops extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  dropsInit = async () => {
    var container1, camera, scene, renderer, effect;

    var spheres = [];

    var mouseX = 0;
    var mouseY = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    document.addEventListener("mousemove", onDocumentMouseMove, false);

    init();
    // animate();

    async function init() {
      let container = document.getElementById("drops");

      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.01,
        100
      );
      camera.position.z = 3;
      camera.focalLength = 3;
      //
      // var path = "drops/walter/walter-";
      var path =
        "/Users/vaceslaveliseev/@dev/kid_a/src/threeComponents/kid_a/kid_a-";
      var format = ".png";
      var urls = [
        path + "px" + format,
        path + "nx" + format,
        path + "py" + format,
        path + "ny" + format,
        path + "pz" + format,
        path + "nz" + format
      ];

      var textureCube = await new THREE.CubeTextureLoader().load(urls);
      console.log("textureCube", textureCube);

      scene = new THREE.Scene();

      // scene.background = new THREE.Color("rgb(30, 37, 30)");
      scene.background = textureCube;
      // const texture = new THREE.TextureLoader().load("./drops/walter/hse.png");

      // var textureDrop = new THREE.TextureLoader().load("../kid_a/mouse.png");
      // console.log("textureDrop", textureDrop);

      var geometry = new THREE.SphereBufferGeometry(0.1, 32, 16);

      var material = new THREE.MeshBasicMaterial({
        color: 0xffffff
        // ,        map: textureDrop
      });
      // var material = new THREE.MeshBasicMaterial({
      //   color: 0xffffff,
      //   envMap: textureCube
      // });

      for (var i = 0; i < 1000; i++) {
        var mesh = new THREE.Mesh(geometry, material);

        mesh.position.x = Math.random() * 10 - 5;
        mesh.position.y = Math.random() * 10 - 5;
        mesh.position.z = Math.random() * 10 - 5;

        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;

        scene.add(mesh);

        spheres.push(mesh);
      }

      //

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      var width = window.innerWidth || 2;
      var height = window.innerHeight || 2;

      effect = new ParallaxBarrierEffect(renderer);
      effect.setSize(width, height);

      //

      window.addEventListener("resize", onWindowResize, false);

      animate();
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      effect.setSize(window.innerWidth, window.innerHeight);
    }

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - windowHalfX) / 100;
      mouseY = (event.clientY - windowHalfY) / 100;
    }

    //

    function animate() {
      requestAnimationFrame(animate);

      render();
    }

    async function render() {
      var timer = 0.0001 * Date.now();

      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY - camera.position.y) * 0.05;

      camera.lookAt(scene.position);

      for (var i = 0, il = spheres.length; i < il; i++) {
        var sphere = spheres[i];

        sphere.position.x = 5 * Math.cos(timer + i);
        sphere.position.y = 5 * Math.sin(timer + i * 1.1);
        // sphere.position.z = 5 * Math.sin(timer + i * 2);
      }

      effect.render(scene, camera);
    }
  };

  componentDidMount() {
    this.dropsInit();
  }

  render() {
    return <div id="drops"></div>;
  }
}

export default Drops;
