import { Route, Routes } from "react-router-dom";

import Waiting from "./pages/waiting/Waiting";
import Referal from "./pages/referal/Referal";

import "./App.css";
import "./assets/fonts/fonts.css";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Waiting />} exact />
				<Route path="/refer" element={<Referal />} />
			</Routes>
		</div>
	);
};

export default App;
