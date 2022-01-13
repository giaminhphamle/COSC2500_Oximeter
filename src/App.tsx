import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home";

function App() {
	return (
		<Router>
			<main className="container">
				<Routes>
					<Route index element={<Home />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
