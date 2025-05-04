import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { GamerLaptop } from "./GamerLaptop";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const GamerLaptopContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="Cargando...">
                <Stage environment="studio" intensity={0.2} >
                    <GamerLaptop />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} enablePan={false} />
                <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.6} makeDefault />
            </Suspense>
        </Canvas>
    );
};

export default GamerLaptopContainer;