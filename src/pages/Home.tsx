import useStr from "@/hook/useStr";
const Home = () => {
	const { str, setStr } = useStr();
	return (
		<>
			<div>Home</div>
			<div>{str}</div>
			<button onClick={() => setStr("按下變成Home")}>Set String</button>
		</>
	);
};

export default Home;
