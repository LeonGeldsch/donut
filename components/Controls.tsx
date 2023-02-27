import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Controls(props: any) {
	return (
		<OrbitControls enablePan={false} maxDistance={20} minDistance={0.01} />
	);
}
