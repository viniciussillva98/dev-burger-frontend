import styled from "styled-components"; // Importa a função styled para criar componentes estilizados

export const Container = styled.div` // Cria o componente Container como uma <div> estilizada

    .overlay { // Estilos da camada escura que aparece atrás da sidebar
        position: fixed; // Fixa no viewport, independente da rolagem
        top: 0; // Começa no topo da tela
        left: 0; // Começa na esquerda da tela
        width: 100%; // Largura ocupando a tela inteira
        height: 100vh; // Altura ocupando a tela inteira
        background: rgba(0, 0, 0, 0.2); // Fundo semitransparente para escurecer o fundo
        opacity: ${({ open }) => (open ? 1 : 0)}; // Controla visibilidade baseado no estado "open"
        pointer-events: ${({ open }) => (open ? "auto" : "none")}; // Bloqueia cliques quando não está aberta
        transition: 0.4s; // Anima a transição de opacidade
        z-index: 1000;
        cursor: pointer;
    }

    .content { // Estilos do painel lateral (sidebar)
        position: fixed; // Fixa ao lado da tela, não acompanha rolagem
        top: 0; // Começa no topo da tela
        right: ${({ open }) => (open ? "0" : "-350px")}; // Move para dentro da tela quando "open" é true
        width: 300px; // Largura fixa da sidebar
        height: 100vh; // Altura igual à altura total da tela
        color: ${props => props.theme.white};
        background: ${props => props.theme.darkcontainer}; // Fundo 
        padding: 20px; // Espaçamento interno
        transition: right 0.3s ease-in-out;
        z-index: 1001;
        display: flex;
        gap: 10px;
       

        p{
            font-weight: 400;
            font-size: 15px;
        }
    }
    .logout{
        border: none;
        background-color: transparent;
        margin-top: auto;
        margin-bottom: 30px;
        font-size: 15px;
        font-weight: 500;
         transition: 1s;
        color: ${props => props.theme.white};
        cursor: pointer;
                &:hover{
            color: ${props => props.theme.darkred};
            transform: translateY(-5px);
            font-size: 17px;
        }
    }

    .button { // Estilos do botão de fechar
        background: none; // Remove fundo do botão
        border: none; // Remove borda padrão
        font-size: 15px; // Tamanho da fonte do "X"
        cursor: pointer; // Cursor de clique
        color: ${props => props.theme.white}; // Cor branca
        margin-bottom: 20px;

        &:hover{
            color: ${props => props.theme.darkred};
        }
    }

 img{
    margin-top: 80px;
    height: 150px;
 }
`;
