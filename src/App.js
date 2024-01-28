import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Hobbies from './components/Projects.js';
import Navbar from './components/Navbar.js';
import Chess from './components/Chess.js';
import Wine from './components/Wine.js';
import Artworks from './components/Artworks.js';
import Plants from './components/Plants.js';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/* <Header /> */}
      <Navbar />
      <About /> 
      <Hobbies />
      <Chess />
      <Wine />
      <Artworks />
      <Plants />
    </main>
  );
}

export default App;
