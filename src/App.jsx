import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Blogs } from "./components/Blogs/Blogs";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Gallery } from "./components/Gallery/Gallery";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Blogs />
      <Gallery />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
