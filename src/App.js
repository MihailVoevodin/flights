import './App.css';
import CardsList from './components/Cards/CardsList';
import Sidebar from './components/Sidebar/Sidebar';
import { store } from './store';

function App() {
  
  return (
    <div className="App">
      <div className='layout'>
        <Sidebar/>
        <CardsList store={store}/>
      </div>
    </div>
  );
}

export default App;
