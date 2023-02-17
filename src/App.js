import "./App.css";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Form } from "./Components/Form/Form";
import store from "./Redux/Store";
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Header />
				<Sidebar />
				<Form />
			</div>
		</Provider>
	);
}

export default App;
