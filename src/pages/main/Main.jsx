import { StarBackground } from "../../components/utils/bg/StarBackGround";
import { Navbar } from "../../components/partials/navbar/Navbar";
import { Hero } from "../../components/partials/hero/Hero";
import { About } from "../../components/partials/about/About";
import { Skills } from "../../components/partials/skills/Skills";
import { Projects } from "../../components/partials/projects/Projects";
import { Contact } from "../../components/partials/contact/Contact";
import { Footer } from "../../components/partials/footer/Footer";

export const Main = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <StarBackground />
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <Footer />
        </div>
    )
}

export default Main