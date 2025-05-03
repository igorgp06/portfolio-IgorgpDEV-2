import "./services.css"
import Counter from "./Counter";
import ComputerModelContainer from "./models/ComputerModelContainer"

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
    return (
        <div className="services">
            <div className="sSection left">
                <h1 className="services-title">Como posso ajudar?</h1>
                <div className="serviceList">
                    {servicesData.map((service) => (
                        <div className="service" key={service.id}>
                            <div className="serviceIcon">
                                <img src={service.img} alt="Logo do serviço oferecido" />
                            </div>
                            <div className="serviceInfo">
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="counterList">
                    <Counter from={0} to={24} text="Projetos Concluidos" />
                    <Counter from={0} to={47} text="Ferramentas Utilizadas" />
                </div>
            </div>

            <div className="sSection right">
                <ComputerModelContainer />
            </div>
        </div>
    )
}

export default Services