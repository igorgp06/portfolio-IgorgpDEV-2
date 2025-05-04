import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { EnderChest } from "./EnderChest";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const EnderChestContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="Cargando...">
                <Stage environment="studio" intensity={0.2} >
                    <EnderChest />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} enablePan={false} />
                <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.3} makeDefault />
            </Suspense>
        </Canvas>
    );
};

export default EnderChestContainer;