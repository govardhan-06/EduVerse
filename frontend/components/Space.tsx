'use client';
import { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrthographicCamera, OrbitControls } from '@react-three/drei'
import { ErrorBoundary } from 'react-error-boundary'

interface SpaceProps {
  spaceURL: string
}

function Scene({ spaceURL }: SpaceProps) {
  const colorMap = useLoader(TextureLoader, spaceURL)
  
  return (
    <>
      <ambientLight intensity={1} />
      <mesh rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[16, 9]} /> {/* Using 16:9 aspect ratio */}
        <meshBasicMaterial 
          map={colorMap}
          transparent={true}
        />
      </mesh>
      <OrbitControls 
        enableRotate={false}
        enableZoom={true}
        enablePan={true}
        maxDistance={20}
        minDistance={5}
      />
    </>
  )
}

export default function Space({ spaceURL }: SpaceProps) {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <ErrorBoundary fallback={<div>Error loading the 2D scene</div>}>
        <Canvas>
          <OrthographicCamera
            makeDefault
            position={[0, 0, 10]}
            zoom={75}
          />
          <Suspense fallback={null}>
            <Scene spaceURL={spaceURL} />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}