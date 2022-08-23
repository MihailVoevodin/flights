import './App.css';
import CardsList from './components/Cards/CardsList';
import Sidebar from './components/Sidebar/Sidebar';
import DB from './flights.json';

function App() {

  console.log(DB)

  return (
    <div className="App">
      <div className='layout'>
        <Sidebar/>
        <CardsList/>
        {DB.flights.map(f => <div>{f.flight.carrier.caption}</div>)}
      </div>
    </div>
  );
}

export default App;
