import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

export function CriarEvento() {
    return(
        <div>
            <div>
                <Header />
            </div>
            <Section title="Criar evento" />
            <div>
                <Footer />
            </div>
        </div>
    )
}