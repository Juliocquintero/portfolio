import Footer from './components/Footer';
import Header from './components/Header';
import { DataProvider } from './context/dataProvider';
import { ThemeProvider } from './context/themeProvider';
import AboutMe from './sections/AboutMe';
import Contact from './sections/ContactMe';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

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
