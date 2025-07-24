import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export const Privacy = () => {

    const lastUpdated = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return (
        <section className="container mx-auto px-4 py-16 animate-fade-in">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-glow">Política de Privacidade</h1>
                <p className="text-muted-foreground mb-8">
                    Última atualização: {lastUpdated}
                </p>

                <div className="space-y-8 text-left text-lg text-muted-foreground">
                    <p>
                        A sua privacidade é de extrema importância para nós. Esta Política de Privacidade descreve como as informações pessoais são coletadas, usadas e protegidas quando você utiliza o nosso site. Ao navegar neste site, você concorda com a coleta e o uso de informações de acordo com esta política.
                    </p>

                    <div className="p-6 rounded-lg bg-card border">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">1. Coleta de Informações</h2>
                        <p>
                            Coletamos informações de duas formas:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>
                                <strong>Dados Fornecidos por Você:</strong> Informações que você nos envia diretamente ao preencher o formulário de contato, como <span className="text-primary">nome</span> e <span className="text-primary">e-mail</span>.
                            </li>
                            <li>
                                <strong>Dados Coletados Automaticamente:</strong> Informações coletadas por meio de cookies e tecnologias semelhantes enquanto você navega, como seu endereço IP, tipo de navegador, e páginas visitadas, com o objetivo de melhorar sua experiência e analisar o tráfego do site.
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-lg bg-card border">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">2. Uso das Informações</h2>
                        <p>
                            As informações que coletamos são utilizadas para as seguintes finalidades:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Responder às suas solicitações e mensagens enviadas pelo formulário de contato.</li>
                            <li>Personalizar e melhorar sua experiência em nosso site.</li>
                            <li>Enviar e-mails com atualizações e marketing, <span className="font-bold">apenas se você consentir explicitamente</span> para tal. Você poderá se descadastrar a qualquer momento.</li>
                            <li>Analisar o tráfego e as tendências de uso para otimizar nossos serviços.</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-lg bg-card border">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">3. Compartilhamento de Informações</h2>
                        <p>
                            Nós não vendemos ou alugamos suas informações pessoais. O compartilhamento de dados ocorre apenas com fornecedores de serviços essenciais para nossa operação, como:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li><strong>Serviços de Hospedagem:</strong> (Ex: HostGator, Vercel) para manter o site no ar.</li>
                            <li><strong>Plataformas de E-mail Marketing:</strong> (Ex: HostGator, Mailchimp) para o envio de comunicações, mediante seu consentimento.</li>
                            <li><strong>Ferramentas de Análise:</strong> (Ex: Google Analytics) para monitorar o desempenho do site.</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-lg bg-card border">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">4. Seus Direitos (LGPD)</h2>
                        <p>
                            Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/18), você tem o direito de:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Confirmar a existência e acessar seus dados.</li>
                            <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                            <li>Revogar o seu consentimento a qualquer momento.</li>
                        </ul>
                        <p className="mt-3">Para exercer seus direitos, entre em contato conosco pelo e-mail abaixo.</p>
                    </div>

                    <div className="p-6 rounded-lg bg-card border">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">5. Contato</h2>
                        <p>
                            Se tiver qualquer dúvida sobre esta Política de Privacidade ou sobre seus dados, por favor, entre em contato através do e-mail: <a href="mailto:contato@igdeveloper.com.br" className="text-primary underline hover:text-primary/80">contato@igdeveloper.com.br</a>.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link to="/" className={cn(
                        "cosmic-button w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md transition-colors duration-300",
                        "bg-primary text-primary-foreground hover:bg-primary/80 cursor-pointer"
                    )}>
                        Voltar para a página inicial
                    </Link>
                </div>

            </div>
        </section>
    )
}