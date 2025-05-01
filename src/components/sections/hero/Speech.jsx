import "./speech.css"
import { TypeAnimation } from "react-type-animation"
import { motion } from "motion/react"

const Speech = () => {
    return (
        <motion.div className="bubbleContainer" animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
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
            <motion.img src="/static/images/IG_Solutions.png" alt="Logo da IG Solutions" className="speechImg"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
        </motion.div>
    )
}

export default Speech