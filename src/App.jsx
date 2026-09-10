import './App.css';
import { Header } from './components/Header.jsx';
import { CardGrid } from './components/CardGrid.jsx';

function App() {
  return (
    <div className="App">
      <Header score={8} bestScore={12} />
      <CardGrid />
    </div>
  );
}

export default App;
