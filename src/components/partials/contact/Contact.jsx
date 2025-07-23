import { MailIcon, MapPin, SendIcon } from "lucide-react"
import { cn } from "../../../lib/utils";
import { useToast } from "../../../hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export const Contact = () => {
    const form = useRef();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            console.error("Erro interno no emailjs: Verifique as variáveis de ambiente.");
            toast({
                title: "Erro interno no emailjs",
                description: "Verifique as variáveis de ambiente do emailjs.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(
                (result) => {
                    console.log("SUCESSO!", result.text);
                    toast({
                        title: "Mensagem enviada com sucesso!",
                        description: "Obrigado por entrar em contato. Responderei o mais breve possivel.",
                        variant: "success",
                    });
                    e.target.reset();
                },
                (error) => {
                    console.error("ERRO:", error.text);
                    toast({
                        title: "Erro ao enviar mensagem",
                        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.",
                        variant: "destructive",
                    });
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section className="py-24 px-4 relative bg-secondary/30" id="contact">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Entre em
                    <span className="text-primary"> Contato</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 mx-auto">
                    Estou aqui para realizar o sonho do seu projeto, tomando soluções que
                    vão impulsionar o crescimento do seu negócio. A oportunidade está sob seu alcance,
                    entre em contato e vamos abraçar essa oportunidade!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MailIcon className="w-6 h-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium text-start">Email</h4>
                                    <a href="mailto:contato@igdeveloper.com.br" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        contato@igdeveloper.com.br
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="w-6 h-6 text-primary" /> {" "}
                                </div>
                                <div>
                                    <h4 className="font-medium text-start">Localização</h4>
                                    <a href="https://maps.app.goo.gl/grnEepkGwuXavEDM7" target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        Imbituba, Santa Catarina - Brasil
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div>
                                    <p className="font-medium text-center">
                                        Ou envie uma mensagem diretamente pelo formulário presente na seção!
                                        Me conte um pouco sobre a sua ideia ou projeto para conversarmos sobre
                                        como podemos por em prática.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Redes Sociais</h4>
                            <div className="flex space-x-6 justify-center">
                                <a href="https://www.linkedin.com/in/igorgpdev" target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </a>
                                <a href="https://github.com/igorgp06" target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                    </svg>
                                </a>
                                <a href="https://x.com/igorgpDEV" target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/igorgp.06" target="_blank" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Me mande uma mensagem!</h3>

                        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="name" className="block text-md font-medium mb-2">
                                    Seu Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Digite aqui o seu nome"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-md font-medium mb-2">
                                    Seu Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="exemplo@exemplo.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-md font-medium mb-2">
                                    Sua Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Descreva aqui a sua ideia ou sugestão de projeto!"
                                    rows="3"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                                <SendIcon size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
