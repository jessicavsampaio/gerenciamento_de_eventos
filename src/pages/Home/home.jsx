import { CardEvent } from "../../components/CardEvento";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

export function Home() {
    return(
        <div>
            <div>
                <Header />
            </div>
            <Section title="Eventos" />
            <CardEvent />
            <div>
                <Footer />
            </div>
        </div>

    )
}