import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import NewPage from "./Pages/New/NewPage";
import SinglePage from "./Pages/Single/SinglePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import NotFound from "./Components/NotFound";
import "./index.scss";
import { useContext } from "react";
import { themeContextProvider } from "./context/darkModeContext";
import useResize from "./Hooks/useResize";

function App() {
	const { dark } = useContext(themeContextProvider);
	const { size } = useResize();

	return (
		<div className={dark ? "" : "dark"}>
			<Router>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="users">
							<Route index element={<List />} />
							<Route path=":userId" element={<SinglePage />} />
							<Route
								path="new"
								element={<NewPage inputs={userInputs} title="Add New User" />}
							/>
						</Route>
						<Route path="products">
							<Route index element={<List />} />
							<Route path=":productId" element={<SinglePage />} />
							<Route
								path="new"
								element={
									<NewPage inputs={productInputs} title="Add New Product" />
								}
							/>
						</Route>
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
