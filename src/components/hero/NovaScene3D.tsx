"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function NovaScene3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    let animationFrameId: number;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x09090d, 0.035);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xb5a1ff, 0.8);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0x7655f6, 4, 25);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    const blueLight = new THREE.PointLight(0xb5a1ff, 2.5, 20);
    blueLight.position.set(4, 3, 2);
    scene.add(blueLight);

    // 3. Central Nova Core (3D Living Cyber Beacon)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner glowing sphere
    const innerGeo = new THREE.IcosahedronGeometry(0.85, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x7655f6,
      emissive: 0x7655f6,
      emissiveIntensity: 0.6,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Outer crystalline wireframe
    const outerGeo = new THREE.IcosahedronGeometry(1.3, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0xb5a1ff,
      emissive: 0x5835db,
      emissiveIntensity: 0.4,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Rotating orbital glowing rings
    const ringGeo = new THREE.TorusGeometry(1.9, 0.02, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xb5a1ff,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.3, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x7655f6,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // 4. Particle Constellation Field (600 particles)
    const particleCount = 700;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x7655f6); // Violet
    const color2 = new THREE.Color(0xb5a1ff); // Glow
    const color3 = new THREE.Color(0xe8e8f0); // Silver

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 8.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (radius * Math.sin(phi) * Math.sin(theta)) * 0.65;
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random();
      const c = mixed < 0.5 ? color1 : mixed < 0.85 ? color2 : color3;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle texture
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.3, "rgba(181,161,255,0.8)");
      gradient.addColorStop(0.8, "rgba(118,85,246,0.2)");
      gradient.addColorStop(1, "rgba(9,9,13,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.16,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 5. Ground cyber plane / grid lines
    const gridHelper = new THREE.GridHelper(24, 28, 0x7655f6, 0x181820);
    gridHelper.position.y = -2.8;
    const gridMat = gridHelper.material as THREE.Material;
    gridMat.opacity = 0.25;
    gridMat.transparent = true;
    scene.add(gridHelper);

    // 6. Interactive Mouse & Smooth Camera Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.001;
      mouseY = (event.clientY - windowHalfY) * 0.001;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // 7. Animation Loop with time
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera lerp
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      camera.position.x = targetX * 3.5;
      camera.position.y = 1.2 - targetY * 2.5;
      camera.lookAt(0, 0, 0);

      // Core rotation
      innerMesh.rotation.x = elapsedTime * 0.35;
      innerMesh.rotation.y = elapsedTime * 0.5;

      outerMesh.rotation.x = -elapsedTime * 0.2;
      outerMesh.rotation.y = -elapsedTime * 0.3;

      ring1.rotation.z = elapsedTime * 0.4;
      ring2.rotation.z = -elapsedTime * 0.3;

      // Subtle core hover pulse
      coreGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.2;
      const scalePulse = 1 + Math.sin(elapsedTime * 2) * 0.04;
      innerMesh.scale.set(scalePulse, scalePulse, scalePulse);

      // Particles slow drift
      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      innerGeo.dispose();
      innerMat.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <div ref={mountRef} className="w-full h-full" />
      
      {/* Fallback glow if WebGL is disabled */}
      {!hasWebGL && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#7655F6]/20 via-[#09090D] to-[#09090D]" />
      )}

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090D] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090D]/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
