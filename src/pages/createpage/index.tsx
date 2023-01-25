import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useStore from '../../store'
import ICreatePostProp from '../../interface/ICreatePostProp'
import useCreatePost from './useCreatePost'
import { useEffect } from 'react'
import classNames from '../../components/ui'
import cn from 'classnames'

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
        <input
          autoComplete="off"
          id="title"
          type="text"
          placeholder="Enter title..."
          className={classNames.input}
          {...register('title')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="body" className="font-mono font-bold text-gray-500">
          Body
        </label>
        <textarea
          className={cn(classNames.textarea, 'h-80')}
          id="body"
          placeholder="Enter body..."
          {...register('body')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="summary" className="font-mono font-bold text-gray-500">
          Summary
        </label>

        <textarea
          id="summary"
          placeholder="Enter summary ..."
          {...register('summary')}
          className={cn(classNames.textarea, 'h-60')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="Tags" className="font-mono font-bold text-gray-500">
          Tags <span className="italic">(separate by comma)</span>
        </label>
        <input type="text" {...register('tags')} className={classNames.input} />
      </div>

      <div className="flex gap-3 content-center">
        <label htmlFor="Tags" className="font-mono font-bold text-gray-500">
          Publish
        </label>
        <input type="checkbox" {...register('published')} />
      </div>

      <div className="flex justify-center content-center my-6">
        <button className={classNames.button} type="submit">
          Create Post
        </button>
      </div>
    </form>
  )
}

export default CreatePage
