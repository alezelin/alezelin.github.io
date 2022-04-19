import './App.css';
import Navbar from './components/navbar/navbar';
import Accueil from './components/accueil/accueil';
import Contact from './components/contact/contact';
import Projets from './components/projets/projets';

function App() {
  return (
    <div className="App">
      < Navbar />
      < Accueil />
      < Projets />
      < Contact />
    </div>
  );
}

export default App;
