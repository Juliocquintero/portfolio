import './assets/styles/App.css';
import Footer from './components/Footer';
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
          <Header />
          <Hero />
          <hr />
          <AboutMe />
          <hr />
          <Projects />
          <hr />
          <Contact />
          <Footer />
        </ThemeProvider>
      </DataProvider>
    </>
  );
}

export default App;
