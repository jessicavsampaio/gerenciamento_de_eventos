import { CardCriarEvento } from "../../components/CardCriarEvento";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

export function CriarEvento() {
    return (

        <>
            <Header />
            <>
                <Section title="Criar evento" />
                <CardCriarEvento />
            </>
            <Footer />
        </>

    )
}
