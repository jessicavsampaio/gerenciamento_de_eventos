import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { CardCriarCategoria } from "../../components/CardCriarCategoria";
export function Categorias() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <Section title="Criar categoria" />
            <CardCriarCategoria />
            <div>

            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}