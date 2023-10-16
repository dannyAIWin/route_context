import useStr from "@/hook/useStr";
const PageA = () => {
	const { str, setStr } = useStr();

	return (
		<>
			<div>PageA</div>
			<div>{str}</div>
			<button onClick={() => setStr("按下變成PageA")}>Set String</button>
		</>
	);
};

export default PageA;
