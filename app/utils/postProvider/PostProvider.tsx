import { useNavigate } from '@remix-run/react'
import React, { createContext, FC, useEffect, useState } from 'react'
import * as Yup from 'yup'
import axios from 'axios'

interface Props {
    selectedImage: File | undefined
    setSelectedImage(e: any): void
    preview: string | undefined
    setPreview(e: any): void
    modalOpen: boolean
    setModalOpen(e: boolean): void
    validateSchemaTweetar: {}
    onSubmitTweet(values: any, erros: any): void
    onSelectFile(event: any): void
    onCloseModal(): void


}

export const PostContext = createContext<Props>(
    {
        modalOpen: false,
        setModalOpen: () => { },
        preview: undefined,
        setPreview: () => { },
        selectedImage: undefined,
        setSelectedImage: () => { },
        validateSchemaTweetar: {},
        onSubmitTweet: () => { },
        onSelectFile: () => { },
        onCloseModal: () => { },


    }
)

const PostProvider: FC = ({ children }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState<File | undefined>()
    const [preview, setPreview] = useState<string | undefined>("")
    const navigate = useNavigate()

    const tweetIsValid = (erros: any) => {
        if (erros) {
            return false
        }
        return true
    }

    const onCloseModal = () => {
        setModalOpen(false)
        setPreview(undefined)
    }

    useEffect(() => {

        if (selectedImage) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }

            reader.readAsDataURL(selectedImage)
        } else {
            setPreview(undefined)
        }

    }, [selectedImage])

    const onSelectFile = (event: any) => {
        const image = event.target.files[0]
        if (image) {
            setSelectedImage(image)
        } else {
            setSelectedImage(undefined)
        }

    }

    const onSubmitTweet = (values: any, erros: any) => {
        const validationTweet = tweetIsValid(erros.inputPost)
        if (validationTweet) {
            axios.post("http://localhost:8001/posts",
                {
                    "id": "@maria",
                    "name": "mariapimental",
                    "img": "https://img.freepik.com/fotos-gratis/linda-mulher-asiatica-usa-aplicativo-de-smartphone-e-envia-mensagens-em-pontos-de-bate-papo-de-midia-social-no-espaco-da-copia-usa-jaqueta-casual_273609-48643.jpg?w=2000",
                    "post": values.inputPost,
                }
            ).then(() => {
                setModalOpen(false)
                setPreview(undefined)
                navigate("/home")
            })
                .catch((erro) => console.log(erro))
        }
    }

    const validateSchemaTweetar = Yup.object().shape({
        inputPost: Yup.string().required("Por favor, insira um tweet"),
    });

    return (
        <PostContext.Provider value={
            {
                modalOpen,
                setModalOpen,
                preview,
                setPreview,
                selectedImage,
                setSelectedImage,
                validateSchemaTweetar,
                onSubmitTweet,
                onSelectFile,
                onCloseModal,
            }
        }>
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider