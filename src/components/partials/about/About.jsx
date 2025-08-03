import { Code, Lock, Search } from "lucide-react"

export const About = () => {
    return (
        <section className="p-24 px-4 relative" id="about">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary">Mim</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Desenvolvedor Web Freelancer</h3>

                        <p className="text-muted-foreground">
                            Sou um desenvolvedor de sistemas freelancer com mais de 2 anos de experiência. Especialista
                            em criar sites, plataformas e aplicativos web responsivos, acessíveis, seguros e de alta
                            performance com as mais recentes tecnologias do mercado.
                        </p>

                        <p className="text-muted-foreground">
                            Tenho maestria em várias linguagens de programação para o desenvolvimento de sistmas, incluindo HTML5,
                            CSS3, JavaScript, React, Tailwind, Java, Spring e Node.js além de
                            diversas outras ferramentas para design, desenvolvimento e segurança de ponta a ponta.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="/public/static/pdf/Igor-Goncalves-curriculo.pdf" download={"curriculo-igor-goncalves.pdf"}
                                className="px-6 py-2 rounded-full border border-primary text-primary  hover:bg-primary/10 transition-colors duration-300">
                                Baixe meu Currículo
                            </a>

                            <a href="#contact" className="cosmic-button hover-shadow-violet transition-all duration-300">
                                Entre em Contato
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-md">Desenvolvimento de Websites Sob Medida</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Criação de sites e sistemas personalizados 
                                        para atender às necessidades específicas do seu negócio.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Lock className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-md">Segurança e Proteção de Privacidade</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Uso de medidas de segurança para proteger os
                                        dados dos seus clientes e a sua privacidade.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Search className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-bold text-md">Otimizações de Sites e Melhorias de SEO</h4>
                                    <p className="text-muted-foreground text-sm">
                                        Melhorias de desempenho do seu site e otimização para navegadores.
                                        Impulsione sua visibilidade online.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}