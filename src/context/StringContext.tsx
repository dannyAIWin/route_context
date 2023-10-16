import { createContext } from "react";

interface StringContextType {
	setStr: React.Dispatch<React.SetStateAction<string>>;
	str: string;
}
export const StringContext = createContext<StringContextType | null>(null);
