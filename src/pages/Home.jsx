import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SkillsTW from "../components/SkillsTW";
import Languages from "../components/Languages";
import ProjectsTW from "../components/ProjectsTW";
import Education from "../components/Education";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillsTW />
      <SectionDivider/>
      <Languages />
      <SectionDivider/>
      <ProjectsTW />
      <SectionDivider/>
      <Education />
      <SectionDivider/>
      <Certificates />
      <SectionDivider/>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
