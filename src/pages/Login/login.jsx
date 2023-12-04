import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { SectionLogin } from "../../components/SectionLogin/index";

export function Login() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <Section title="Login" />
            <SectionLogin />
            <div>
                <Footer />
            </div>
        </div>

    )
}