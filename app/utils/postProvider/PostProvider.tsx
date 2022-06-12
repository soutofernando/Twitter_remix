import { useNavigate } from '@remix-run/react'
import React, { createContext, FC, useState } from 'react'
import * as Yup from 'yup'
import axios from 'axios'

interface Props {
    modalOpen: boolean
    setModalOpen(e: boolean): void
    validateSchemaTweetar: {}
    onSubmitTweet(values: any, erros: any): void

}

export const PostContext = createContext<Props>(
    {
        modalOpen: false,
        setModalOpen: () => { },
        validateSchemaTweetar: {},
        onSubmitTweet: () => { },

    }
)

const PostProvider: FC = ({ children }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const navigate = useNavigate()

    const tweetIsValid = (erros: any) => {
        if (erros) {
            return false
        }
        return true
    }

    const onSubmitTweet = (values: any, erros: any) => {
        const validationTweet = tweetIsValid(erros.inputPost)
        if (validationTweet) {
            axios.post("http://localhost:8001/posts",

                {
                    "id": "@maria",
                    "name": "mariapimental",
                    "img": "https://img.freepik.com/fotos-gratis/linda-mulher-asiatica-usa-aplicativo-de-smartphone-e-envia-mensagens-em-pontos-de-bate-papo-de-midia-social-no-espaco-da-copia-usa-jaqueta-casual_273609-48643.jpg?w=2000",
                    "post": values.inputPost
                }

            ).then(() => {
                setModalOpen(false)
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
                validateSchemaTweetar,
                onSubmitTweet,
            }
        }>
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider