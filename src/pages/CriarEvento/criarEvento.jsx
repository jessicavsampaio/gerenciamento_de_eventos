import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { SectionEvento } from "../../components/SectionEvento/index";
export function CriarEvento() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <Section title="Criar evento" />
            <SectionEvento />
            <div>
                <Footer />
            </div>
        </div>
    )
}