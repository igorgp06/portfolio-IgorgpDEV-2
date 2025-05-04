import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { StatisticArrow } from "./StatisticArrow";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const StatisticArrowContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="Cargando...">
                <Stage environment="studio" intensity={0.2} >
                    <StatisticArrow />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} enablePan={false} />
                <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.6} makeDefault />
            </Suspense>
        </Canvas>
    );
};

export default StatisticArrowContainer;