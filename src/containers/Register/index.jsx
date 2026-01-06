import logo from "../../assets/burger.png";
import { Button } from "../../components/Button";
import { Container, FormContainer, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles";
import { api } from "../../services/api.js"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export function Register() {

    const navigate = useNavigate()

    const schema = yup.object({
        name: yup.string().required("O nome é obrigatório"),
        email: yup
            .string()
            .email("Digite um email válido")
            .required("O email é obrigatório"),
        password: yup
            .string()
            .min(6, "A senha deve ter no mínimo 6 caracteres")
            .required("A senha é obrigatória"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), "As senhas devem ser iguais"])
            .required("Confirme a senha")
    }).required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        try {
            const { status } = await
                api.post("/users", {
                    name: data.name,
                    email: data.email,
                    password: data.password
                },
                    { validateStatus: () => true },)

            if (status == 200 || status == 201) {
                setTimeout(() => {
                    navigate("/")
                }, 2000);
                toast.success("Cadastro realizado!")
            } else if (status === 409) {
                toast.error("Esse email já está cadastrado")
            } else {
                throw new Error()
            }
        } catch (error) {
            toast.error("Falha no sistema tente novamente")
        }

    }



    return (
        <Container>
            <LeftContainer>
                <img src={logo} alt="Logo" />
            </LeftContainer>

            <RightContainer>
                <Title>
                    Dev Burguer! <span>Crie sua conta.</span>
                </Title>
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Digíte seu nome:</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Adicione um email válido:</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Crie um senha:</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Confirme sua senha:</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Cadastrar</Button>

                </FormContainer>
                <p>
                    Já possui conta? <Link to={"/"}>Clique aqui.</Link>
                </p>
            </RightContainer>

        </Container>
    )
} 