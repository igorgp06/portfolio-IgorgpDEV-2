import "./hero.css"
import Speech from "./Speech"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hSection left">
                <h1 className="hero-titile">Igor Gonçalves <span>| DEV</span></h1>
                <div className="awards">
                    <h2>Desenvolvedor Web</h2>
                    <p>A mais de 2 anos trabalhando com o desenvolvimento web, entregando soluções únicas e inovadoras.</p>
                    <div className="socialMedias">
                        <a href="https://www.linkedin.com/in/igorgpdev/" target="_blank">
                            <img src="/public/static/svgs/linkedin.svg" alt="Veja meu perfil no Linkedin" />
                        </a>
                        <a href="https://github.com/igorgp06" target="_blank">
                            <img src="/public/static/svgs/github.svg" alt="Veja meu perfil no github" />
                        </a>
                        <a href="https://www.instagram.com/igorgp.06" target="_blank">
                            <img src="/public/static/svgs/instagram.svg" alt="Veja meu perfil no instagram" />
                        </a>
                    </div>
                </div>
                <a href="#services" className="arrowDown">
                    <img src="/public/static/svgs/arrow-down.svg" alt="rolar para a seção de serviços" />
                </a>
            </div>

            <div className="hSection right">
                <div className="menu">
                    <a href="#hero">
                        <img src="/public/static/svgs/house.svg" alt="Seção inicial" />
                    </a>
                    <a href="#services">
                        <img src="/public/static/svgs/tools.svg" alt="Seção de serviços" />
                    </a>
                    <a href="#portfolio">
                        <img src="/public/static/svgs/laptop.svg" alt="Seção de portifólio e projetos" />
                    </a>
                    <a href="#contact">
                        <img src="/public/static/svgs/telephone.svg" alt="Seção de contato" />
                    </a>
                    <div className="menuTextContainer">
                        <div className="menuText">MENU</div>
                    </div>
                </div>
                <Speech />
                <a href="#contact">
                    <div className="contactButton">
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
                                <textPath href="#innerCirclePath" startOffset="44%">
                                    Contate-me •
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
                                strokeWidth="2"
                            >
                                <line x1="6" y1="18" x2="18" y2="6" />
                                <polyline points="9 6 18 6 18 15" />
                            </svg>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default Hero