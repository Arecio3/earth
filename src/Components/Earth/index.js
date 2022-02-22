import React from "react";
import * as THREE from "three";
// Camera
import { OrbitControls, Stars } from "@react-three/drei";

// Textures
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
// Texture Loader
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";

const Earth = (props) => {
  // Loads Textures
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
//   For Rotation
  const earthRef = useRef();
  const cloudRef = useRef();
//   Gets called 60X per second to rerender the earth in a new location
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6
    cloudRef.current.rotation.y = elapsedTime / 6
  });

  return (
    <>
      {/* Ambient Lighting fills every spot of 3D World (without light you cant see shit)*/}
      {/* <ambientLight intensity={1} /> */}
      {/* Vector = Array */}
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2}/>
      {/* Star properties factor = diff sizes random  */}
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      {/* Clouds Geometry */}
      <mesh ref={cloudRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        {/* Phong Material gives single color or map (depthWrite = more depth) DoubleSide = Renders side even if not shown */}
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.5}
          depthWrite={false}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Earth Geometry */}
      <mesh ref={earthRef} position={[0, 0, 3]}>
        {/* args are the properties that get passed through once instantiated */}
        <sphereGeometry args={[1, 32, 32]} />
        {/* Material (Colors, textures) */}
        <meshPhongMaterial specularMap={specularMap} />
        {/* Physical Base Rendering (renders dependent on the physical material being reflected) */}
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7}/>
        {/* Control over Camera Movement */}
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
      </mesh>
    </>
  );
};

export default Earth;
