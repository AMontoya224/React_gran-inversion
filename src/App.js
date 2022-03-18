import logo from './logo.svg';
import './App.css';
import PersonCard from './Componentes/PersonCard/PersonCard';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor={"Black"}/>
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor={"Browm"}/>
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor={"Browm"}/>
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor={"Browm"}/>
    </div>
  );
}

export default App;
