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
                    <div className="nome">
                        <IoIosPerson />
                        <p>nome</p>
                        <input type="text" required />
                    </div>
                    <div className="email">
                        <TfiEmail />
                        <p>email</p>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="senha">
                        <RiLockPasswordLine />
                        <p>senha</p>
                        <input type="password" name="" id="senha" required />
                    </div>
                    <div>
                        <button className="cadastroBtn" type="submit">Cadastrar</button>
                    </div>
                </div>
            </div>




        </SectionCadastroDiv>
    )
}