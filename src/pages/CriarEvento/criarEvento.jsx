import { CardCriarEvento } from "../../components/CardCriarEvento";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

export function CriarEvento() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Section title="Criar evento" />
                <CardCriarEvento />
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}