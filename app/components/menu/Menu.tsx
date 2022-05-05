import { AnnotationIcon, BellIcon, BookmarkIcon, DotsHorizontalIcon, HashtagIcon, HomeIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import FilledBtn from '~/ui/filledbutton/FilledBtn'

const MenuBar = () => {
    return (
        <div className='xl:px-8 px-4 lg:border-r-2 sm:h-full sm:w-80 hidden lg:block'>
            <div >
                <Link to="/home">
                    <h1>
                        <span className='flex font-medium font-arial text-lg items-center p-5'>
                            <HomeIcon className='w-8 h-8 mr-2' />
                            Pagina Inicial
                        </span>

                    </h1>
                </Link>
                <div>
                    <h1>
                        <span className='flex font-medium font-arial text-lg items-center p-5 text-bluetw'>
                            <HashtagIcon className='w-8 h-8 mr-2' />
                            Explorar
                        </span>
                    </h1>
                </div>
                <div>
                    <h1>
                        <span className='flex font-medium font-arial text-lg items-center p-5 '>
                            <BellIcon className='w-8 h-8 mr-2' />
                            Notificações
                        </span>
                    </h1>
                </div>
                <div>
                    <h1>
                        <span className='flex font-medium font-arial text-lg items-center p-5 '>
                            <AnnotationIcon className='w-8 h-8 mr-2' />
                            Mensagens
                        </span>
                    </h1>
                </div>
                <div>
                    <h1>
                        <span className='flex font-medium font-arial text-lg items-center p-5 '>
                            <BookmarkIcon className='w-8 h-8 mr-2' />
                            Itens Salvos
                        </span>
                    </h1>
                </div>
                <div>
                    <h1>
                        <span className='flex font-medium font-arial text-lg items-center p-5 '>
                            <BellIcon className='w-8 h-8 mr-2' />
                            Listas
                        </span>
                    </h1>
                </div>
                <div>
                    <Link to="/profile">
                        <h1>
                            <span className='flex font-medium font-arial text-lg items-center p-5 '>
                                <img
                                    className="h-8 w-8 rounded-full mr-2"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="user img"
                                />Perfil
                            </span>
                        </h1>
                    </Link>
                </div>
                <div>
                    <h1><span className='flex font-medium font-arial text-lg items-center p-5 '><DotsHorizontalIcon className='w-8 h-8 mr-2' />Mais</span></h1>
                </div>
                <div>
                    <FilledBtn>Tweet</FilledBtn>
                </div>
            </div>
        </div>
    )
}

export default MenuBar