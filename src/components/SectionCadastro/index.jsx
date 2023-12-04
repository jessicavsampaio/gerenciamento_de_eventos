import { SectionCadastroDiv } from './styles'
import { RiLockPasswordLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { IoIosPerson } from "react-icons/io";

export function SectionCadastro() {
    return (
        <SectionCadastroDiv>
            <div className='Container'>
                <div className='Section'>
                    <h3>Cadastro</h3>
                    <div className="formLabel">
                        <IoIosPerson />
                        <label htmlFor="nome">nome</label>
                    </div>
                    <input id="nome" type="text" required />
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
                    <button className="cadastroBtn" type="submit">Cadastrar</button>
                </div>
            </div>




        </SectionCadastroDiv>
    )
}