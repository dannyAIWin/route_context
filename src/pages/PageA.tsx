import { useContext } from "react";
import { StringContext } from "@/context/StringContext";

const PageA = () => {
	const { str, setStr } = useContext(StringContext)!;
	return (
		<>
			<div>PageA</div>
			<div>{str}</div>
			<button onClick={() => setStr("按下變成PageA")}>Set String</button>
		</>
	);
};

export default PageA;
