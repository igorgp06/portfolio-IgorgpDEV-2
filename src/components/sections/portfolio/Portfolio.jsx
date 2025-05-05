import "./portfolio.css";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const portfolioItens = [
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
    },
    {
        id: 5,
        img: "/static/images/javaRestApi.png",
        title: "Uma API Rest com Java e Spring Boot",
        desc: "Uma API Rest que foi criada com Java e Spring Boot, ela é capaz de gerenciar funcionários com seus respectivos departamentos.",
        link: "https://github.com/igorgp06/RestAPI-com-Java-e-SpringBoot"
    },
];

const ListItem = ({ item }) => {
    return (
        <div className="pItem">
            <div className="pImg">
                <img src={item.img} alt={item.desc} />
            </div>
            <div className="pText">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <a href={item.link}>
                    <button>Veja o Projeto</button>
                </a>
            </div>
        </div>
    )
}

const Portfolio = () => {
    
    const ref = useRef(null);

    const [containerDist, setContainerDist] = useState(0);

    useEffect(() => {
        if(ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setContainerDist(rect.left)
        }
    }, [])

    const { scrollYProgress } = useScroll({ target: ref });

    const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * portfolioItens.length])

    return (
        <div className="portfolio" ref={ref}>
            <motion.div className="pList" style={{ x: xTranslate }}>
                <div className="empty" style={{ width:window.innerWidth - containerDist }}/>
                    
                {portfolioItens.map(item => (
                    <ListItem item={item} key={item.id} />
                ))}
            </motion.div>
            <section />
            <section />
            <section />
            <section />
            <section />
        </div >
    )
}

export default Portfolio