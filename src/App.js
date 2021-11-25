import './assets/styles/App.css';
import Header from './components/header';
import AboutMe from './sections/aboutMe';
import Contact from './sections/contact';
import Hero from './sections/hero';
import Projects from './sections/projects';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
