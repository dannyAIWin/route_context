import { useContext } from "react";
import { StringContext } from "@/context/StringContext";

const useStr = () => {
	const context = useContext(StringContext);
	if (!context)
		throw new Error("StringContext must be used within StringProvider.");
	return context;
};

export default useStr;
