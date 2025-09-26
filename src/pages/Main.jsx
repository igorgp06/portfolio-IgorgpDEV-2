import { StarBackground } from "../components/utils/bg/StarBackGround";
import { Navbar } from "../components/utils/navbar/Navbar";
import { Hero } from "./public/partials/hero/Hero";
import { About } from "./public/partials/about/About";
import { Skills } from "./public/partials/skills/Skills";
import { Projects } from "./public/partials/projects/Projects";
import { Contact } from "./public/partials/contact/Contact";
import { Footer } from "../components/utils/footer/Footer";

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