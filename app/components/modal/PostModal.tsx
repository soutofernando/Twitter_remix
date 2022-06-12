/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useRef, useState } from 'react'
import { Transition } from '@headlessui/react'
import Icon from '~/ui/icon/Icon'
import { Field, Form, Formik } from 'formik'
import { PostContext } from '~/utils/postProvider/PostProvider'

const PostModal = () => {

    const { modalOpen, setModalOpen, validateSchemaTweetar, onSubmitTweet } = useContext(PostContext)

    return (

        <Transition.Root show={modalOpen} as={Fragment}>
            <div>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                                <div >
                                    <button className='p-2' onClick={() => setModalOpen(false)}>
                                        <Icon className="w-7 h-7 text-bluetw" d="M6 18L18 6M6 6l12 12" />
                                    </button>
                                    <hr className='mt-1' />
                                </div>
                                <Formik
                                    onSubmit={onSubmitTweet}
                                    validationSchema={validateSchemaTweetar}
                                    initialValues={
                                        {
                                            inputPost: ""
                                        }
                                    }
                                >
                                    {({ errors }) => (
                                        <Form>
                                            <div className="bg-white px-2 pt-3 pb-2 sm:p-3 sm:pb-2">
                                                <div className="sm:flex items-center">
                                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                        <img src="https://media.gettyimages.com/photos/clinking-beer-glasses-by-the-sea-picture-id661776223?s=612x612" className='w-10 h-10 rounded-full' />
                                                    </div>
                                                    <div className="w-full">
                                                        <Field className=' border-none px-4 w-full outline-none' name="inputPost" placeholder="What's happing?" />
                                                        {errors ? <span className='text-sm text-red-400 px-4'>{errors.inputPost}</span> : ""}
                                                    </div>
                                                </div>
                                                <div className="flex justify-end">
                                                    <button
                                                        type="submit"
                                                        className="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-bluetw text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                    >
                                                        Tweet
                                                    </button>
                                                </div>
                                            </div>
                                        </Form >
                                    )
                                    }
                                </Formik >
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </div >
        </Transition.Root >
    )
}

export default PostModal