import { CardEvent } from "../../components/CardEvento";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";

export function Home() {
    return (
        <div>
            <body>
                <Header />
                <div>
                    <Container title="Eventos" />
                    <CardEvent />
                    <CardEvent />
                </div>
            </body>
            <Footer />
        </div>

    )
}