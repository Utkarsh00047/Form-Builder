import './App.css';
import {Header} from './Components/Header/Header'
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Form } from './Components/Form/Form';
// import {Droppable} from './Components/DroppableComponent/Droppable'
// import { Accordination } from './Components/Accordination/Accordination';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Form/> 
      {/* <Droppable/> */}
      {/* <Accordination/> */}
    </div>
  );
}

export default App;
