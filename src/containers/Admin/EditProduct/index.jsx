
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { ImageIcon } from "@phosphor-icons/react"
import { Container, ContainerCheckbox, ContainerIput, Form, Label, Inputs, LabelUpload, Select, SubmitButton, MessageError } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../../services/api.js"
import { toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"

const schema = yup
    .object({
        name: yup.string().required("Digíte o nome do produto."),
        price: yup.number().positive().required("Digíte o preço do produto.").typeError("Digíte o preço do produto."),
        category: yup.object().required("Selecione uma categoria."),
        offer: yup.boolean(),

    })
    .required()

export function EditProduct() {

    const { state: { infoprd } } = useLocation()


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
        formDate.append("price", data.price)
        formDate.append("category_id", data.category.id)
        formDate.append("file", data.file[0])
        formDate.append("offer", data.offer)

        await toast.promise(api.put(`/products/${infoprd.id}`, formDate), {
            pending: "Editando produto",
            success: "Produto editado com sucesso!",
            error: "Erro ao editar o produto."
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
                    <Inputs type="text" {...register("name")} defaultValue={infoprd.name} />
                    <MessageError>{errors.name?.message}</MessageError>
                </ContainerIput>

                <ContainerIput>
                    <Label>Preço do produto</Label>
                    <Inputs type="number" {...register("price")} defaultValue={infoprd.price} />
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
                        defaultValue={infoprd.theCategory}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Selecione a categoria"
                                menuPortalTarget={document.body}
                                defaultValue={infoprd.theCategory}
                            />
                        )}
                    />
                    <MessageError>{errors.category?.message}</MessageError>
                </ContainerIput>

                <ContainerIput>
                    <ContainerCheckbox>
                        <input type="checkbox" {...register("offer")} defaultChecked={infoprd.offer} />
                        <Label>Produto em oferta?</Label>
                    </ContainerCheckbox>
                </ContainerIput>

                <SubmitButton>
                    Editar produto
                </SubmitButton>
            </Form>
        </Container>
    )
}