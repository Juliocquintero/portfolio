import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Header from "./components/header";
import { DataProvider } from "./context/dataProvider";
import { ThemeProvider } from "./context/themeProvider";
import AboutMe from "./sections/aboutMe";
import Contact from "./sections/contactMe";
import Hero from "./sections/hero";
import Projects from "./sections/projects";

function App() {
  return (
    <>
      <DataProvider>
        <ThemeProvider>
          <Layout>
            <Hero />
            <hr />
            <AboutMe />
            <hr />
            <Projects />
            <hr />
            <Contact />
          </Layout>
        </ThemeProvider>
      </DataProvider>
    </>
  );
}

export default App;
