/* eslint-disable react/no-unknown-property */
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Background = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 1, 3]} />

            <Sphere args={[1, 150, 250]} scale={2}>
                <MeshDistortMaterial
                    color="#ae7ef2"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                />
            </Sphere>

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />

        </>
    );
};

export default Background;