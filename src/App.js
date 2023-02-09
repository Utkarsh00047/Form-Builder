import "./App.css";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Form } from "./Components/Form/Form";

function App() {
	return (
		<div className="App">
			<Header />
			<Sidebar />
			<Form />
			{/* <Accordination/> */}
		</div>
	);
}

export default App;
