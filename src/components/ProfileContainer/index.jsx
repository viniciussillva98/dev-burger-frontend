import { Container } from "./styles"; // Importa o componente estilizado Container, que contém o layout da sidebar e overlay
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/UserContext..jsx"
import { SignOutIcon } from "@phosphor-icons/react"
import logo from "../../assets/burger.png"


export function ProfileContainer({ open, onClose }) { // Declara o componente e recebe as props: open (controle) e onClose (função de fechar)

    const navigate = useNavigate()
    const { logout, userInfo } = useUser()

    function logoutUser() {
        logout()
        navigate("/")
    }



    return ( // Inicia o retorno JSX do componente
        <Container open={open}> {/* Container estilizado que usa a prop "open" para controlar animações e visibilidade */}

            <div className="content"> {/* Caixa lateral fixa que contém as informações do perfil */}

                <button className="button" onClick={onClose}>x</button> {/* Botão de fechar; ao clicar, executa onClose */}

                <h3>Meu Perfil</h3> {/* Título do painel lateral */}

                <p> <span>Nome:</span>
                    <br />
                    {userInfo.name}</p> {/* Exibe o nome do usuário (exemplo estático) */}

                <p><span>Email:</span>
                    <br />
                    {userInfo.email}</p> {/* Exibe o e-mail do usuário (exemplo estático) */}

                <img src={logo} />

                <button className="logout" onClick={logoutUser}><SignOutIcon size={20} /> Sair</button>

            </div> {/* Fim do conteúdo da sidebar */}

            <div className="overlay" onClick={onClose} /> {/* Camada escura atrás da sidebar; ao clicar, fecha o painel */}

        </Container> // Encerra o componente estilizado Container
    ); // Finaliza o retorno do componente
} // Fim do componente ProfileContainer
