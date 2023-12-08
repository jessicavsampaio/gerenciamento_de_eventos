import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { SectionLogin } from "../../components/SectionLogin/index";

export function Login() {
    return (
        <>
            <Header />
            <body>
                <Section title="Login" />
                <SectionLogin />
            </body>
            <Footer />
        </>
    )
}
