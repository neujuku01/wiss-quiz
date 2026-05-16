import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1>Willkommen beim WISS-Quiz!</h1>
      <p>Hier wird bald unser Quiz starten.</p>
      <Welcome />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;