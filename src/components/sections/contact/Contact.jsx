import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
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
            duration: 0.6,
            staggerChildren: 0.2,
        },
    },
};

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const ref = useRef();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TAMPLETE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setSuccess(true);
                    setError(false);
                },
                (error) => {
                    console.log(error);
                    setError(true);
                    setSuccess(false);
                }
            );
    };

    const isInView = useInView(ref, { margin: "-200px" });

    return (
        <div className="contact" ref={ref} onSubmit={sendEmail}>
            <div className="cSection">
                <motion.form
                    ref={form}
                    variants={listVariant}
                    animate={isInView ? "animate" : "initial"}
                >
                    <motion.h1 variants={listVariant} className="cTitle">
                        Entre em Contato
                    </motion.h1>
                    <motion.div variants={listVariant} className="formItem">
                        <label>Nome</label>
                        <input type="text" name="user_username" placeholder="Insira seu nome aqui" />
                    </motion.div>
                    <motion.div variants={listVariant} className="formItem">
                        <label>E-mail</label>
                        <input
                            type="email"
                            name="user_email"
                            placeholder="exemplo@exemplo.com"
                        />
                    </motion.div>
                    <motion.div variants={listVariant} className="formItem">
                        <label>Mensagem</label>
                        <textarea
                            rows={10}
                            name="user_message"
                            placeholder="Me conte um pouco sobre sua ideia "
                        ></textarea>
                    </motion.div>
                    <motion.button variants={listVariant} className="formButton">
                        Send
                    </motion.button>
                    {success && <span>Mensagem enviada com sucesso!</span>}
                    {error && <span>Algo deu errado, mensagem não enviada</span>}
                </motion.form>
            </div>
            <div className="cSection">
                <ContactSvg />
            </div>
        </div>
    );
};

export default Contact;