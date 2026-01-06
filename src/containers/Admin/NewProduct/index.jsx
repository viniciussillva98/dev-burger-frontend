
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { ImageIcon } from "@phosphor-icons/react"
import { Container, ContainerCheckbox, ContainerIput, Form, Label, Inputs, LabelUpload, Select, SubmitButton, MessageError } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../../services/api.js"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const schema = yup
    .object({
        name: yup.string().required("Digíte o nome do produto."),
        price: yup.number().positive().required("Digíte o preço do produto.").typeError("Digíte o preço do produto."),
        category: yup.object().required("Selecione uma categoria."),
        offer: yup.boolean(),
        file: yup
            .mixed()
            .test("required", "Adicione uma imagem do produto.", (value) => { //valida se o arquivo foi selecionado.
                return value && value.length > 0
            }) //verifica se o valor existe e se o tamanho do array e maior que 0.

            .test("fileSize", "O arquivo é muito grande maximo 3MB.", (value) => { //valida o tamanho do arquivo.
                return value && value[0] && value[0].size <= 3000000 //3MB.
            }) //verifica se o valor existe, se o arquivo existe e se o tamanho e menor ou igual a 3MB.

            .test("type", "Formato de arquivo não suportado.", (value) => { //valida o tipo do arquivo.
                return (value && value.length > 0 && (value[0].type === "image/jpeg" || value[0].type === "image/png"))
            })
    })
    .required()

export function NewProduct() {

    const [filename, setFilename] = useState(null)
    const [categories, setCategories] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        async function fetchCategories() {

            const { data } = await api.get("/categories") //busca as categorias na api

            setCategories(data) //atualiza o estado com as categorias buscadas
        }


        fetchCategories() //chama a funcao para buscar as categorias
    }, [])




    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        const formDate = new FormData()

        formDate.append("name", data.name)
        formDate.append("price", data.price * 100)
        formDate.append("category_id", data.category.id)
        formDate.append("file", data.file[0])
        formDate.append("offer", data.offer)

        await toast.promise(api.post("/products", formDate), {
            pending: "Adicionando produto...",
            success: "Produto adicionado com sucesso!",
            error: "Erro ao adicionar produto."
        })

        setTimeout(() => {
            navigate("/admin/produtos")
        }, 2000)

    }


    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <ContainerIput>
                    <Label>Nome do produto</Label>
                    <Inputs type="text" {...register("name")} />
                    <MessageError>{errors.name?.message}</MessageError>
                </ContainerIput>

                <ContainerIput>
                    <Label>Preço do produto</Label>
                    <Inputs type="number" {...register("price")} />
                    <MessageError>{errors.price?.message}</MessageError>
                </ContainerIput>

                <ContainerIput>
                    <LabelUpload>
                        <ImageIcon />
                        <input
                            type="file" {...register("file")}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setFilename(value?.target?.files[0].name)
                                register("file").onChange(value)
                            }}
                        />
                        {filename || "Imagem do produto"}
                    </LabelUpload>
                    <MessageError>{errors.file?.message}</MessageError>
                </ContainerIput>

                <ContainerIput>
                    <Label>Categoria do produto</Label>
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Selecione a categoria"
                                menuPortalTarget={document.body}
                            />
                        )}
                    />
                    <MessageError>{errors.category?.message}</MessageError>
                </ContainerIput>

                <ContainerIput>
                    <ContainerCheckbox>
                        <input type="checkbox" {...register("offer")} />
                        <Label>Produto em oferta?</Label>
                    </ContainerCheckbox>
                </ContainerIput>

                <SubmitButton>
                    Adicionar produto
                </SubmitButton>
            </Form>
        </Container>
    )
}