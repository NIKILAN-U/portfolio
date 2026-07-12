"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PALETTE = ["#7C8CF0", "#F45C9C", "#F6C945", "#FFFFFF"];

export function Hero3D({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const key = new THREE.DirectionalLight("#ffffff", 2.2);
    key.position.set(4, 6, 6);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 20;
    scene.add(key);

    const fill = new THREE.DirectionalLight("#7C8CF0", 0.6);
    fill.position.set(-5, -2, 3);
    scene.add(fill);

    const ambient = new THREE.AmbientLight("#ffffff", 0.75);
    scene.add(ambient);

    const shadowGeo = new THREE.CircleGeometry(1, 48);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.18 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -3.1;
    shadowPlane.scale.set(6, 6, 6);
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    type Shape = {
      mesh: THREE.Mesh;
      speed: number;
      offset: number;
      baseY: number;
      spin: THREE.Vector3;
    };
    const shapes: Shape[] = [];

    function addShape(
      geometry: THREE.BufferGeometry,
      color: string,
      position: [number, number, number],
      scale: number
    ) {
      const material = new THREE.MeshPhysicalMaterial({
        color,
        roughness: 0.35,
        metalness: 0.05,
        clearcoat: 0.6,
        clearcoatRoughness: 0.25,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...position);
      mesh.scale.setScalar(scale);
      mesh.castShadow = true;
      mesh.receiveShadow = false;
      scene.add(mesh);
      shapes.push({
        mesh,
        speed: 0.5 + Math.random() * 0.4,
        offset: Math.random() * Math.PI * 2,
        baseY: position[1],
        spin: new THREE.Vector3(
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.4,
          (Math.random() - 0.5) * 0.4
        ),
      });
    }

    addShape(new THREE.IcosahedronGeometry(1, 1), PALETTE[0], [-1.6, 0.6, 0], 1.15);
    addShape(new THREE.TorusGeometry(0.85, 0.32, 24, 64), PALETTE[1], [1.7, -0.4, -0.6], 1);
    addShape(new THREE.CapsuleGeometry(0.45, 1, 8, 16), PALETTE[2], [0.3, 1.5, -1.2], 0.9);
    addShape(new THREE.SphereGeometry(0.7, 32, 32), PALETTE[3], [-0.4, -1.6, 0.4], 0.85);
    addShape(new THREE.OctahedronGeometry(0.7, 0), PALETTE[1], [2.3, 1.6, -1.6], 0.7);

    const pointer = { x: 0, y: 0 };
    function handlePointerMove(event: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    }
    window.addEventListener("pointermove", handlePointerMove);

    const clock = new THREE.Clock();
    let frameId = 0;

    function animate() {
      const t = clock.getElapsedTime();

      shapes.forEach((shape) => {
        if (!reduceMotion) {
          shape.mesh.position.y = shape.baseY + Math.sin(t * shape.speed + shape.offset) * 0.35;
          shape.mesh.rotation.x += 0.003 + shape.spin.x * 0.01;
          shape.mesh.rotation.y += 0.004 + shape.spin.y * 0.01;
        }
      });

      if (!reduceMotion) {
        camera.position.x += (pointer.x * 1.1 - camera.position.x) * 0.03;
        camera.position.y += (-pointer.y * 0.7 - camera.position.y) * 0.03;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      shapes.forEach((shape) => {
        shape.mesh.geometry.dispose();
        (shape.mesh.material as THREE.Material).dispose();
      });
      shadowGeo.dispose();
      shadowMat.dispose();
      renderer.dispose();
      container?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
