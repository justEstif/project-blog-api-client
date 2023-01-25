import { useEffect, useState } from 'react'
import IPost from '../interface/IPost'
import { getPost } from '../services/api'
import useStore from '../store'

const useGetPost = (postID: string) => {
  const [post, setPost] = useState<IPost>()
  const store = useStore((state) => state)
  const token = store.user?.token.token || ''

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPost(postID, token)
        setPost(() => data.post)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPost()
  }, [token])

  return { post }
}

export default useGetPost
