import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ToDoHome from './Screens/Home/ToDoHome';
import ToDoForm from './Screens/Form/ToDoForm';
import ToDoTable from './components/table/ToDoTable';
import ToDoUpdate from './Screens/Form/ToDoUpdate';
import ToDoOpen from './components/table/ToDoOpen';
import ToDoClosed from './components/table/ToDoClosed';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/' element={<ToDoHome />} />
        <Route exact path='/todoform' element={<ToDoForm />} />
        <Route exact path='/todoupdate' element={<ToDoUpdate />} />
        <Route exact path='/todotable' element={<ToDoTable />} />
        <Route exact path='/todoopen' element={<ToDoOpen />} />
        <Route exact path='/todoclosed' element={<ToDoClosed />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
