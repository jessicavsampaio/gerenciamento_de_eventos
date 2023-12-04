import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { SectionLocais } from "../../components/SectionLocais";
export function Locais() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <Section title="Local" />
            <SectionLocais />
            <div>
                <Footer />
            </div>
        </div>

    )
}