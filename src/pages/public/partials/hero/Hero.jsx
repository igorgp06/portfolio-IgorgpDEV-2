import { ArrowDown } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col align-center justify-center px-4" id="hero">

            <div className="container max-w-4xl mx-auto text-center">
                <div className="space-y-6">

                    <h1 className="text-4xl md:text-5xl font-bold hover:text-glow transition-all duration-300">
                        <span className="opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Olá, eu sou o
                        </span>
                        <span className="opacity-0 text-primary animate-fade-in-delay-2">
                            {" "}
                            Igor Gonçalves | DEV
                        </span>
                    </h1>

                    <p className="text-lg md:ext-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                        Olá, me chamo Igor Gonçalves e sou um desenvolvedor de sistemas . A mais de 2 anos criando soluções inovadoras e eficientes para o mundo digital. Com as minhas experiências e habilidades, sou capaz de soluções de alta qualidade e eficiência.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button hover-shadow-violet">
                            Veja meus Projetos
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center animate-bounce opacity-75">
                <a href="#about" className="flex flex-col items-center hover:text-glow transition-all duration-300">
                    <span className="text-sm text-muted-foreground mb-1"> Veja Mais </span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </a>
            </div>

        </section>
    )
}
