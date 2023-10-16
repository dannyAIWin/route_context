import { useContext } from "react";
import { StringContext } from "@/context/StringContext";

const Home = () => {
	const { str, setStr } = useContext(StringContext)!;
	return (
		<>
			<div>Home</div>
			<div>{str}</div>
			<button onClick={() => setStr("按下變成Home")}>Set String</button>
		</>
	);
};

export default Home;
