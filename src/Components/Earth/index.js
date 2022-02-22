import React from 'react'
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg'
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg'
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg'
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

const Earth = (props) => {
    // Loads Textures
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);
  return (
      <>
      {/* Ambient Lighting fills every spot of 3D World (without light you cant see shit)*/}
      <ambientLight intensity={1}/>
       {/* Whatever Geometric Shape */}
        <mesh>
            {/* args are the properties that get passed through once instantiated */}
            <sphereGeometry args={[1, 32, 32]}/>
            {/* Material (Colors, textures) */}
            <meshPhongMaterial specularMap={specularMap}/>
            {/* Physical Base Rendering (renders dependent on the physical material being reflected) */}
            <meshStandardMaterial map={colorMap} normalMap={normalMap}/>
        </mesh>
    </>
  )
}

export default Earth