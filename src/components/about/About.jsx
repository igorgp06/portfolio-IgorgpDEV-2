

export const About = () => {
    return (
        <section className="p-24 px-4 relative" id="about">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary">Mim</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Desenvolvedor Web Freelancer</h3>

                        <p className="text-muted-foreground">
                            Sou um desenvolvedor web freelancer com mais de 2 anos de experiência, sou especializado
                            em criar sites, plataformar e aplicativos web responsivo, acessíveis, seguros e de alta
                            performance com as mais recentes tecnologias do mercado.
                        </p>

                        <p className="text-muted-foreground">
                            Tenho maestria em várias linguagens de programação para o desenvolvimento web, incluindo HTML5,
                            CSS3, JavaScript, React, Tailwind, Bootstrap, Java, Spring, Python, PHP e Node.js além de
                            diveras outras ferramentas para design e segurança de ponta a ponta.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="/public/static/pdf/Igor Gonçalves curriculo.pdf" download={"curriculo-igor-goncalves.pdf"} 
                            className="px-6 py-2 rounded-full border border-primary text-primary  hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                                Baixe meu Currículo
                            </a>

                            <a href="#contact" className="cosmic-button hover-shadow-violet transition-all duration-300">
                                Entre em Contato
                            </a>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}