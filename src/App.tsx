import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import NewPage from "./Pages/New/NewPage";
import SinglePage from "./Pages/Single/SinglePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import NotFound from "./Components/NotFound";
import { useContext, useEffect } from "react";
import { themeContextProvider } from "./context/darkModeContext";
import useResize from "./Hooks/useResize";
import "./index.scss";

function App() {
	const { dark } = useContext(themeContextProvider);
	const { size } = useResize();

	return size <= 1400 ? (
		<h1 className="mx-auto flex h-screen max-w-md items-center justify-center px-2 text-center text-2xl font-bold md:text-3xl">
			You must be on at least 1400px screen and above to view this page
		</h1>
	) : (
		<div className={`${!dark ? "" : "dark"} mx-auto max-w-[1440px]`}>
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
