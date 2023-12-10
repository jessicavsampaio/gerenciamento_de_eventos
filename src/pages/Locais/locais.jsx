import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { CardCriarLocais } from "../../components/CardCriarLocais";
export function Locais() {
    return (
        <>
            <Header />
                <Section title="Criar local" />
                <CardCriarLocais />
        </>

    )
}
