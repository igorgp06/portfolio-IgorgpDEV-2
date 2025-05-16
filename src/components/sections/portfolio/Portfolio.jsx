import "./portfolio.css";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

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
    },
    {
        id: 5,
        img: "/static/images/javaRestApi.png",
        title: "Uma API Rest com Java e Spring Boot",
        desc: "Uma API Rest que foi criada com Java e Spring Boot, ela é capaz de gerenciar funcionários com seus respectivos departamentos.",
        link: "https://github.com/igorgp06/RestAPI-com-Java-e-SpringBoot"
    },
];

const imgVariants = {
    initial: {
        x: -500,
        y: 500,
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
        x: 500,
        y: 500,
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

const ListItem = ({ item }) => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <div className="pItem" ref={ref}>
            <motion.div
                variants={imgVariants}
                animate={isInView ? "animate" : "initial"}
                className="pImg"
            >
                <img src={item.img} alt="" />
            </motion.div>
            <motion.div
                variants={textVariants}
                animate={isInView ? "animate" : "initial"}
                className="pText"
            >
                <motion.h1 variants={textVariants}>{item.title}</motion.h1>
                <motion.p variants={textVariants}>{item.desc}</motion.p>
                <motion.a variants={textVariants} href={item.link}>
                    <button>Veja o Projeto</button>
                </motion.a>
            </motion.div>
        </div>
    );
};

const Portfolio = () => {
    const [containerDistance, setContainerDistance] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const calculateDistance = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setContainerDistance(rect.left);
            }
        };

        calculateDistance();

        window.addEventListener("resize", calculateDistance);

        return () => {
            window.removeEventListener("resize", calculateDistance);
        };
    }, []);

    const { scrollYProgress } = useScroll({ target: ref });

    const xTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -window.innerWidth * items.length]
    );

    return (
        <div className="portfolio" ref={ref}>
            <motion.div className="pList" style={{ x: xTranslate }}>
                <div
                    className="empty"
                    style={{
                        width: window.innerWidth - containerDistance,
                    }}
                />
                {items.map((item) => (
                    <ListItem item={item} key={item.id} />
                ))}
            </motion.div>
            <section />
            <section />
            <section />
            <section />
            <section />
            <div className="pProgress">
                <svg width="100%" height="100%" viewBox="0 0 160 160">
                    <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#f2efeb"
                        strokeWidth={18}
                    />
                    <motion.circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#ae7ef2"
                        strokeWidth={20}
                        style={{ pathLength: scrollYProgress }}
                        transform="rotate(-90 80 80)"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Portfolio;