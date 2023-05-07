import './App.css';
import Buttons from './components/buttons/Buttons';
import Documents from './components/documents/Documents';
function App() {
  return (
    <div className="App">
    <Buttons/>
   <div className='header'>
   <h1>Welcome Tim</h1>
   <p>In the collection below you can find and download all available documents for your client.</p>
   </div>
   <Documents/>
    </div>
  );
}

export default App;
