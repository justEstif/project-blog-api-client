import { useLocation } from 'react-router-dom'
import useGetPost from '../../hooks/useGetPost'
import Comments from './Comments'
import Header from './Header'
import useComment from '../../hooks/useComment'
import Form from './Form'
import { useEffect, useState } from 'react'
import IComment from '../../interface/IComment'
import useStore from '../../store'
import { getPost } from '../../services/api'

const PostPage = () => {
  const postID = useLocation().state
  const { post } = useGetPost(postID)
  const { body, setBody } = useComment()
  const store = useStore((state) => state)
  const token = store.user?.token.token || ''

  const [comments, setComments] = useState<IComment[] | undefined>(undefined)

  const fetchComments = async () => {
    try {
      const data = await getPost(postID, token)
      setComments(() => data.comment)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchComments()
  }, [])
  useEffect(() => {
    fetchComments()
  }, [body])

  return (
    <>
      <Header post={post} />
      <div className=" [&>*]:py-5 mx-auto ">
        <div className="border-b-2">{post?.body}</div>
        <Comments Form={<Form setBody={setBody} />} postComments={comments} />
      </div>
    </>
  )
}

export default PostPage
