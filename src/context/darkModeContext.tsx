import { useState, createContext, useEffect } from "react";

interface ThemeContextType {
	dark: boolean;
	setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const themeContextProvider = createContext<ThemeContextType>({
	dark: false,
	setDark: () => {},
});

interface ChildrenProp {
	children: JSX.Element;
}

function DarkModeContext({ children }: ChildrenProp) {
	const [dark, setDark] = useState<boolean>(
		localStorage.getItem("theme") === "true"
	);

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(dark));
	}, [dark]);

	return (
		<themeContextProvider.Provider value={{ dark, setDark }}>
			{children}
		</themeContextProvider.Provider>
	);
}

export default DarkModeContext;
