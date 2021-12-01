import './assets/styles/App.css';
import Header from './components/Header';
import { DataProvider } from './context/dataProvider';
import { ThemeProvider } from './context/themeProvider';
import AboutMe from './sections/aboutMe';
import Contact from './sections/contactMe';
import Hero from './sections/hero';
import Projects from './sections/projects';

function App() {
  return (
    <>
      <DataProvider>
        <ThemeProvider>
          <div className="App">
            {/* <header className="App-header"></header> */}
            <Header />
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
          </div>
        </ThemeProvider>
      </DataProvider>
    </>
  );
}

export default App;
