import './App.css';
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react';
import Earth from './Components/Earth';
import HeroSection from './Components/HeroSection';

function App() {
  return (
    <AppContainer>
      {/* Scene (any 3D Components go in the canvas)*/}
      <Canvas>
        {/* React Loader State */}
        <Suspense fallback={null}>
          {/* Earth */}
          <Earth />
        </Suspense>
      </Canvas>
      <HeroSection />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`

export default App;
