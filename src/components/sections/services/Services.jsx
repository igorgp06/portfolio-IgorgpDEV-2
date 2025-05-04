import "./services.css"
import Counter from "./Counter";
import ComputerModelContainer from "./models/default/ComputerModelContainer"
import StatisticArrowContainer from "./models/StatisticArrow/StatisticArrowContainer";
import EnderChestContainer from "./models/EnderChest/EnderChestContaiern";
import GamerLaptop from "./models/gamerleptop/GamerLaptopContainer";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const textVariantes = {
    initial: {
        x: -100,
        y: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
        },
    },
}

const listVariantes = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.4,
        },
    },
}

const servicesData = [
    {
        id: 1,
        img: "/static/svgs/code-svgrepo-com.svg",
        title: "Desenvolvimento de Websites Sob Medida",
        description: "Criação de sites personalizados para atender às necessidades específicas do seu negócio.",
    },
    {
        id: 2,
        img: "/static/svgs/lock-alt-svgrepo-com.svg",
        title: "Segurança de Dados e Proteção de Privacidade",
        description: "Implementação de medidas de segurança para proteger os dados dos seus clientes e a privacidade da sua empresa.",
    },
    {
        id: 3,
        img: "/static/svgs/speed-alt-svgrepo-com.svg",
        title: "Otimizações de Sites e Melhorias de SEO",
        description: "Aprimoramento do desempenho do seu site e otimização para motores de busca. Impulsione sua visibilidade online.",
    },
];

const Services = () => {

    const [currentServiceId, setCurrentServiceId] = useState(0);

    const ref = useRef();

    const inView = useInView(ref, { margin: "-200px" });

    return (
        <div className="services" ref={ref}>
            <div className="sSection left">
                <motion.h1
                    variants={textVariantes}
                    animate={inView ? "animate" : "initial"}
                    className="services-title">
                    Como Posso Ajudar?
                </motion.h1>
                <motion.div
                    variants={listVariantes}
                    animate={inView ? "animate" : "initial"}
                    className="serviceList">
                    {servicesData.map((service) => (
                        <motion.div
                            className="service"
                            key={service.id}
                            variants={listVariantes}
                            onClick={() => setCurrentServiceId(service.id)}>
                            <div className="serviceIcon">
                                <img src={service.img} alt="Logo do serviço oferecido" />
                            </div>
                            <div className="serviceInfo">
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="counterList">
                    <Counter from={0} to={24} text="Projetos Concluidos" />
                    <Counter from={0} to={47} text="Ferramentas Utilizadas" />
                </div>
            </div>

            <div className="sSection right"> {
                    currentServiceId === 0 ? (<ComputerModelContainer />) : currentServiceId === 1 ? (<GamerLaptop />) : currentServiceId === 2 ? (<EnderChestContainer />) : currentServiceId === 3 ? (<StatisticArrowContainer />) : null
                }
            </div>
        </div>
    )
}

export default Services