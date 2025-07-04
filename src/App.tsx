
import Projects from "./components/project/Projects";
import Contactme from "./components/contactme/Contactme";
import Footer from "./components/footer/Footer";
import TopButton from "./components/TopButton";
import StarBackground from "./util/StarBackground";
import { MenuProvider } from "./context/MenuContext";
import Experience from "./components/experience/Experience";
import Skills from "./components/skill/Skills";
import AboutMe from "./components/about/AboutMe";
import BtnLinks from "./components/links/BtnLinks";
import BottomHeader from "./components/header/BottomHeader";
import TopHeader from "./components/header/TopHeader";

function App() {
  return (
    <div id="top" className="container p-4 sm:p[2rem] mx-auto">
      <MenuProvider>
        <TopHeader />
        <BottomHeader />
        <BtnLinks />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contactme />
        <Footer />
        <TopButton />
        <StarBackground count={250} />
      </MenuProvider>
    </div>
  )
}

export default App
