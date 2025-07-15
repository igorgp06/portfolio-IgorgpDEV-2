import { ArrowDown } from "lucide-react";

export const Hero = () => {
    return (
        <div className="relative min-h-screen flex flex-col align-center justify-center px-4" id="hero">

            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        <span className="opacity-0 animate-fade-in-delay-1"> Olá, eu sou o</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2">
                            {" "}
                            Igor Gonçalves</span>
                        <span className="text-gradient opacity-0 animate-fade-in-delay-3">
                            {" "}
                            | DEV Freelancer</span>
                    </h1>

                    <p className="text-lg md:ext-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        Olá, me chamo Igor Gonçalves e sou um desenvolvedor web freelancer. A mais de 2 anos criando soluções inovadoras e eficientes para o mundo digital. Com as minhas experiências e habilidades, sou capaz de soluções de alta qualidade e eficiência.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            Veja meus Projetos
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-1"> Mais Abaixo </span>
                <ArrowDown className="h-5 w-5 text-primary text-primary" />
            </div>

        </div>
    )
}
