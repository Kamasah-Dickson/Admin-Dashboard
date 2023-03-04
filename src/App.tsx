import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import NewPage from "./Pages/New/NewPage";
import SinglePage from "./Pages/Single/SinglePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.scss";
import { productInputs, userInputs } from "./formSource";

function App() {
	return (
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
			</Routes>
		</Router>
	);
}

export default App;
