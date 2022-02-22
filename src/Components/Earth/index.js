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
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Earth = (props) => {
  // Loads Textures
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
  return (
    <>
      {/* Ambient Lighting fills every spot of 3D World (without light you cant see shit)*/}
      <ambientLight intensity={1} />
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
      <mesh>
        <sphereGeometry args={[1.004, 32, 32]} />
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
      <mesh>
        {/* args are the properties that get passed through once instantiated */}
        <sphereGeometry args={[1, 32, 32]} />
        {/* Material (Colors, textures) */}
        <meshPhongMaterial specularMap={specularMap} />
        {/* Physical Base Rendering (renders dependent on the physical material being reflected) */}
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
        {/* Control over Camera Movement */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};

export default Earth;
