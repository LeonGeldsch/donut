import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Donut() {
	const gltf = useLoader(GLTFLoader, './models/donut_part_11.glb');
	return (
		<primitive
			object={gltf.scene}
			position={[0, 0, 0]}
			scale={[100, 100, 100]}
		/>
	);
}
