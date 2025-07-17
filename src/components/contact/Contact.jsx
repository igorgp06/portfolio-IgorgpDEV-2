import { MailIcon } from "lucide-react"


export const Contact = () => {
    return (
        <section className="py-24 px-4 relative bg-secondary/30" id="contact">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Entre em
                    <span className="text-primary">Contato</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 mx-auto">
                    Estou aqui para realizar o sonho do seu projeto, tomando soluções que
                    vão impulsionar o crescimento do seu negócio. A oportunidade está sob seu alcance,
                    entre em contato e vamos abraçar essa oportunidade!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MailIcon className="w-6 h-6 text-primary" /> {" "}
                                </div>
                                <div className="">
                                    <h4> Email</h4>
                                    <a href="mailto:contato@igdeveloper.com.br">

                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}