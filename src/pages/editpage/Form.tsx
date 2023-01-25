import { useForm } from 'react-hook-form'
import { useNavigate, useLocation } from 'react-router-dom'
import useStore from '../../store'
import IUpdatePostProps from '../../interface/IUpdatePostProp'
import IPost from '../../interface/IPost'
import useUpdatePost from './useUpdatePost'
import classNames from '../../components/ui'
import cn from 'classnames'
import { useEffect } from 'react'

interface IProps {
  post: IPost | undefined
}

const Form = ({ post }: IProps) => {
  const { register, handleSubmit } = useForm<IUpdatePostProps>({
    defaultValues: {
      body: post?.body,
      title: post?.title,
      tags: post?.tags.join(','),
      summary: post?.summary,
      published: post?.published
    }
  })
  const { success, setPost } = useUpdatePost()
  const token = useStore((state) => state.user?.token.token)
  const postID = useLocation().state
  const navigate = useNavigate()
  const onSubmit = handleSubmit((data) => {
    if (token) {
      data.token = token
      data.postId = postID
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
          {...register('title')}
          className={classNames.input}
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
          className={cn(classNames.textarea, 'h-60')}
          id="summary"
          placeholder="Enter summary ..."
          {...register('summary')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="Tags" className="font-mono font-bold text-gray-500">
          Tags <span className="italic">(separate by comma)</span>
        </label>
        <input className={classNames.input} type="text" {...register('tags')} />
      </div>

      <div className="flex gap-3 content-center">
        <label htmlFor="Tags" className="font-mono font-bold text-gray-500">
          Publish
        </label>
        <input type="checkbox" {...register('published')} />
      </div>

      <div className="flex justify-center content-center my-6">
        <button className={classNames.button} type="submit">
          Update Post
        </button>
      </div>
    </form>
  )
}

export default Form
