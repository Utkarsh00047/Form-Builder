import logo from './logo.svg';
import './App.css';
import {Header} from './Components/Header/Header'
import { Sidebar } from './Components/Sidebar/Sidebar';
// import { Form } from './Components/Form/Form';
// import { Accordination } from './Components/Accordination/Accordination';
import { DropContainer } from './Components/Drop Container/DropContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <DropContainer />
      {/* <Form/> */}
      {/* <Accordination/> */}
    </div>
  );
}

export default App;
