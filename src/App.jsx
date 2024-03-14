import { NavBar } from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Welcome to the BookStore"/>
    </>
  )
}

export default App;
