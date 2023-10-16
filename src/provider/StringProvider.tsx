import { useState } from "react";
import { StringContext } from "@/context/StringContext";
import { Outlet } from "react-router-dom";

const StringProvider: React.FC = () => {
	const [str, setStr] = useState<string>("");
	return (
		<StringContext.Provider value={{ str, setStr }}>
			<Outlet />
		</StringContext.Provider>
	);
};

export default StringProvider;
