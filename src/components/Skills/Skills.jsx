/* import { Briefcase } from "lucide-react"; */

const skills = [
    { name: "HTML/CSS", category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "BootStrap", category: "frontend" },

    { name: "Java", category: "backend" },
    { name: "Spring", category: "backend" },
    { name: "PhP", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "MySQL", category: "backend" },

    { name: "Git/GitHub", category: "tools" },
    { name: "Docker", category: "tools" },
    { name: "Figma", category: "tools" },
    { name: "VS Code", category: "tools" },
    { name: "Intellij", category: "tools" },
    { name: "GIMP", category: "tools" },
    { name: "Postman", category: "tools" }
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
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}