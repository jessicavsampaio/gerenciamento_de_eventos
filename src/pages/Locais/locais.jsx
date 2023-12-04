import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { CardCriarLocais } from "../../components/CardCriarLocais";
export function Locais() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <Section title="Criar local" />
            <CardCriarLocais />
            <div>
                <Footer />
            </div>
        </div>

    )
}