import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { SectionCadastro } from "../../components/SectionCadastro/index";

export function Cadastro() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <Section title="Cadastro" />
            <SectionCadastro />
            <div>
                <Footer />
            </div>
        </div>

    )
}