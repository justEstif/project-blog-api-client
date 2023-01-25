import { useLocation } from 'react-router-dom'
import useGetPost from '../../hooks/useGetPost'
import Form from './Form'

const EditPage = () => {
  const postId = useLocation().state
  const { post } = useGetPost(postId)

  return <>{!post ? <p>Loading</p> : <Form post={post} />}</>
}

export default EditPage
