import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useStore from '../../store'
import useGetPost from '../../hooks/useGetPost'
import useDeletePost from './useDeletepost'
// import cn from 'classnames'
import classNames from '../../components/ui'
// import SButton from '../../components/SButton'
// import SHeader from '../../components/SHeader'
import { useEffect } from 'react'

interface IPostId {
  postid: string
}

const DeletePage = () => {
  const { handleSubmit } = useForm<IPostId>()
  const { success, setDeleteData } = useDeletePost()
  const store = useStore((state) => state)
  const navigate = useNavigate()
  const postId = useLocation().state
  const { post } = useGetPost(postId)
  const token = store.user?.token.token || null
  const onSubmit = handleSubmit(() => {
    if (token) {
      setDeleteData({
        postId: postId,
        token: token
      })
    }
  })

  useEffect(() => {
    success && navigate('/owner')
  }, [success])
  return (
    <>
      <header className={classNames.header}>
        <p className="text-5xl capitalize">Delete Post</p>
        <p className="text-3xl text-slate-700">Title: {post?.title}</p>
      </header>

      <div className="flex justify-center content-center">
        <form onSubmit={onSubmit}>
          <div className="flex gap-4">
            <button className={classNames.button} type="submit">
              Confirm
            </button>
            <Link to={`/owner`}>
              <button className={classNames.cancelButton}>Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default DeletePage
