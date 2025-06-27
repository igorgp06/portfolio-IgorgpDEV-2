import "./portfolio.css";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const items = [
    {
        id: 1,
        img: "/static/images/DestinosdoKite.png",
        title: "Destinos do Kite",
        desc: "Um site de turismo que reune as informações sobre os melhores lugares para praticar kite surf.",
        link: "https://destinosdokite.com.br",
    },
    {
        id: 2,
        img: "/static/images/linkbioIgorgp.png",
        title: "LinkBio para Redes Sociais",
        desc: "Um site de HTML e CSS puro que serve como uma central para reunir todas as suas informações importantes, adaptado especialmente para o dispositivo mobile.",
        link: "https://linkbio.igdeveloper.com.br",
    },
    {
        id: 3,
        img: "/static/images/loginSystem.png",
        title: "Sistema de Login com Python",
        desc: "Um sistema de login e cadastro de usuário utilizando Python, SQLite e o CustomTkinter.",
        link: "https://github.com/igorgp06/Login-System",
    },
    {
        id: 4,
        img: "/static/images/IgorPortfolio1.png",
        title: "Meu Antigo Portfólio Pessoal",
        desc: "Meu primeiro portfólio pessoal feito com HTML, CSS e JavaScript.",
        link: "https://igdeveloper.com.br",
    }
];

const imgVariants = {
    initial: {
        x: -100,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const textVariants = {
    initial: {
        x: 100,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.05,
        },
    },
};

const Portfolio = () => {
    const ref = useRef(null);

    return (
        <div className="portfolio" ref={ref}>
            <div className="pList">
                <div className="pCard">
                    
                </div>
                <div className="pCard">

                </div>
                <div className="pCard">

                </div>
                <div className="pCard">

                </div>
            </div>
        </div>
    );
};

export default Portfolio;