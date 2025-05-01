import "./hero.css"
import "./Particles.jsx"
import Speech from "./Speech"
// import ParticlesJS from "./Particles.jsx"
import { motion } from "motion/react"

const awardsVariantes = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.3
        },
    },
}

const menuVariantes = {
    initial: {
        y: -100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3
        },
    },
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="hSection left">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hero-titile">
                    Igor Gonçalves<span>| DEV</span>
                </motion.h1>
                <motion.div variants={awardsVariantes} initial="initial" animate="animate" className="awards">
                    <motion.h2 variants={awardsVariantes} >Desenvolvedor Web</motion.h2>
                    <motion.p variants={awardsVariantes} >A mais de 2 anos trabalhando com o desenvolvimento web, entregando soluções únicas e inovadoras.</motion.p>
                    <motion.div variants={awardsVariantes} className="socialMedias">
                        <motion.a variants={awardsVariantes} href="https://www.linkedin.com/in/igorgpdev/" target="_blank">
                            <img src="/static/svgs/linkedin.svg" alt="Veja meu perfil no Linkedin" />
                        </motion.a>
                        <motion.a variants={awardsVariantes} href="https://github.com/igorgp06" target="_blank">
                            <img src="/static/svgs/github.svg" alt="Veja meu perfil no github" />
                        </motion.a>
                        <motion.a variants={awardsVariantes} href="https://www.instagram.com/igorgp.06" target="_blank">
                            <img src="/static/svgs/instagram.svg" alt="Veja meu perfil no instagram" />
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.a
                    animate={{ y: [0, 5], opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    href="#services" className="arrowDown">
                    <img src="/static/svgs/arrow-down.svg" alt="rolar para a seção de serviços" />
                </motion.a>
            </div>

            <div className="hSection right">
                <motion.div variants={menuVariantes} initial="initial" animate="animate" className="menu">
                    <motion.a variants={menuVariantes} href="#hero">
                        <img src="/static/svgs/house.svg" alt="Seção inicial" />
                    </motion.a>
                    <motion.a variants={menuVariantes} href="#services">
                        <img src="/static/svgs/tools.svg" alt="Seção de serviços" />
                    </motion.a>
                    <motion.a variants={menuVariantes} href="#portfolio">
                        <img src="/static/svgs/laptop.svg" alt="Seção de portifólio e projetos" />
                    </motion.a>
                    <motion.a variants={menuVariantes} href="#contact">
                        <img src="/static/svgs/telephone.svg" alt="Seção de contato" />
                    </motion.a>
                    <motion.div variants={menuVariantes} className="menuTextContainer">
                        <div className="menuText">MENU</div>
                    </motion.div>
                </motion.div>
                <Speech />
                <motion.a href="#contact" className="contactLink"
                    animate={{
                        x: [200, 0],
                        opacity: [0, 1]
                    }}
                    transition={{ duration: 1.8 }}>
                    <motion.div className="contactButton"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                        <svg viewBox="0 0 200 200" width="150" height="150">
                            <circle cx="100" cy="100" r="90" fill="#c291f2" />
                            <path
                                id="innerCirclePath"
                                fill="none"
                                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                            />
                            <text className="circleText">
                                <textPath href="#innerCirclePath">Me contrate •</textPath>
                            </text>
                            <text className="circleText">
                                <textPath href="#innerCirclePath" startOffset="44%">Contate-me •
                                </textPath>
                            </text>
                        </svg>
                        <div className="arrow">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="50"
                                height="50"
                                fill="none"
                                stroke="black"
                                strokeWidth="2">
                                <line x1="6" y1="18" x2="18" y2="6" />
                                <polyline points="9 6 18 6 18 15" />
                            </svg>
                        </div>
                    </motion.div>
                </motion.a>
            </div>

            {/* 
            
            <div className="heroBg">
                <div className="particlesContainer">
                    <ParticlesJS />
                </div>
            </div>
            
            */}
        </div>
    )
}

export default Hero