import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { CardCriarCategoria } from "../../components/CardCriarCategoria";
export function Categorias() {
    return (
        <>
            <Header />
            <>
                <Section title="Criar categoria" />
                <CardCriarCategoria />
            </>
            <Footer />


        </>

    )
}
