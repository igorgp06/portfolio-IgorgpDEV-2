import { TypeAnimation } from "react-type-animation"
import "./speech.css"


const Speech = () => {
    return (
        <div className="bubbleContainer">
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        'Desenvolvimento Web',
                        1000,
                        'Soluções únicas e inovadoras',
                        1000,
                        'Plataformas de vendas online',
                        1000,
                        'Funcionalidade, performance, segurança e escalabilidade',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={55}
                    repeat={Infinity}
                />
            </div>
            <img src="/public/static/images/IG_Solutions.png" alt="Logo da IG Solutions" className="speechImg" />
        </div>
    )
}

export default Speech