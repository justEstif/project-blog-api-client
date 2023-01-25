import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useStore from '../../store'
import ICreatePostProp from '../../interface/ICreatePostProp'
import useCreatePost from './useCreatePost'
import SButton from '../../components/SButton'
import SInput from '../../components/SInput'
import tw from 'tailwind-styled-components'
import STextArea from '../../components/STextArea'
import { useEffect } from 'react'

const STextAreaB = tw(STextArea)`h-80`
const STextAreaS = tw(STextArea)`h-60`

const CreatePage = () => {
  const state = useStore((state) => state)
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<ICreatePostProp>({
    defaultValues: {
      token: state.user?.token.token
    }
  })
  const { success, setPost } = useCreatePost()
  const onSubmit = handleSubmit((data) => {
    if (data.token) {
      setPost(data)
    }
  })

  useEffect(() => {
    success && navigate('/owner')
  }, [success])
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <label htmlFor="title" className="font-mono font-bold text-gray-500">
          Title
        </label>
        <SInput
          autoComplete="off"
          id="title"
          type="text"
          placeholder="Enter title..."
          {...register('title')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="body" className="font-mono font-bold text-gray-500">
          Body
        </label>
        <STextAreaB
          id="body"
          placeholder="Enter body..."
          {...register('body')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="summary" className="font-mono font-bold text-gray-500">
          Summary
        </label>

        <STextAreaS
          id="summary"
          placeholder="Enter summary ..."
          {...register('summary')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="Tags" className="font-mono font-bold text-gray-500">
          Tags <span className="italic">(separate by comma)</span>
        </label>
        <SInput type="text" {...register('tags')} />
      </div>

      <div className="flex gap-3 content-center">
        <label htmlFor="Tags" className="font-mono font-bold text-gray-500">
          Publish
        </label>
        <input type="checkbox" {...register('published')} />
      </div>

      <div className="flex justify-center content-center my-6">
        <SButton type="submit">Create Post</SButton>
      </div>
    </form>
  )
}

export default CreatePage
