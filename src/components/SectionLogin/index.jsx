import { SectionLoginDiv } from './styles'
import { RiLockPasswordLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";


export function SectionLogin() {
    return (
        <SectionLoginDiv>
            <div className='Container'>
                <div className='Section'>
                    <h3>Login</h3>
                    <div className="formLabel">
                        <TfiEmail />
                        <label htmlFor="email">email</label>
                    </div>
                    <input type="email" name="email" id="email" required />
                    <div className="formLabel">
                        <RiLockPasswordLine />
                        <label htmlFor="senha">senha</label>
                    </div>
                    <input type="password" name="" id="senha" required />

                    <button className="cadastroBtn" type="submit">Logar</button>
                    <p className="formLabel linkCriarConta">Não tem conta?<a href="/src/pages/Cadastro/cadastro.jsx" className='linkStyle'>Cadastre-se</a></p>

                </div>
            </div>




        </SectionLoginDiv>
    )
}
