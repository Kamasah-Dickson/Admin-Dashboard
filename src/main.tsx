import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DarkModeContext from "./context/darkModeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<DarkModeContext>
			<App />
		</DarkModeContext>
	</React.StrictMode>
);
