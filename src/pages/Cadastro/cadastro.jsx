import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { SectionCadastro } from "../../components/SectionCadastro/index";

export function Cadastro() {
    return (
        <>
            <Header />
            <>
                <Section title="Cadastro" />
                <SectionCadastro />
            </>
        </>
    )
}
