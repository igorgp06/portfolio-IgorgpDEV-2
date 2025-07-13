import { ThemeToggle } from "../../components/utils/theme/ThemeToggle";
import { Navbar } from "../navbar/Navbar";
import { StarBackground } from "../utils/bg/StarBackGround";

export const Hero = () => {
    return (
        <div className="hero min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <StarBackground />
            <Navbar />


        </div>
    )
}

export default Hero