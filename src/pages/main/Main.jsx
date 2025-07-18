import { ThemeToggle } from "../../components/utils/theme/ThemeToggle";
import { Navbar } from "../../components/partials/navbar/Navbar";
import { StarBackground } from "../../components/utils/bg/StarBackGround";
import { Hero } from "../../components/partials/hero/Hero";
import { About } from "../../components/partials/about/About";
import { Skills } from "../../components/partials/Skills/Skills"; 
import { Projects } from "../../components/partials/projects/Projects";
import { Contact } from "../../components/partials/contact/Contact";

export const Main = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <StarBackground />
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

        </div>
    )
}

export default Main