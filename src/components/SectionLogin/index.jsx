import { SectionLoginDiv } from './styles'
import { RiLockPasswordLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";


export function SectionLogin() {
    return (
        <SectionLoginDiv>
            <div className='Container'>
                <div className='Section'>
                    <h3>Login</h3>
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
                        <button className="cadastroBtn" type="submit">Logar</button>
                    </div>
                </div>
            </div>




        </SectionLoginDiv>
    )
}