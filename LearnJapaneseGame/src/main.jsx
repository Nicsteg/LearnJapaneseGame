import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/styles.css';
import * as THREE from 'three';

// Three.js setup and game logic
const canvas = document.querySelector('#gameCanvas');
const renderer = new THREE.WebGLRenderer({ canvas });
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);
onWindowResize();

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

const katakana = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ'];

function createKatakanaCharacter() {
    const geometry = new THREE.TextGeometry(katakana[Math.floor(Math.random() * katakana.length)], {
        font: new THREE.FontLoader().parse(/* Insert font JSON here */),
        size: 1,
        height: 0.1,
    });

    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh = new THREE.Mesh(geometry, material);

    textMesh.position.x = (Math.random() - 0.5) * 10;
    textMesh.position.y = 5;

    scene.add(textMesh);
    return textMesh;
}

let fallingCharacters = [];

function spawnKatakana() {
    const character = createKatakanaCharacter();
    fallingCharacters.push(character);
}

setInterval(spawnKatakana, 1000);  // Spawn a new character every second

let score = 0;

window.addEventListener('keydown', (event) => {
    const typedCharacter = event.key.toUpperCase();

    fallingCharacters.forEach((character, index) => {
        if (character.geometry.parameters.text === typedCharacter) {
            scene.remove(character);
            fallingCharacters.splice(index, 1);
            score++;
            document.getElementById('score').textContent = score;
        }
    });
});

