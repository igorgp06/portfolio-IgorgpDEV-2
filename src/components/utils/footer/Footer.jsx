import { ArrowUp } from "lucide-react"

export const Footer = () => {

    return (
        <footer className="py-6 px-6 relative p-8 flex flex-wrap justify-between items-center">
            {" "}
            <p className="text-sm text-muted-foreground">
                {" "}
                &copy; {new Date().getFullYear()}{" "}
                <a href="https://igdeveloper.com.br" target="_self" className="text-primary hover:text-glow transition-all duration-300">
                    Igor Gonçalves | DEV
                </a> <br />
                Todos os direitos reservados.
            </p>

            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300">
                <ArrowUp />
            </a>
        </footer>
    )
}