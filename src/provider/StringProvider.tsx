import { useState } from "react";
import { StringContext } from "@/context/StringContext";

interface StringProviderProps {
	children?: JSX.Element;
}
const StringProvider: React.FC<StringProviderProps> = ({ children }) => {
	const [str, setStr] = useState<string>("");
	return (
		<StringContext.Provider value={{ str, setStr }}>
			{children}
		</StringContext.Provider>
	);
};

export default StringProvider;
