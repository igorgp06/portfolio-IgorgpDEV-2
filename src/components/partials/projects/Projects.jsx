import { ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Destinos do Kite",
        desc: "Um site de turismo que reune as informações sobre os melhores lugares para praticar kite surf.",
        img: "/static/images/DestinosdoKite.png",
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        link: "https://destinosdokite.com.br",
    },
    {
        id: 2,
        title: "LinkBio para Redes Sociais",
        desc: "Um site de HTML e CSS puro que serve como uma central para reunir todas as suas informações importantes, adaptado especialmente para o dispositivos mobile.",
        img: "/static/images/linkbioIgorgp.png",
        tags: ["HTML5", "CSS3"],
        link: "https://linkbio.igdeveloper.com.br",
    },
    {
        id: 3,
        title: "Tech Fix - Assistência Técnica",
        desc: "Uma landing page de uma assistência técnica fictícia de celulares.",
        img: "/static/images/TechFix.png",
        tags: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind"],
        link: "https://assistencia-tecnica-omega.vercel.app/",
    },
    {
        id: 4,
        title: "Meu Antigo Portfólio Pessoal",
        desc: "Meu primeiro portfólio pessoal feito com HTML, CSS e JavaScript.",
        img: "/static/images/IgorPortfolio1.png",
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        link: "https://igdeveloper.com.br",
    },
    {
        id: 5,
        title: "Java REST API",
        desc: "Uma API feita com Java, Spring e H2 para o controle de departamentos e funcionários.",
        img: "/static/images/javaRestApi.png",
        tags: ["Java", "Spring", "H2 Database", "JPA"],
        link: "https://github.com/igorgp06/RestAPI-com-Java-e-SpringBoot",
    },
    {
        id: 6,
        title: "Login System",
        desc: "Um sistema de login e cadastro feito com Python, CustomTkinter e SQLite.",
        img: "/static/images/loginSystem.png",
        tags: ["Python", "CustomTkinter", "SQLite"],
        link: "https://github.com/igorgp06/Login-System",
    }
];

export const Projects = () => {
    return (
        <section className="py-24 px-4 relative" id="projects">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {" "}
                    Meus <span className="text-primary">Projetos</span>
                </h2>

                <p className="font-medium text-muted-foreground mb-12  max-auto md:text-lg">
                    Aqui estão alguns dos meus projetos pessoais que desenvolvi. Todos os projetos foram desenvolvidos
                    com muito atenção aos detalhes, performance de qualidade e usabilidade.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-center justify-center align-center items-center">
                    {projects.map((project, key) => (
                        <div key={key} className="gropu bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-4 text-center justify-center align-center items-center">
                                <div className="flex flex-wrap gap-2 mb-4 justify-center items-center align-center ">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm m-3">{project.desc}</p>

                                <div className="flex justify-center align-center items-center">
                                    <a href={project.link} target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary  hover:bg-primary/10 transition-colors duration-300">
                                        <ExternalLink />

                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/igorgp06"
                        target="_blank"
                        className="cosmic-button hover-shadow-violet transition-colors duration-300">
                        Veja meu GitHub para mais projetos!
                    </a>
                </div>
            </div>
        </section>
    )
}