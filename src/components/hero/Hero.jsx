import { ThemeToggle } from "../../components/utils/theme/ThemeToggle";
import { StarBackground } from "../utils/bg/StarBackGround";

export const Hero = () => {
    return (
        <div className="hero min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <StarBackground />


        </div>
    )
}

export default Hero