export default function Box(props: any) {
	return (
		<mesh {...props} recieveShadow={true} castShadow={true}>
			<boxBufferGeometry />
			<meshPhysicalMaterial color={'white'} />
		</mesh>
	);
}
