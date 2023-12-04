import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { SectionCategoria } from "../../components/SectionCategoria/index";
export function Categorias() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <Section title="Categorias" />
            <SectionCategoria />
            <div>

            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}