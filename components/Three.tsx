import { Canvas } from '@react-three/fiber';
import LightBulb from './LightBulb';
import Controls from './Controls';
import Donut from './Donut';
import { Environment } from '@react-three/drei';

export default function Three() {
	return (
		<div className="h-screen w-screen">
			<Canvas
				shadows={true}
				className="bg-black"
				camera={{
					position: [-6, 7, 7],
				}}
			>
				<ambientLight color={'white'} intensity={0.2} />
				<LightBulb position={[20, 20, 20]} intensity={2} />
				<Donut />
				<Controls />
				<Environment preset="forest" background={true} blur={0.3} />
			</Canvas>
		</div>
	);
}
