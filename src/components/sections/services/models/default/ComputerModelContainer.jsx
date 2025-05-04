import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ComputerModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="Cargando...">
                <Stage environment="sunset" intensity={0.2} >
                    <ComputerModel />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} enablePan={false} />
                <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.6} makeDefault />
            </Suspense>
        </Canvas>
    );
};

export default ComputerModelContainer;