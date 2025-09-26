import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";

export const Terms = () => {
    const lastUpdated = new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return (
        <section className="container mx-auto px-4 py-16 animate-fade-in">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-glow">Termos de Uso</h1>
                <p className="text-muted-foreground mb-8">
                    Última atualização: {lastUpdated}
                </p>

                <div className="space-y-8 text-left text-lg text-muted-foreground">
                    <p>
                        Bem-vindo ao portfólio do <span className="text-primary font-semibold">Igor Gonçalves</span>. Estes Termos de Uso ("Termos") governam seu acesso e uso deste site e seus conteúdos. Ao acessar ou usar o site, você concorda em cumprir estes Termos e nossa Política de Privacidade.
                    </p>

                    <div className="p-6 rounded-lg bg-card border">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">1. Aceitação dos Termos</h2>
                        <p>
                            Ao acessar e navegar neste site, você confirma que leu, entendeu e concorda em estar vinculado a todas as condições estabelecidas nestes Termos. Se você não concordar com qualquer parte destes, por favor, não utilize nosso site.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg bg-card border">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">2. Propriedade Intelectual e Licença de Uso</h2>
                        <p>
                            Todo o conteúdo presente neste site – incluindo, mas não se limitando a, textos, gráficos, logotipos, código-fonte, design e projetos de portfólio – é de propriedade exclusiva de Igor Gonçalves | DEV (IG Solutions) e protegido por leis de direitos autorais.
                        </p>
                        <p className="mt-3 font-semibold text-foreground">
                            O código-fonte deste site é disponibilizado publicamente com uma licença restrita, com os seguintes termos:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>
                                <span className="font-bold">Permissão:</span> O código é disponibilizado <span className="text-primary">apenas para fins de visualização e aprendizado</span>.
                            </li>
                            <li>
                                <span className="font-bold">Restrições:</span> É estritamente proibido o <span className="text-primary">uso comercial</span>, a <span className="text-primary">modificação</span> e a <span className="text-primary">redistribuição</span> total ou parcial do código e de seus ativos (como imagens e textos).
                            </li>
                        </ul>
                        <p className="mt-3">
                            A violação destas condições constitui uma violação dos direitos autorais e estará sujeita às medidas legais cabíveis. A licença completa pode ser encontrada no repositório oficial do projeto atráves deste <a href="https://github.com/igorgp06/portfolio-IgorgpDEV-2/blob/main/LICENSE" target="_blank" className="text-primary underline">link</a>.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg bg-card border">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">3. Uso Permitido e Conduta do Usuário</h2>
                        <p>
                            Você tem a permissão de navegar e interagir com o site para os fins a que ele se destina: conhecer meu trabalho e entrar em contato. Fica vedada qualquer ação que exceda os limites definidos na cláusula de Propriedade Intelectual, além de ser estritamente proibido:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Utilizar o site para qualquer propósito ilegal ou não autorizado.</li>
                            <li>Tentar copiar, modificar ou redistribuir o conteúdo ou código-fonte do site.</li>
                            <li>Enviar spam ou mensagens não solicitadas através de nosso formulário de contato.</li>
                            <li>Tentar introduzir vírus, malware ou qualquer outro código malicioso.</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-lg bg-card border">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">4. Limitação de Responsabilidade</h2>
                        <p>
                            Este site e seu conteúdo são fornecidos "como estão". Embora nos esforcemos para manter as informações precisas e atualizadas, não oferecemos garantias de qualquer tipo. Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos ou consequenciais resultantes do seu uso ou incapacidade de usar este site.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg bg-card border">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">5. Links para Sites de Terceiros</h2>
                        <p>
                            Nosso site pode conter links para sites de terceiros (como projetos hospedados em outros domínios ou perfis de redes sociais). Esses links são fornecidos apenas para sua conveniência. Não temos controle sobre o conteúdo desses sites e não nos responsabilizamos por eles ou por qualquer perda ou dano que possa surgir do seu uso.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg bg-card border">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">6. Modificações nos Termos</h2>
                        <p>
                            Reservamo-nos o direito de modificar estes Termos a qualquer momento. A data da "Última atualização" no topo da página indicará quando as revisões foram feitas. O uso contínuo do site após a publicação de quaisquer alterações constitui sua aceitação dos novos Termos.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg bg-card border">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">7. Lei Aplicável e Foro</h2>
                        <p>
                            Estes Termos são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Fica eleito o foro da comarca de Imbituba, Santa Catarina, para dirimir quaisquer controvérsias oriundas destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
                        </p>
                    </div>

                    <div className="p-6 rounded-lg bg-card border">
                        <h2 className="text-2xl font-semibold mb-3 text-foreground">8. Contato</h2>
                        <p>
                            Se você tiver alguma dúvida sobre estes Termos de Uso, por favor, entre em contato através do e-mail: <a href="mailto:contato@igdeveloper.com.br" className="text-primary underline hover:text-primary/80">contato@igdeveloper.com.br</a>.
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
    );
};