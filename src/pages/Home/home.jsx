import { CardEvent } from "../../components/CardEvento";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";

export function Home() {
    return (
        <div>
            <Header />
            <div>
                <Container title="Eventos" />
                <CardEvent />
                <CardEvent />
            </div>
            <Footer />
        </div>

    )
}