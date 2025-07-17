import { ThemeToggle } from "../../components/utils/theme/ThemeToggle";
import { Navbar } from "../../components/navbar/Navbar";
import { StarBackground } from "../../components/utils/bg/StarBackGround";
import { Hero } from "../../components/hero/Hero";
import { About } from "../../components/about/About";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/projects/Projects";

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
            </main>

        </div>
    )
}

export default Main