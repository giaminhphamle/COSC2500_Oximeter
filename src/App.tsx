import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Info } from "./components/info";

function App() {
	return (
		<Router>
			<main className="container">
				<Routes>
					<Route index element={<Home />} />
					<Route path="/info" element={<Info />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
