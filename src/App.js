import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Header/Navigation';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
