import logo from "../../assets/burger.png";
import { Button } from "../../components/Button";
import { Container, FormContainer, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles";
import { api } from "../../services/api.js"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/UserContext..jsx";


export function Login() {

    const { putUserData } = useUser()



    const navigate = useNavigate()

    const schema = yup.object({
        email: yup
            .string()
            .email("Digite um email válido")
            .required("O email é obrigatório"),
        password: yup
            .string()
            .min(6, "A senha deve ter no mínimo 6 caracteres")
            .required("A senha é obrigatória")
    }).required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        const { data: userdata } = await toast.promise(
            api.post("/sessions", {
                email: data.email,
                password: data.password
            }),
            {
                pending: 'Erro no sistema, tente novamente',

                success: {
                    render() {
                        setTimeout(() => {
                            if (userdata?.admin) {
                                navigate("/admin/pedidos")
                            } else {
                                navigate("/home")
                            }

                        }, 2000);
                        return 'Login realizado com sucesso!'
                    }
                },

                error: 'Email ou senha incorreta.'
            }
        )
        putUserData(userdata)

    }


    return (
        <Container>
            <LeftContainer>
                <img src={logo} alt="Logo" />
            </LeftContainer>

            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email:</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha:</label>
                        <input type="password"  {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                </FormContainer>
                <p>
                    Não possui conta? <Link to={"/cadastro"}>Clique aqui.</Link>
                </p>
            </RightContainer>

        </Container>
    )
} 