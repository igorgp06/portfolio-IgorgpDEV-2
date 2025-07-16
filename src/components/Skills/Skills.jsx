/* import { Briefcase } from "lucide-react"; */

const skills = [
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", name: "HTML", category: "frontend" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", name: "CSS", category: "frontend" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: "JavaScript", category: "frontend" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: "React", category: "frontend" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS", category: "frontend" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", name: "BootStrap", category: "frontend" },

    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", name: "Java", category: "backend" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", name: "Spring", category: "backend" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", name: "PhP", category: "backend" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", name: "Node.js", category: "backend" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg", name: "MongoDB", category: "backend" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", name: "MySQL", category: "backend" },

    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", name: "Git", category: "tools" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", name: "GitHub", category: "tools" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", name: "Docker", category: "tools" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", name: "Figma", category: "tools" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", name: "VS Code", category: "tools" },
    { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", name: "Postman", category: "tools" },
];

export const Skills = () => {
    return (
        <section className="py-24 px-4 relative bg-secondary/30" id="skills">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Minhas <span className="text-primary">Habilidades</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-center justify-center items-center flex flex-col gap-2">
                                {/* <Briefcase className="w-8 h-8" /> */}
                                <img src={skill.img} alt="Logo da tecnologia" className="w-8 h-8" />
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
